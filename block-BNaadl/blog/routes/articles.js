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
  Article.findById(id, (err, article) => {
    if(err) return next(err);
    res.render('singleArticle', { article: article});
});
})

// create article
router.post('/',(req,res,next)=>{
  req.body.tags = req.body.tags.trim().split(" ")
  Article.create(req.body,  (err, createdArticle) => {
    if(err) return next(err);
    res.redirect('/articles');
});   
})

// edit article form
router.get('/:id/edit', (req,res,next)=>{
  var id = req.params.id
  Article.findById(id, (err, article) =>  {
    if(err) return next(err);
    res.render('editArticle', { article });
});
})

// create article form
router.get('/new',(req,res)=>{
  res.render('addArticle')
})

// fetch single article

router.get('/:id', (req,res,next)=>{
  var id = req.params.id
  Article.findById(id, (err, article) => {
    if(err) return next(err);
    res.render('singleArticle', { article: article});
});
})

// Increment Likes
router.get('/:id/likes', (req, res, next) => {
  let id = req.params.id;

  Article.findByIdAndUpdate(id, {$inc: {likes: 1}}, (err, article) =>  {
      if(err) return next(err);
      res.redirect('/articles/' + id);
  });
});

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
  req.body.tags = req.body.tags.trim().split(' ');
    Article.findByIdAndUpdate(id, req.body, (err, updatedArticle) => {
        if(err) return next(err);
        res.redirect('/articles');
    });
})
router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  Article.findByIdAndUpdate(id, req.body, (err, updatedArticle) => {
      if(err) return next(err);
      res.redirect('/articles');
  });
});

// delete article
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  Article.findByIdAndDelete(id, (err, deletedArticle) => {
      if(err) return next(err);
      res.redirect('/articles');
  });
});
router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Article.findByIdAndDelete(id, (err, deletedArticle) => {
      if(err) return next(err);
      res.redirect('/articles');
  });
});
module.exports = router;
