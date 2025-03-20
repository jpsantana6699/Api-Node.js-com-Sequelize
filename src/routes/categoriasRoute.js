const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();

const router = Router();

router.get('/', (req, res) => categoriaController.pegaTodos(req, res));
router.get('/:id', (req, res) => categoriaController.pegaUmPorId(req, res));
router.post('/', (req, res) => categoriaController.criaNovo(req, res));
router.put('/:id', (req, res) => categoriaController.atualiza(req, res));
router.delete('/:id', (req, res) => categoriaController.exclui(req, res));

module.exports = router;