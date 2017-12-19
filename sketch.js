let x, y;
let r;
let points = [];

function setup()
{
    createCanvas(800, 600);
    angleMode(RADIANS);
    frameRate(10);
    x = 0;
    y = 0;
    r = 250;
}

function draw()
{
    background(0);
    translate(width / 2, height / 2);
    noFill();
    stroke(255);
    strokeWeight(3);

    for(let theta = 0; theta < TWO_PI * 30; theta += TWO_PI / 200)
    {
        r = (Math.sqrt(cos(2 * theta))) * 120;
        x = r * cos(theta);
        y = r * sin(theta);
        points.push(createVector(x, y, theta));    
    }  

    beginShape();
    for(let i = 0; i < points.length; i++)
    {
        vertex(points[i].x, points[i].y);
    } 
    endShape();
}