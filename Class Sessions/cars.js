// From the 2/1 class

var i = 0;

cars_coll = [
    {make:"Honda", model:"Civic", year:"2005"},
    {make:"Chevy", model:"Silverado", year:"2015"},
    {make:"Dodge", model:"Viper ACR", year:"2017"},
    {make:"Chevy", model:"Corvette Z06", year:"2023"},
    {make:"Cadillac", model:"CTS-V BlackWing", year:"2022"}
];

function firstCar(){
    const car = cars_coll[0]
    document.getElementById("make").value=car.make;
    document.getElementById("model").value=car.model;
    document.getElementById("year").value=car.year;
}

function next() {
    i++;
    if (i === cars_coll.length) {
        i = 0;
    }
    const car = cars_coll[i]
    console.log(i + "***" + car)
    document.getElementById("make").value=car.make;
    document.getElementById("model").value=car.model;
    document.getElementById("year").value=car.year;
}

function prev(example_input2, example_input) {
    i--;
    if (i === cars_coll.length) {
        i = cars_coll.length-1;
    }
    const car = cars_coll[i]
    console.log(i + "***" + car)
    document.getElementById("make").value=car.make;
    document.getElementById("model").value=car.model;
    document.getElementById("year").value=car.year;
}