"use strict";

const { changeUser } = require("./../config/database");
const database = require("./../config/database");

const Note = require("./../models/Note");

/**
 *
 * Create Note
 *
 */
exports.create = function(request, response) {
    const newNote = new Note(request.body);

    try {
        Note.create(newNote, (error, note) => {
            if (error) return response.json(error);

            return response.status(200).json({
                code: 200,
                status: "OK",
                message: "success",
            });
        });
    } catch (error) {
        throw new error();
    }
};

/**
 *
 * Index Note
 *
 */
exports.index = async function(request, response) {
    try {

        await Note.get((error, notes) => {
            console.log("get@index");

            if (error) throw new error();

            const resultValues = notes.map(function(note) {
                note.created_at = Math.floor(
                    new Date(note.created_at).getTime() / 1000
                );
                note.updated_at = Math.floor(
                    new Date(note.updated_at).getTime() / 1000
                );
                note.deleted_at = Math.floor(
                    new Date(note.deleted_at).getTime() / 1000
                );

                return note;
            });

            return response.status(200).json({
                code: 200,
                status: "OK",
                data: resultValues,
            });
        });
    } catch (error) {
        return response.json(error);
    }
};

/**
 *
 * Get Note By ID
 *
 */
exports.find = (request, response) => {
    try {

        Note.find(request.params.id, (error, note) => {
            if (error) throw new error;

            response.json({
                code: 200,
                status: 'OK',
                data: {
                    id: note[0].id,
                    title: note[0].title,
                    slug: note[0].slug,
                    description: note[0].description,
                    createdAt: note[0].created_at,
                    updatedAtL: note[0].updated_at,
                    deletedAt: note[0].deleted_at
                }
            });

        })

    } catch (error) {
        return response.json(error);
    }
};

/**
 *
 * Update Note By ID
 *
 */
exports.update = (request, response) => {
    try {
        // console.log(request.body);
        const data = Note.update(request.params.id, request.body, (error, res) => {

            if (error) throw new error;

            response.json({
                code: 200,
                status: 'OK',
                message: 'success'
            })

        });

    } catch (error) {
        return response.json(error);
    }
};

/**
 *
 * Update Note By ID
 *
 */
exports.destory = (request, response) => {
    try {
        // console.log(request.body);
        Note.delete(request.params.id, (error, res) => {

            if (error) throw new error;

            response.json({
                code: 200,
                status: 'OK',
                message: 'success'
            })

        });

    } catch (error) {
        return response.json(error);
    }
};

/**
 *
 * Update Note By ID
 *
 */
exports.restore = (request, response) => {
    try {
        console.log(request.params);
        Note.restore(request.params.id, (error, res) => {

            if (error) throw new error;

            response.json({
                code: 200,
                status: 'OK',
                message: 'success'
            })

        });

    } catch (error) {
        return response.json(error);
    }
};


/**
 *
 * Update Note By ID
 *
 */
exports.forceDelete = (request, response) => {
    try {
        // console.log(request.body);
        Note.forceDelete(request.params.id, (error, res) => {

            if (error) throw new error;

            response.json({
                code: 200,
                status: 'OK',
                message: 'success'
            })

        });

    } catch (error) {
        return response.json(error);
    }
};