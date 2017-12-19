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

    for(let theta = 0; theta < TWO_PI; theta += TWO_PI / 200)
    {
        r = random(100, 250);
        x = r * cos(theta);
        y = r * sin(theta);
        points.push(createVector(x, y, theta));    
    }    
}

function draw()
{
    background(51);
    translate(width / 2, height / 2);
    noFill();
    stroke(255);



    beginShape();
    for(let i = 0; i < points.length; i++)
    {
        r = random(100, 250);
        points[i].x = r * cos(points[i].z);
        points[i].y = r * sin(points[i].z);
        vertex(points[i].x, points[i].y);
    } 
    endShape();
}