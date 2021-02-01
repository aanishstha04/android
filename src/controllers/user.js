const User = require('../models/user');
const jwt = require('jsonwebtoken');



exports.signup = (req,res) =>{
    User.findOne({ email: req.body.email })
    .exec((error, user) =>{
        if(user) return res.status(400).json({
            message: 'Email already registered.'
        });

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const _user = new User({ 
            firstName,
            lastName,
            email,
            password, 
        });

        _user.save((error, data) =>{
            if(error){
                res.status(400).json({
                    message: 'something wrong'
                });
            }
            if(data){
                return res.status(201).json({
                    message: 'User created sucessfully..!!!'
                });
            }
        });

    });
    
}
exports.signin = (req,res) =>{
    User.findOne({ email: req.body.email })
    .exec((error, user)=>{
        if(error) return res.status(400).json({ error });
        if(user){
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id: user._id,},'SECRET', {expiresIn: '1h'});
                const {_id, firstName, lastName, email, fullName} = user;
                res.status(200).json({
                    token,
                    user:{
                        _id, firstName, lastName, email, fullName
                    }
                });
            }else{
                return res.status(400).json({
                    message: 'Invalid id or password'
                })
            }
        }else{
            return res.status(400).json({ message: 'Something went wrong.'});
        }
    });
}
