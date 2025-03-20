const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

const router = Router();

router.get('/', (req, res) => cursoController.pegaTodos(req, res));
router.get('/:id', (req, res) => cursoController.pegaUmPorId(req, res));
router.post('/', (req, res) => cursoController.criaNovo(req, res));
router.put('/:id', (req, res) => cursoController.atualiza(req, res));
router.delete('/:id', (req, res) => cursoController.exclui(req, res));

module.exports = router;