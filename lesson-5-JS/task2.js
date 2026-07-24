const averageGrade = 80;
switch (true) {
  case averageGrade >= 90:
    console.log("Відмінно");
    break;
  case averageGrade >= 81:
    console.log("Дуже добре");
    break;  
  case averageGrade >= 71:
    console.log("Добре");
    break;
  case averageGrade >= 60:
    console.log("Задовільно");
    break;
  default:
    console.log("Незадовільно");
    break;
}