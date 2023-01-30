import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import authRouter from "./routes/auth";

import passport from "passport";
import SequelizeStoreBuilder from "connect-session-sequelize";

const SequelizeStore = SequelizeStoreBuilder(session.Store);

import { sequelize } from "./models";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const store = new SequelizeStore({
	db: sequelize,
});

app.use(
	session({
		resave: false,
		saveUninitialized: false,
		store,
		secret: "jellyfish",
	}),
);

app.use(passport.initialize());
app.use(passport.session());

store.sync();

app.use(function (req, res, next) {
	res.locals.user = req.user
	console.log(req.session);
	next()
})

app.use(passport.authenticate("session"));

app.use("/", indexRouter);
app.use("/", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
