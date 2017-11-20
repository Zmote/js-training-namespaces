// Assignment:
// 1) Use namespaces to divide the code, for each new namespace, use a new file!
// 2) Try to decide on yourself which namespace technique fits the best here!
// 3) Look at what the functions do and try to find a commonality to pick a namespace name
// 4) Don't concern yourself too much with the HTML, it's secondary here --> although the result should
//    look the same after dividing up your code
// 5) Check the js/example folders and example/example.html HTML - File to view examples of different namespaceing techniques
function Point(x, y) {
    if (!(this instanceof Point)) {
        return new Point(x, y);
    } else {
        this.x = x;
        this.y = y;
    }
}

function Rectangle(origin, height, width) {
    if (!(this instanceof Rectangle)) {
        return new Rectangle(origin, height, width);
    } else {
        this.topLeft = new Point(origin.x, origin.y);
        this.topRight = new Point(origin.x + width, origin.y);
        this.bottomLeft = new Point(origin.x, origin.y + height);
        this.bottomRight = new Point(origin.x + width, origin.y + height);
    }
}

function Circle(origin, radius) {
    if (!(this instanceof Circle)) {
        return new Circle(origin, radius);
    } else {
        this.center = origin;
        this.radius = radius;
    }
}

function Square(origin, width) {
    if (!(this instanceof Square)) {
        return new Square(origin, width);
    } else {
        this.center = origin;
        this.width = width;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function rest(a, b) {
    return a % b;
}

function square(a) {
    return a * a;
}

function createPoint(x, y) {
    return new Point(x, y);
}

function createPointAtRotation(point, degree) {
    let xPos = point.x + (Math.sin(degree * Math.PI / 180) * 100);
    let yPos = point.y + (Math.cos(degree * Math.PI / 180) * 100);
    return new Point(xPos, yPos);
}

function addToPoint(point, x, y) {
    point.x += x;
    point.y += y;
    return point;
}
function subtractFromPoint(point, x, y) {
    point.x -= x;
    point.y -= y;
    return point;
}

function scalePoint(point, xFactor, yFactor) {
    point.x *= xFactor;
    point.y *= yFactor;
    return point;
}

function scaleRectangle(rectangle, sFactor) {
    rectangle.topLeft.x = rectangle.topLeft.x - sFactor;
    rectangle.topLeft.y = rectangle.topLeft.y - sFactor;

    rectangle.topRight.x = rectangle.topRight.x + sFactor;
    rectangle.topRight.y = rectangle.topRight.y - sFactor;

    rectangle.bottomLeft.x = rectangle.bottomLeft.x - sFactor;
    rectangle.bottomLeft.y = rectangle.bottomLeft.y + sFactor;

    rectangle.bottomRight.x = rectangle.bottomRight.x + sFactor;
    rectangle.bottomRight.y = rectangle.bottomRight.y + sFactor;
    return rectangle;
}

function div() {
    return document.createElement("div");
}

function p() {
    return document.createElement("p");
}

function span() {
    return document.createElement("span");
}

function h1() {
    return document.createElement("h1");
}

function text(pText) {
    return document.createTextNode(pText);
}

function getById(id) {
    return document.getElementById(id);
}

function getByQuery(query) {
    return document.querySelector(query);
}

function getBody() {
    return getByQuery("body");
}

function resetDocument() {
    getBody().innerHTML = "";
}

function append(root, node) {
    root.appendChild(node);
    return root;
}

/*******************************************
 * Do not change anything below this point *
 * Do not change anything below this point *
 * Do not change anything below this point *
 * *****************************************/
function setupPage() {
    resetDocument();
    append(getBody(), (append(div(), text("Hello"))));
    append(getBody(), append(p(), text("Zafer says Hello!")));
    append(getBody(), append(div(), append(h1(), text("Yuhu"))));
    let topLevelSpan = append(span(), append(span(), text("Test span")));
    append(getBody(), append(topLevelSpan, append(div(), text("Hi Ho"))));
    let point = new Point(10, 10);
    let secondPoint = createPoint(20, 20);
    let rectangle = new Rectangle(point, 10, 10);
    let circle = new Circle(secondPoint, 20);
    let squareShape = new Square(secondPoint, 10);
    addToPoint(rectangle.bottomRight, 10, 10);
    addToPoint(circle.center, 10, 10);
    scaleRectangle(rectangle, 10);
    scalePoint(point, 10, 10);
    addToPoint(squareShape.center, 10, 10);
    subtractFromPoint(secondPoint, 10, 10);
    let pointAtRotation = createPointAtRotation(point, 45);
    let circleTwo = new Circle(pointAtRotation, 30);
    let body = getBody();
    append(body, append(div(), append(p(), text("Point: x = " + point.x + ", y = " + point.y))));
    append(body, append(div(), append(p(), text("Second Point: x = " + secondPoint.x + ", y = " + secondPoint.y))));
    append(body, append(div(), append(p(), text("Rectangle: topLeft = x:" + rectangle.topLeft.x + ", y:" + rectangle.topLeft.y
        + ", topRight = x:" + rectangle.topRight.x + ", y:" + rectangle.topRight.y + ", bottomLeft = x:" + rectangle.bottomLeft.x
        + ", y:" + rectangle.bottomLeft.y + ", bottomRight = x:" + rectangle.bottomRight.x + ", y:" + rectangle.bottomRight.y))));
    append(body, append(div(), append(p(), text("Circle: center = x:" + circle.center.x + ", y = " + circle.center.y
        + ", radius = " + circle.radius))));
    append(body, append(div(), append(p(), text("Circle Two: center = x:" + circleTwo.center.x + ", y = "
        + circleTwo.center.y + ", radius = " + circleTwo.radius))));
    append(body, append(div(), append(p(), text("Square: center = x:" + squareShape.center.x + ", y = "
        + squareShape.center.y + ", width = " + squareShape.width))));
    append(body, append(div(), append(p(), text("2 + 2 = " + add(2,2)))));
    append(body, append(div(), append(p(), text("2 - 4 = " + subtract(2,4)))));
    append(body, append(div(), append(p(), text("2 * 4 = " + multiply(2,4)))));
    append(body, append(div(), append(p(), text("4 / 2 = " + divide(4,2)))));
    append(body, append(div(), append(p(), text("31 % 14 = " + rest(31,14)))));
    append(body, append(div(), append(p(), text("5^2 = " + square(5)))));
}

setupPage();



