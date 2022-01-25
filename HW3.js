
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("show").addEventListener("click", function () {
        console.log(PersonArray);
        let message = "Movie  Year  Rating\n";
        for (i = 0; i < PersonArray.length; i++) {
            message = message + PersonArray[i].name + "  " + PersonArray[i].year +"  "+ PersonArray[i].rating+ "\n";
        }
        document.getElementById("output").value = message;
    });
});

PersonArray = []; // define an array of type Person

function formSubmitEvent() {
    let Person = {
        name:  document.getElementById("movietitle").value,
        year: document.getElementById("year").value,
        rating: document.getElementById("rating").value
    }
    if (Person.name==''||Person.year==''||Person.rating==''){
        alert("please enter all the fields")
    }
    else if(parseInt(Person.rating) > 5||parseInt(Person.rating) < 0) {
        alert("Value should be between 0 and 5")
    }
    else{
        PersonArray.push(Person);
    }
}


