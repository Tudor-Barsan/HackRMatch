import express from 'express';
const router = express.Router();
import passport from 'passport';

const successLoginURL = "http://localhost:5173/login/success"
const errorLoginURL = "http://localhost:5173/login/error"

router.get("/user", (req, res) => {
    console.log(req.user);
    res.json(req.user);
});

// login
router.get('/login', (req, res) => {
    console.log('login called');
    res.render('./login', { title: 'Login' });
});

// logout
router.get('/logout', function(req, res, next) {
    console.log("logout called")
    req.logout(function(err) {
        console.log(err, "nskfjgk")
        if (err) { return next(err); }
        return res.json({
            message: "OK"
        })
      });
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