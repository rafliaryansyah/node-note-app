const express = require('express');
const route = express.Router();

const NoteController = require('./../controllers/NoteController');

/**
 * 
 * List Route API Note
 * 
 */
route.post('/', NoteController.create);
route.get('/', NoteController.index);
route.get('/:id', NoteController.find);
route.patch('/:id', NoteController.update);
route.patch('/:id/restore', NoteController.restore);
route.delete('/:id', NoteController.destory);
route.delete('/:id/forceDelete', NoteController.forceDelete);

module.exports = route;