const cricle = {
    radius: 1,
    location: {
        x:1,
        y:1,
    },
    draw: function(){
        console.log("We are drwawing a circle!")
    }

}


// cricle.draw();

//factory functions 

function circle(radius){
   return {
    radius: radius,
    draw: function (){
        console.log('The circle drawn has a radius of ' + this.radius)
    }
   }
}

const theCircle = circle(3.5);


//Constructor function 
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('We are using constructors in JavaScript!')
    }
}

const theNewCircle = new Circle(4.5);
// theNewCircle.draw();


