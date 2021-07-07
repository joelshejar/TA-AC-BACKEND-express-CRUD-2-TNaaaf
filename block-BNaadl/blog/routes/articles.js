var express = require('express');
const Article = require('../models/Article');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // handle here
  Article.find({},(err,articles)=>{
    if(err) return next(err)
    res.render('articles', {articles})
  })
  
});
// fetch single article
router.get('/:id', (req,res,next)=>{
  var id = req.params.id
})

// create article
router.post('/',(req,res,next)=>{
  req.body.tags = req.body.tags.trim().split(" ")
})

// edit article form
router.get('/:id/edit', (req,res,next)=>{
  var id = req.params.id
})

// create article form
router.get('/new',(req,res)=>{
  res.render('addArticle')
})

// fetch single article

router.get('/:id', (req,res,next)=>{
  var id = req.params.id
})

// create article
router.post('/', (req,res,next)=>{
  req.body.tags = req.body.tags.trim().split(' ')
})

// edit article form
router.get('/:id/edit',(req,res,next)=>{
  var id = req.params.id
  Article.findById(id, (err,article)=>{
    article.tags = article.tags.join(" ")
    if(err) return next(err)
    res.render('editArticleForm', {article})
  })
})

// update article
router.post('/:id', (req,res)=>{
  var id = req.params.id
  req.body.tags = req.body.tags.split(" ")
})

// delete article
router.get('/:id/delete', (req,res,next)=>{

})

module.exports = router;
