const userModel = require('./models/user');
const StudentModel = require('./models/students');
const CourseModel = require('./models/course')

const mongoose = require('mongoose');
const studentModel = require('./models/students');

const environment = async()=>{
    await mongoose.connect('mongodb+srv://felipe:As123@codercluster.kr053x4.mongodb.net/?retryWrites=true&w=majority');

    let student = await studentModel.find({_id:"657a434be808e56224dcda9c"});

    console.log(JSON.stringify(student,null,"\t"));

    // student[0].courses.push({course:"657a448dfe54a70910be0648"});

    // let result = await studentModel.updateOne({_id:"657a434be808e56224dcda9c"},student[0]);
    
    // await CourseModel.create({
    //     title:"Back-End",
    //     description:"Curso de back-end com stack M.E.R.N",
    //     dificulty:5,
    //     topics:["MongoDB","ExpressJS","React","NodeJS"],
    //     professor:"Felipe"
    // });

    // await StudentModel.create({
    //     first_name: "Pedro",
    //     last_name: "Filho",
    //     email: "pedrinho@gmail.com",
    //     gender: "Masculino"
    // });

    // let response = await userModel.find({first_name:"Marchall"}).explain('executionStats');
    // console.log(response);
}

environment();