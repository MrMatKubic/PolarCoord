let x, y;
let r;
let points = [];
let theta = 0;

function setup()
{
    createCanvas(800, 600);
    angleMode(RADIANS);
    x = 0;
    y = 0;
    r = 250;
}

function draw()
{
    // CANVAS SETTINGS
    background(255);
    translate(width / 2, height / 2);
    noFill();
    stroke(0);
    strokeWeight(4);

    // LOOP TO CALCULATE AND STORE POINTS
    r = (2 * cos(6 * theta)) * 140; // THE R VALUE TO SET WITH A POLAR EQUATION
    x = r * cos(theta);
    y = r * sin(theta);
    points.push(createVector(x, y, theta));     

    // LOOP TO DRAW POINTS WITH VERTICES
    beginShape();
    for(let i = 0; i < points.length; i++)
    {
        vertex(points[i].x, points[i].y);
    } 
    endShape();

    if(theta < TWO_PI) theta += TWO_PI / 400;
}