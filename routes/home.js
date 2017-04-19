module.exports = function (app) {
    app.get('/home', function (req, res) {
        if (req.session.user) {
            var Commodity = global.dbHelper.getModel('commodity');
            Commodity.find({}, function (error, docs) {
                if (!docs.length) {
                    res.render('addcommodity')
                } else {
                    res.render('home', {
                        Commoditys: docs
                    });
                }
            });
        } else {
            req.session.error = "请先登录"
            res.redirect('/login');
        }
    });
    app.get('/addcommodity', function (req, res) {
        res.render('addcommodity');
    });
    app.post('/addcommodity', function (req, res) {
        var Commodity = global.dbHelper.getModel('commodity');
        if(!req.body.price.length||!req.body.name.length){
            req.session.error = "请正确添加商品";
            res.send(404)
        }else{
            Commodity.create({
                        name: req.body.name,
                        price: req.body.price,
                        imgSrc: req.body.imgSrc
                    }, function (error, doc) {
                        if (doc) {
                            res.send(200);
                        } else {
                        res.status(500).json({ error: error })
                        }
                    });
        }
       
    });
}