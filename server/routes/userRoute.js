import express from 'express';
const router = express.Router();
import passport from 'passport';

const successLoginURL = "http://localhost:5173/login/success"
const errorLoginURL = "http://localhost:5173/login/error"

router.get("/user", (req, res) => {
  res.json(req.user);
});

// login
router.get('/login', (req, res) => {
    console.log('login called');
    res.render('./login', { title: 'Login' });
});

// logout
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/api');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', 
  {
    failureRedirect: errorLoginURL,
    successRedirect: successLoginURL,
  }), 
  (req, res) => {
    res.redirect('/api')
});

export default router;