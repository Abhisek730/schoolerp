const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const csvtojson = require("csvtojson")

const student = mongoose.model("student");


router.get('/', (req, res) => {
    student.find()
        .then(data => { res.json(data) })
})

// to register student
router.post("/register", (req, res) => {
    const {
        student_name,
        classname,
        parents_name,
        section,
        addmission_no,
        age,
    } = req.body;

    if (!student_name || !classname || !parents_name || !section || !addmission_no || !age) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    student.findOne({ addmission_no }).then((savedStudent) => {
        if (savedStudent) {
            return res.status(422).json({ error: "Student already exist with that addmission number" })
        }
    })

    const new_student = new student({
        student_name,
        classname,
        roll_no: addmission_no,
        parents_name,
        age,
        section
    })
    new_student.save()
        .then(user => { res.json({ message: "Registered successfully" }) })
        .catch(err => { console.log(err) })
    console.log(new_student)
})

// to show students
router.get("/mystuds", (req, res) => {
    student.find({ Class: req.headers.class, Section: req.headers.section })
        .sort({ 'First_Name': 1 })
        .then(mystuds => {
            res.json(mystuds)
        })
})

// to find students with admission no.
router.get("/findStudent/:adm", (req, res) => {
    student.findOne({ Admission_No: req.params.adm })
        .then(studs => {
            res.json(studs)
        })
})

// to find students with Name,class and section
router.get("/findStudent/:name/:class/:section", (req, res) => {
    student.findOne({ First_Name: req.params.name, Class: req.params.class, Section: req.params.section })
        .then(studs => {
            res.json(studs)
        })
})

// to edit students
router.put("/editStudent", (req, res) => {
    const {
        student_name,
        classname,
        father_name,
        mother_name,
        section,
        addmission_no,
        address,
        DOB,
        father_mobile,
        rollNo
    } = req.body;
    console.log(typeof (address))
    student.findByIdAndUpdate(req.body.id, {
        $set: {
            First_Name: student_name,
            Class: classname,
            Section: section,
            Admission_No: addmission_no,
            Father_Name: father_name,
            Mother_Name: mother_name,
            Address: address,
            Father_Mobile: father_mobile,
            DOB: DOB,
            Roll_No: rollNo
        },
        $currentDate: { lastModified: true }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            console.log(err.message)
            return res.status(422).json({ error: err })

        } else {
            res.json(result)
        }
    })

})

// set roll no
router.put("/setroll", (req, res) => {

    student.findByIdAndUpdate(req.body.id, {
        $set: {
            Roll_No: req.body.Roll_No
        },
        $currentDate: { lastModified: true }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            console.log(err.message)
            return res.status(422).json({ error: err })

        } else {
            res.json(result)
        }
    })

})

module.exports = router