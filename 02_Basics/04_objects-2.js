const tinderUser = new Object();
// const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Dev";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            Fname: "Devendra",
            Sname: "Kumawat",
        }
    }
}

// console.log(regularUser.fullname.username.Fname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({}, obj1,obj2);
const obj3 = {...obj1,...obj2};

// console.log(obj3);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    courseName: "JavaScript",
    price: "999",
    courseTeacher: "Someone"
}

const {courseTeacher: Teacher} = course
// console.log(courseTeacher);
console.log(Teacher);

/*
{
    "name": "Devendra",
    "courseN": "JavaScript",
    "price": "Free"
}
*/

