// https://poiemaweb.com/js-operator

// 1. 표현식과 연산자
// 표현식(expression)은 리터럴, 식별자, 연산자, 함수 호출 등의 조합을 말한다.
// 표현식은 평가(evaluation, 표현식을 실행하여 하나의 값을 만드는 과정)되어 하나의 값을 만든다.
// 즉, 표현식은 하나의 값으로 평가될 수 있는 문(statement)이다.
// 표현식은 리터럴 표현식, 식별자 표현식, 연산자 표현식. 함수/메소드 호출 표현식 등으로 나누어 볼 수 있지만 결국 평가되어 하나의 값을 만든다는 점에서 모두 동일하다.

// 리터럴 표현식
10

// 식별자 표현식
sum

// 연산자 표현식
10 + 20

// 함수/메소드 호출 표현식
square()

// 표현식은 평가되어 결국 하나의 값이 되므로 표현식과 값은 동등한 관계, 즉 동치(equivalent)다.
// 다시 말해, 표현식은 값처럼 사용할 수 있으며, 이는 값이 위치할 수 있는 자리에는 표현식도 위치할 수 있다는 의미이다.

var x = 10;

// 연산자 표현식
x + 30;

// 2. 문과 표현식
// 문(statement)은 자바스크립트 엔진에게 내리는 명령으로, 실행되게 되면 무슨 일이 일어나게 된다.
// 변수 선언문을 실행하면 변수가 선언이 되고, 할당문을 실행하면 할당이 된다.

// 변수 선언문
var x;

// 할당문
x = 5;

// 함수 선언문
function foo () {}

// 조건문
if (x > 5) {}

// 반복문
for (var i=0; i<10; i++) {}

// 표현식과 문은 유사하여 구별이 어려울 수 있다.
// 표현식은 평가되어 값을 만들지만, 그 이상의 행위는 할 수 없다.
// 문은 var, let, const, function, class와 같은 선언 키워드를 사용하여 변수나 함수를 생성하기도 하고,
// if, for, while 문과 같은 제어문을 생성하여 프로그램의 흐름을 제어하기도 한다.

// 3. 연산자란?
// 연산자(operator)는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만든다.
// 이 때 연산의 대상을 피연산자(operand)라 한다.
// 피연산자도 평가되어 하나의 값이 되므로 표현식이고, 피연산자를 연산자와 결합한 연산자 표현식도 물론 표현식이다.

// 산술 연산자
5 * 4 // 20

// 문자열 연결 연산자
"My name is " + "Lee" // "My name is Lee"

// 할당 연산자
var color = "red"; // "red"

// 비교 연산자
3 > 5 // false

// 논리 연산자
(5 > 3) && (2 < 4) // true

// 타입 연산자
typeof "Hi" // "string"

// 4. 산술 연산자
// 산술 연산자(arithmetic operator)는 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만든다.
// 산술 연산을 할 수 없는 경우에는 NaN을 반환한다.

// 4.1 이항 산술 연산자
// 이항 산술 연산자는 2개의 피연산자를 대상으로 연산하여 숫자 타입의 값을 만든다.
// 모든 이항 연산자는 피연산자의 값을 변경하는 부수 효과(side effect)가 없다.
// 즉, 어떤 산술 연산을 해도 피연산자의 값이 바뀌는 경우는 없고 단지 새로운 값이 만들어 질 뿐이다.
5 + 2 // 7
5 - 2 // 3
5 * 2 // 10
5 / 2 // 2.5
5 % 2 // 1

// 4.2 단항 산술 연산자
// 단항 산술 연산자는 1개의 피연산자를 대상으로 연산한다.
// 증가/감소(++/--) 연산자는 피연산자의 값을 변경하는 부수 효과가 있다.
// 즉, 증가/감소 연산을 하면 피연산자의 값이 바뀐다.
var x = 5, result;

// 선대입 후증가 (postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후대입 (prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선대입 후감소 (postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후대입 (prefix decrement operator)
result = --x;
console.log(result, x); // 5 5

// + 단항 연산자는 피연산자에 어떠한 효과도 없다.
// 음수를 양수로 반전하지도 않지만, 숫자 타입이 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다.
// 이 때 피연산자를 변경하는 것은 아니고, 숫자 타입으로 변환한 값을 생성해서 반환한다.
// 즉, 부수 효과는 없다.
+10 // 10
+"10" // 10
+true // 1
+false // 0

// - 단항 연산자는 피연산자의 부호를 반전한 값을 반환한다.
// + 단항 연산자와 마찬가지로 숫자 타입이 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다.
// 이 때 피연산자를 변경하는 것은 아니고 부호흘 반전한 값을 생성해서 반환한다.
// 즉, 부수 효과는 없다.
-10 // -10
-"10" // -10
-true // -1
-false // -0

// 4.3 문자열 연결 연산자
// + 연산자는 피연사자 중 하나 이상이 문자열인 경우, 문자열 연결 연산자로 동작한다.
// 그 외의 경우는 덧셈 연산자로 동작한다.

// 문자열 연결 연산자
"1" + "2" // '12'
"1" + 2 // '12'

// 5. 할당 연산자
// 할당 연산자(assignment operator)는 우항에 있는 피연산자의 결과를 좌항에 있는 변수에 할당한다.
// 할당 연산자는 좌항의 변수에 값을 할당하므로 부수 효과가 있다.
var x;

x = 10; // 10
x += 5; // 15
x -= 5; // 10
x *= 5; // 50
x /= 5; // 10
x %= 5; // 0

var str = "My name is ";
str += "Lee"; // My name is Lee

// 6. 비교 연산자
// 비교 연산자(comparsion operator)는 좌항과 우항의 피연산자를 비교하여 불리언 값을 반환한다.
// if문이나 for문과 같은 제어문의 조건식에서 주로 사용된다.

// 6.1 동등/일치 비교 연산자
// 동등 비교
5 == 5 // true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 같은 값을 같는다.
5 == "5" // true
5 == 8 // false

// 수 많은 부작용을 일으킬 수도 있으니 주의가 필요하다.
"" == "0" // false
0 == "" // true
0 == "0" // true

false == "false" // false
false == "0" // true

false == undefined // false
false == null // false
null == undefined // true

// 일치 비교(===) 연산자는 좌항과 우항의 피연산자의 값과 타입이 같은 경우에 한하여 true를 반환한다.

// 일치 비교
5 === 5 // true
5 === "5" // false

// 일치 비교 연산자에서 주의할 것은 NaN이다.
NaN === NaN // false

// 부동등 비교 연산자(!=)와 불일치 비교 연산자(!==)는 동등 비교(==)와 일치 비교(===)연산자의 반대 개념이다.

// 부동등 비교
5 != 8 // true
5 != 5 // false
5 != "5" // false

// 불일치 비교
5 !== 8 // true
5 !== 5 // false
5 !== "5" // true

// 6.2 대소 관계 비교 연산자
5 > 0 // true
5 > 5 // false
5 > 8 // false

5 < 0 // false
5 < 5 // false
5 < 8 // true

5 >= 0 // true
5 >= 5 // true
5 >= 8 // false

5 <= 0 // false
5 <= 5 // false
5 <= 8 // true

// 7. 삼항 조건 연산자
// 삼항 조건 연산자(ternary operator)는 조건식의 평가 결과에 따라 반환할 값을 결정한다.
// 삼항 조건 연산자 표현식은 아래와 같이 사용한다.
// 조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값

var x = 2;
var result = x % 2 ? "홀수" : "짝수";
console.log(result); // 짝수

// 8. 논리 연산자
// 논리 연산자(logical operator)는 우항과 좌항의 피연산자(부정 논리 연산자의 경우, 우항의 피연산자)를 논리 연산한다.
// 논리 부정(!) 연산자는 언제나 불리언 값을 반환하지만, 논리합(||) 연산자와 논리곱(&&) 연산자는 일반적으로 불리언 값을 반환하지만 반드시 불리언 값을 반환해야 하는 것은 아니다.

// 논리합(||) 연산자
true || true // true
true || false // true
false || true // true
false || false // false

// 논리곱(&&) 연산자
true && true // true
true && false // false
false && true // false
false && false // false

// 논리 부정(!) 연산자
!true // false
!false // true

// 9. 쉼표 연산자
// 쉼표(,) 연산자는 왼쪽 피연산자부터 차례대로 피연산자를 평가하고 마지막 피연산자의 평가가 끝아면 마지막 피연산자의 평가 결과를 반환한다.
var x, y, z;
x = 1, y = 2, z =3; // 3

// 10. 그룹 연산자
// 그룹 ((...)) 연산자는 그룹 내의 표현식을 최우선으로 평가하며, 그룹 연산자를 사용하면 연산자의 우선 순위를 1순위로 높일 수 있다.
10 * 2 + 3 // 23
10 * (2 + 3) // 50

// 11. typeof 연산자
// typeof 연산자는 자신의 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환한다.
typeof ""              // "string"
typeof 1               // "number"
typeof NaN             // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof null            // "object"
typeof []              // "object"
typeof {}              // "object"
typeof new Date()      // "object"
typeof /test/gi        // "object"
typeof function () {}  // "function"

// 주의해야 할 것은 typeof 연산자로 null 값을 연산해 보면 null이 아닌 "object"를 반환한다는 것이다.
typeof null // "object"

// 따라서 null 타입을 확인할 때는 typeof 연산자를 사용하지 않고, 일치 연산자(===)를 사용해야 한다.
var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null); // true

// 또 하나 주의할 점은, 선언하지 않은 식별자를 typeof 연산자로 연산할 경우 ReferenceError가 발생하지 않고 "undefined"를 반환한다.
typeof undeclared // "undefined"