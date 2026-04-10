const express = require('express');
const router = express.Router();
const { create, getAll, getById, update } = require('../controller/tokenController');

router.get('/health', (req, res) => res.json({ status: 'ok', service: 'token-service' }));
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);

module.exports = router;