var express = require('express');
var router = express.Router();
var quizController = require('/home/javier.delgado.palacios/mis_proyectos/quiz/controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
