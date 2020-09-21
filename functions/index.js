const functions = require('firebase-functions');
const express = require('express')
const app = express ()
const { getStudents, getStudentByName } = require('./src/students')

const firebase = require('firebase-admin')

const firebaseApp = firebase.initializeApp(
  functions.config().firebase
)

const engines = require('consolidate') 

app.engine('hbs',engines.handlebars)
app.set('views', './views')
app.set('view engine', 'hbs')
 
app.get('/courses', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-max-age=600')
    res.render('index', { courses })
 })

function getCourses() {
    const ref = firebase.database().ref('courses')
    return ref.once('value').then(snap => snap.val())
}

app.get('/students', getStudents)
app.get('/students/:name', getStudentByName)

app.get('/', (req, res) => { 
  res.set('Cache-Control', 'public, max-age=300, s-max-age=600')
   getCourses().then(courses => {
        res.render('index', { courses })
    })
 })

 app.get('/courses.json', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-max-age=600')
    getCourses().then(courses => {
      res.json(courses)
    })
})




exports.app = functions.https.onRequest(app)







