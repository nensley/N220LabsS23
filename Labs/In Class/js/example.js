//A wheel - P5

let wheel = {
    radius: 50,
    rotationSpeed: 30,
    spokes: 8,
    innerRadius: 25,
    brand: "advan",
    weight: 10,
    rotating: true,
    price: 90
    draw: function(){
        fill(this.color)
    }
}
function draw(){
    wheel.draw()
}