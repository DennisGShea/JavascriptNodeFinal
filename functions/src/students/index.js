let students = [{
    name: 'Omar',
    last: 'Leon',
    courses: ['JavaScript', 'React'],
    level: 'Intermediate'
  }, {
    name: 'Andres',
    last: 'Espinosa',
    courses: ['JavaScript', 'React'],
    level: 'Intermediate'
  }, {
    name: 'Pat',
    last: 'Belcher',
    courses: ['JavaScript', 'React'],
    level: 'Intermediate'
  }, {
    name: 'Dennis',
    last: 'Shea',
    courses: ['JavaScript', 'React'],
    level: 'Intermediate'
  }]


  exports.getStudents = (req, res) => {
   res.send(students)
  }
  exports.getStudentByName = (req, res) => {
    let { name } = req.params
    let results = students.filter(stud => {
      return stud.name.toLowerCase() === name.toLowerCase()
        || stud.last.toLowerCase() === name.toLowerCase()
    })
   res.send(results)
  }



