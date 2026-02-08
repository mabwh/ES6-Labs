function Course(courseInfoObj = {courseName, courseDuation, courseOwner})
{
    let defaultValues = {
        courseName: "XYZ",
        courseDuation: "10",
        courseOwner: "John Doe"
    }

    Object.assign(defaultValues, courseInfoObj);

    Object.defineProperties(this, {
        "name": {
            get(){return defaultValues.courseName},
            set(val){defaultValues.courseName = val}
        },
        "duration": {
            get(){return defaultValues.courseDuation},
            set(val){defaultValues.courseDuation = val}
        },
        "owner":
        {
            get(){return defaultValues.courseOwner},
            set(val){defaultValues.courseOwner = val}
        },
        "display":
        {
            value(){
                console.log("Course name: ", this.name);
                console.log("Course duration: ", this.duration);
                console.log("Course owner: ", this.owner);
            }
        }
    });
}

let crs1 = new Course(
    { courseName: 'C#', courseDuation: '120', courseOwner: 'Tim Corey' }
);

crs1.display();





