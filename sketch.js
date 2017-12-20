let x, y;
let r;
let points = [];
let theta = 0;
var listEquations = document.getElementById("selEquation");
var listEquation = listEquations.options[listEquations.selectedIndex].value;
let equation = 0;
var button = document.getElementById("startButton");
let isStartButtonClicked;

function setup()
{
    createCanvas(800, 600);
    angleMode(RADIANS);
    x = 0;
    y = 0;
    r = 250;
    isStartButtonClicked = false;
}

function clickOnDrawButton() 
{ 
    points.length = 0;
    theta = 0; x = 0; y = 0;
    isStartButtonClicked = !isStartButtonClicked;
}

function drawShape()
{
    // LOOP TO CALCULATE AND STORE POINTS
    listEquation = listEquations.options[listEquations.selectedIndex].value;    
    if(this.listEquation === "2 * cos(6 * theta)") r = (2 * cos(6 * theta)) * 140;
    else if(this.listEquation === "2 * cos(2 * theta)") r = (2 * cos(2 * theta)) * 140;
    else if(this.listEquation === "5 * theta") r = (5 * theta);
    else r = 150;

    // THE R VALUE TO SET WITH A POLAR EQUATION
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

function draw()
{
    // CANVAS SETTINGS
    background(255);
    translate(width / 2, height / 2);
    noFill();
    stroke(0);
    strokeWeight(4);
    if(isStartButtonClicked) this.drawShape();
}