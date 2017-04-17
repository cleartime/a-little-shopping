// app：express对象
module.exports = function (app) {
    app.get('/register', function (req, res) {
        res.render('register');
    });
    app.post('/register', function (req, res) {
        var User = global.dbHelper.getModel('user'),
            uname = req.body.uname;
        User.findOne({
            name: uname
        }, function (error, doc) {
            if (doc) {
                req.session.error = '用户名已存在！';
                res.status(500).json({
                    error: error
                })
            } else {
                User.create({
                    name: uname,
                    password: req.body.upwd
                }, function (error, doc) {
                    if (error) {
                        res.status(500).json({
                            error: error
                        })
                    } else {
                        req.session.error = '用户名创建成功！';
                        res.send(200);
                    }
                });
            }
        });
    });
}