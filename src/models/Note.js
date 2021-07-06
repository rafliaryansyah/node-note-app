'use strict';

const dbConnection = require('./../config/database');
const slugify = require('slugify');
const { v4: uuidv4 } = require('uuid');

const note = function(note) {

    this.id = uuidv4();
    this.title = note.title;
    this.slug = slugify(`${note.title}`).toLowerCase();
    this.description = note.description;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.deleted_at = null;

};

// Function Create Note
note.create = (newNote, result) => {

    dbConnection.query("INSERT INTO notes SET ?", newNote, (error, res) => {
        if (error) {
            console.log("Error : ", error);
            result(null, error);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });

};

// Get Note by id
note.find = (id, result) => {

    dbConnection.query('SELECT * FROM notes WHERE id = ? LIMIT 1', [id], (error, res) => {
        if (error) {
            console.log('Error : ', error);
            result(null, error);
        } else {
            result(null, res);
        }
    });

}

// Function Get Notes
note.get = function(result) {

    dbConnection.query("SELECT * FROM notes", function(error, res) {

        if (error) {
            console.log(error);
            result(null, error);
        } else {
            console.log('Notes : ', res);
            result(null, res);
        }

    });

};

note.update = (id, note, result) => {

    dbConnection.query("UPDATE notes SET title = ?, description = ?, updated_at = ? WHERE id = ?", [note.title, note.description, new Date(), id], (error, res) => {

        if (error) {
            console.log('Error : ', error);
            result(null, error);
        } else {
            result(null, res);
        }

    });

};

note.delete = (id, result) => {

    dbConnection.query("UPDATE notes SET deleted_at = ?, WHERE id = ?", [new Date(), id], (error, res) => {

        if (error) {
            console.log('Error : ', error);
            result(null, error);
        } else {
            result(null, res);
        }

    });

}

note.restore = (id, result) => {
    // UPDATE notes SET deleted_at = null WHERE id = "22ebx0fx-xb44-4ec1-bbed-7f8193c1ea70"
    database.query("UPDATE notes SET deleted_at = null WHERE id = ?", [id], (error, res) => {

        if (error) {
            console.log('Error : ', error);
            result(null, error);
        } else {
            console.log('Error : ', res);
            result(null, res);
        }

    })

}

note.forceDelete = (id, result) => {

    database.query("DELETE FROM notes WHERE id = ?", [id], (error, res) => {

        if (error) {
            console.log('Error : ', error);
            result(null, error);
        } else {
            console.log('Error : ', res);
            result(null, res);
        }

    })

}

module.exports = note;