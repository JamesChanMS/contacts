var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// 解析body
var bodyParser = require('body-parser');


var index = require('./routes/index');
// var users = require('./routes/users');

const PORT = process.env.PORT || 3000

const users = {
    username:'password',
}


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/users', users);

// ES6 语法 =>
app.post('*', (req, res) => {
    const {username, password} = req.body
    /**
     * 有被攻击的风险
     * 保护措施 阻止一个IP发起多次请求（限制IP请求次数）
     * attacker could actually probe the user and find all of your usernames.
     *
     */
    if (!username || !password) return res.status(400).send('Missing username or password')
    if (!users[username]) return res.status(403).send('User does not exist')
    if (users[username] !== password) return res.status(403).send('Incorrect password')
    return res.status(200).send();
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
