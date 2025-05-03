const router = require('express').Router();
const { getAllUsers, addUser, deleteUser, updateUser, login, logout } = require('../controllers/user-controller')
const verifyJWT = require('../auth/auth')

/* Users routes*/

router.post('/api/auth/signup', addUser)    // It related register or sign-up operation it is free, that way it is unprotected.
router.post('/api/auth/signin', login)       // it is not protected with JWT. It need correct password and email.
router.get('/api/auth/logout', logout)

router.get('/api/users', verifyJWT, getAllUsers)
router.delete('/api/del-user', verifyJWT, deleteUser)
router.put('/api/update-user', verifyJWT, updateUser)

module.exports=router