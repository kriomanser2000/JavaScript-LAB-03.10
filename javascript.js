/*
Для виведення даних використовуйте alert() або document.
write(). Для введення даних використовуйте prompt() та
confirm().
Завдання, в яких необхідно використати WHILE.
1. Виведіть # стільки разів, скільки вказав користувач.
2. Користувач ввів число, а на екран було виведено всі числа:
від введеного до 0.
3. Запросіть число та ступінь. Зведіть число у вказаний сту-
пінь та виведіть результат.
4. Запросіть 2 числа і знайдіть всі спільні дільники.
5. Підрахуйте факторіал числа, введеного користувачем.
*/
//--
//1.
var count = parseInt(prompt("How much you want see the #?: "));
var i = 0;
while (i < count) 
{
    alert("#");
    i++;
}

//2.
var number = parseInt(prompt("Enter number: "));
while (number >= 0) 
{
    alert(number);
    number--;
}

//3.
var base = parseInt(prompt("Enter num: "));
var exponent = parseInt(prompt("Enter the degree: "));
var result = 1;
var i = 0;
while (i < exponent) 
{
    result *= base;
    i++;
}
alert("Result: " + result);

//4.
var number1 = parseInt(prompt("Enter first num: "));
var number2 = parseInt(prompt("Enter second num: "));
var i = 1;
var commonDivisors = [];
while (i <= number1 && i <= number2) 
{
    if (number1 % i === 0 && number2 % i === 0) 
    {
        commonDivisors.push(i);
    }
    i++;
}
alert("Common divisors: " + commonDivisors.join(", "));

//5.
var number = parseInt(prompt("Enter num: "));
var factorial = 1;
var i = 1;
while (i <= number) 
{
    factorial *= i;
    i++;
}
alert("Factorial of a number " + number + " is: " + factorial);


/*
Завдання, у яких необхідно використати DO WHILE.
1. Запропонуйте користувачеві розв’язати приклад 2 + 2 * 2,
доки він не надасть правильну відповідь.
2. Діліть число 1000 на 2, доки не отримаєте число менше,
ніж 50. Виведіть отримане число і скільки зробили поділів.
*/
//--
//1.
var userAnswer;
do 
{
    userAnswer = parseInt(prompt("Do this: 2 + 2 * 2 = ?"));
} 
while (userAnswer !== 6);
alert("Awesome!");

//2.
var number = 1000;
var divisions = 0;
do 
{
    number /= 2;
    divisions++;
} 
while (number >= 50);
alert("Accepted num: " + number + "\nAmount divisions: " + divisions);


/*
Завдання, в яких потрібно використати FOR.
1. Виведіть усі числа від 1 до 100, які кратні числу зазначено-
му користувачем.
2. Виведіть кожен 4-ий елемент із зазначеного користувачем
діапазону. Користувач вказує мінімальне та максимальне
значення діапазону.
3. Запросіть число і перевірте, чи просте воно. Просте число
ділиться без залишку тільки на себе і на 1.
*/
//--
//1.
var multiple = parseInt(prompt("Enter the number whose multiplicity you want to check: "));
for (var i = 1; i <= 100; i++) 
{
    if (i % multiple === 0) 
    {
        console.log(i);
    }
}

//2.
var min = parseInt(prompt("Enter min range: "));
var max = parseInt(prompt("Enter max range: "));
for (var i = min; i <= max; i++) 
{
    if ((i - min + 1) % 4 === 0) 
    {
        console.log(i);
    }
}

//3.
var number = parseInt(prompt("Введіть число для перевірки:"));
var isPrime = true;
for (var i = 2; i <= Math.sqrt(number); i++) 
{
    if (number % i === 0) 
    {
        isPrime = false;
        break;
    }
}
if (number <= 1) 
{
    isPrime = false;
}
if (isPrime) 
{
    console.log(number + " is simple num.");
} 
else 
{
    console.log(number + " is not simple num.");
}

