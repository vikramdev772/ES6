let userDetails ={
    
    firstName: "Vikram",
    lastName : "Ram",
    roll     : "Student",
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount:function(){
        return ` ${this.firstName} is have course count of ${this.courseList.length}`;
    }
}
console.log(userDetails);

// {
//     firstName: 'Vikram',
//     lastName: 'Ram',
//     roll: 'Student',
//     courseList: [],
//     buyCourse: [Function: buyCourse],
//     getCourseCount: [Function: getCourseCount]
//   }

console.log(userDetails.buyCourse("MERN Stack developer"));
console.log(userDetails.getCourseCount());


// undefined
//  Vikram is have course count of 1



