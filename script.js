/* Тут спробую вставити все, що ми вчили на минулому занятті)
  Можливо я буду трохи забігати наперед ри реалізації домашок, 
  але на мою думку UX цього завдання має бути саме таким */

/* -------------- Task 1 -----------------------*/

const firstTaskBtn = document.getElementById("first_task");

const userNameCheck = () => {
  const userName = prompt("Hello! What's your name?", ""); // Одинарні кавички всередині подвійних) Після коми - значення за замовченням. Якщо його не зробити, то IE виведе undefined в полі вводу. Принаймні раніше так було

  if (userName === "") {
    // if-else конструкція
    const ansIfEmpty = "Hey, you forgot enter your name";
    alert(ansIfEmpty);
    userNameCheck();
  } else {
    const ansIfCancel = "OK! See you later unknown user";
    const ansIfOk = `Hello, ${userName}! How are you?`; // Інкапсуляція
    userName ? alert(ansIfOk) : alert(ansIfCancel);
  }
};

firstTaskBtn.addEventListener("click", userNameCheck);

/* -------------- Task 2 -----------------------*/

const secondTaskBtn = document.getElementById("second_task");

const operandEnterAndCheck = (numberOfOperand) => {
  const num = prompt("Enter " + numberOfOperand + " number", "");
  if (isNaN(+num)) {
    //Перевіряємо, що ввели число
    alert("This is not a number");
    return operandEnterAndCheck(numberOfOperand);
  } else if (num === "") {
    //Перевіряємо, що не лишили строку пустою
    alert("Please enter value");
    return operandEnterAndCheck(numberOfOperand);
  } else {
    return num; //так ми повернемо тільки число, але в String форматі
  }
};

const operatorEnterAndCheck = () => {
  const operator = prompt("Enter operator", "");
  if (operator &&
    (!operator === "*" ||
      !operator === "/" ||
      !operator === "+" ||
      !operator === "-")
  ) {
    alert("Enter correct operator");
    return operatorEnterAndCheck();
  } else {
    return operator; //повертаємо тільки щось одне з + - * /
  }
};

const mathOperations = () => {
  let firstOperand = operandEnterAndCheck("first"); //я помню про правила у домашках з const, але тут ніяк по-іншому)

  if (firstOperand) {
    //це перевірка, щоб виходити з функції при натисканні на "Скасувати" у діалоговому вікні
    firstOperand = +firstOperand;
  } else {
    return
  };

  const operator = operatorEnterAndCheck();
  if (!operator) {
    return
  }; //це перевірка, щоб виходити з функції при натисканні на "Скасувати" у діалоговому вікні

  let secondOperand = operandEnterAndCheck("second");
  if (secondOperand) {
    //це перевірка, щоб виходити з функції при натисканні на "Скасувати" у діалоговому вікні
    secondOperand = +secondOperand;
  } else {
    return
  };

  switch (
  operator //це замість купи if-else
  ) {
    case "*":
      alert(`Відповідь: ${firstOperand * secondOperand}`);
      break;
    case "/":
      alert(`Відповідь: ${firstOperand / secondOperand}`);
      break;
    case "+":
      alert(`Відповідь: ${firstOperand + secondOperand}`);
      break;
    case "-":
      alert(`Відповідь: ${firstOperand - secondOperand}`);
      break;
  }
};

secondTaskBtn.addEventListener("click", mathOperations);

/* -------------- Task 3 -----------------------*/

//Ну тут все просто
const thirdTaskBtn = document.getElementById("third_task");

const notEmptyValue = (numberOfValue) => {
  const value = prompt("Enter " + numberOfValue + " value", "");
  if (value === "") {
    alert("Value can't be empty");
    return notEmptyValue(numberOfValue);
  } else {
    return value;
  }
};

const compareValues = () => {
  const firstValue = notEmptyValue("first");
  if (!firstValue) return;
  const secondValue = notEmptyValue("second");
  if (!secondValue) return;
  alert(firstValue === secondValue);
};

thirdTaskBtn.addEventListener("click", compareValues);

/* -------------- Task 4 -----------------------*/
//  пропуски на початку та в кінці числа НЕ враховуються ("    123    " == 123)

const fourthTaskBtn = document.getElementById("fourth_task");

const enterAndCheckNumbers = () => {
  const number = prompt("Введіть п'ятизначне число", "");
  if (number !== null                   //Враховуємо те, що має бути число
    && (isNaN(+number) ||       //Це дійсно число
      !Number.isInteger(+number) ||   //Воно не дробове
      number[0] === "0" ||
      number[0] + number[1] === "-0")) {       //Воно не починається з 0
    alert("Введіть корректне число");
    return enterAndCheckNumbers();
  } else if (number === "") {
    alert("Не лишайте строку пустою");
    return enterAndCheckNumbers();
  } else if ((+number >= 10000 && +number <= 99999) || (+number >= -99999 && +number <= -10000) || number === null) { //Враховуємо те, що число має бути п'ятизначним. Остання умова - для того, щоб вийти з алерта при натисканні на "Скасувати"
    return number;
  } else {
    alert("Число має бути п'ятизнaчним");
    return enterAndCheckNumbers();
  }
};

const splitNumber = (number) => {
  if (number !== 0) {
    const remainder = number % 10;
    const remainderNumber = splitNumber(Math.floor(number / 10));
    return remainderNumber === ""
      ? `${remainder}`
      : `${remainderNumber} ${remainder}`;
  } else {
    return "";
  }
};

const getNumber = () => {
  const number = enterAndCheckNumbers();
  if (number && number > 0) {
    alert(splitNumber(+number));
  } else if (number && number < 0) {
    alert('-' + splitNumber(-number));
  } else {
    return                // Ось тут, коли number повертає null при натисканні ми виходимо з алерту
  };
};

fourthTaskBtn.addEventListener("click", getNumber);