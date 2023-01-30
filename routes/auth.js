import { Router } from "express";
import LocalStrategy from "passport-local";
import passport from "passport";

import { User } from "../models";

import bcrypt from "bcrypt";

passport.use(
  new LocalStrategy({ usernameField: "email" }, async function verify(
    email,
    password,
    done
  ) {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return done(null, false);
    }
    if (!await user.verifyPassword(password)) {
      return done(null, false);
    }
    return done(null, user);
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { email: user.email, name: user.name });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

const router = Router();

/* GET home page. */
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Express" });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
    failureMessage: true,
  })
);


router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

router.get("/register", function (req, res, next) {
  res.render("register", { title: "Express" });
});

router.post("/register", async function (req, res, next) {
	const salt = await bcrypt.genSalt(10);
	const hashed = await bcrypt.hash(req.body.password, salt);

  const user = await User.create({name: req.body.name, hash: hashed, email: req.body.email, isAdmin: false});

	req.login(user, err => {
		if (err) return next(err);
		res.redirect("/")
	})
});

export default router;
