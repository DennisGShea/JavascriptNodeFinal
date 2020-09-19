const functions = require('firebase-functions');
const express = require('express')
const app = express ()
const { getStudents, getStudentByName } = require('./src/students')

app.get('/students', getStudents)
app.get('/students/:name', getStudentByName)


exports.app = functions.https.onRequest(app)



res.set('Cache-Control', 'public, max-age=300, s-max-age=600')







