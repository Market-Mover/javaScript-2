const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth');


exports.registerUser = (req, res) => {

  User.exists({ email: req.body.email }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Email address is already taken'
        })
      }
      else {

        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {

          if(err) {
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Failed when encrypting user password'
            })
          }


          const newUser = new User({
            firstName:    req.body.firstName,
            lastName:     req.body.lastName,
            email:        req.body.email,
            passwordHash: hash
          })

          newUser.save()
            .then(() => {
              res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'User was created successfully'
              })
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create user'
              })
            })
        })
      }
    }
  })
}


exports.loginUser = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(user === null) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Incorrect email or password'
        })
      }

      try {
        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
          if(err) {
            return res.status(400).json(err)
          }
          else {
  
            if(result) {
              return res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Authentication was successful',
                token: auth.generateToken(user),
                email: user.email,
                firstName: user.firstName
              })
            }
            return res.status(401).json({
              statusCode: 401,
              status: false,
              message: 'Incorrect email or password'
            })
  
          }
        })
      }
      catch {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Unable to authenticate user. Please contact the system administrator'
        })
      }
    })
}

exports.updateUser = (req, res) => {
  
  Product.updateOne( { _id: req.params.id} , {
    ...req.body,
    modified: Date.now()
  })
     .then(() => {
      res.status(200).json({
        statusCode:200,
        status: true,
        message: 'User updated'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode:500,
        status: false,
        message:'Failed to update product'
      })
    })
  }
  exports.saveOrder = (req, res) => {
    User.findOne({email: req.body.email})
    .then(user => {
      //Söker user utifrån email, pushar order till arrayen orders i usern
        user.orders.push(req.body.order)
        user.save(user)
        
    })
    .then(() => {
      res.status(200).json({
        statusCode:200,
        status: true,
        message: 'Order placed successfully'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode:500,
        status: false,
        message: 'Failed to place order'
      })
    })
  }
  //Hämtar en user vi sedan hämtar order ur
  exports.getOrder = (req, res) => {
    User.findOne({email: req.body.email })
    .then(user => {
      return res.status(200).json(user)
    })
    .catch(err => {
      return res.status(500).json(err)
    })
  }