const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/', (req, res) => pessoaController.pegaTodos(req, res));
router.get('/:id', (req, res) => pessoaController.pegaUmPorId(req, res));
router.post('/', (req, res) => pessoaController.criaNovo(req, res));
router.put('/:id', (req, res) => pessoaController.atualiza(req, res));
router.delete('/:id', (req, res) => pessoaController.exclui(req, res));
router.post('/:estudanteId/matriculas', (req, res) => pessoaController.pegaMatriculas(req, res));
router.post('/:estudanteId/matriculas', (req, res) => matriculaController.criaNovo(req, res));

module.exports = router;