// Function area as declaration type
function area (width, height) {
    return width * height;
}
console.log(area(5, 10)); 

// Function areaExpression as expression type
const areaExpression = function(width, height) {
    return width * height;
};
console.log(areaExpression(5, 10));

// Function areaArrow as arrow function type
const areaArrow = (width, height) => width * height;
console.log(areaArrow(5, 10));