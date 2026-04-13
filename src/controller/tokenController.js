const { v4: uuidv4 } = require('uuid');
const { TokenMaster } = require('../db');

const create = async (req, res) => {
  try {
    const token = await TokenMaster.create({
      id: uuidv4(),
      ...req.body
    });
    return res.status(201).json(token);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const tokens = await TokenMaster.findAll();
    return res.status(200).json(tokens);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const token = await TokenMaster.findByPk(req.params.id);
    if (!token) return res.status(404).json({ error: 'Token not found' });
    return res.status(200).json(token);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const token = await TokenMaster.findByPk(req.params.id);
    if (!token) return res.status(404).json({ error: 'Token not found' });
    await token.update(req.body);
    return res.status(200).json(token);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { create, getAll, getById, update };