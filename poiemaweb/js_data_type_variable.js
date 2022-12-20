// Source/Reference: https://poiemaweb.com/js-data-type-variable

// =============================[데이터 타입]=============================
// 데이터 타입은 프로그래밍 언어에서 사용할 수 있는 데이터(숫자, 문자열, 불리언 등)의 종류을 말한다.
// 코드에서 사용되는 모든 데이터는 메모리에 저장하고 참조할 수 있어야 한다.
// 데이터 타입은 데이터를 저장할 때 확보해야 하는 메모리 공간의 크기와 할당할 수 있는 유효한 값에 대한 정보,
// 그리고 메모리에 저장되어 있는 2진수 데이터를 어떻게 해석할 지에 대한 정보를 컴퓨터와 개발자에게 제공한다.
// 자바스크립트의 모든 값은 데이터 타입을 가지며, ECMAScript 표준은 7개의 데이터 타입을 제공한다.
// - 원시 타입(primitive data type): boolean, null, undefined, number, string, symbol
// - 객체 타입(object/reference type): object

// 원시 타입(Primitive Data Type)
// 원시 타입의 값은 변경 불가능한(immutable valie)이며, pass-by-value(값에 의한 전달)이다.

// =============================[number]=============================
// C나 Java의 경우, 정수와 실수를 구분하여 int, long, float, double 등과 같은 다양한 숫자 타입이 존재하지만,
// 자바스크립트의 경우 하나의 숫자 타입만 존재한다.
// ECMAScript 표준에 따르면, 숫자 타입의 값은 배정밀도 64비트 부동소수점 형식(-(2^53-1) ~ 2^53-1의 값)을 따른다.
// 즉, 모든 수를 실수로 처리하며 정수만을 표현하기 위한 특별한 데이터 타입(integer type)은 없다.
var intger = 10;            // 정수
var double = 10.12;         // 실수
var negative = -20;         // 음의 정수
var binary = 0b01000001;    // 2진수
var octal = 0o101;          // 8진수
var hex = 0x41;             // 16진수

// 2진수, 8진수, 16진수 리터럴은 메모리에 동일한 배정밀도 64비트 부동소수점 형식의 2진수로 저장된다.
// 자바스크립트는 2진수, 8진수, 16진수 데이터 타입을 제공하지 않기 때문에 이들 값을 참조하면 모두 10진수로 해석된다.
console.log(binary);    // 65
console.log(octal);     // 65
console.log(hex);       // 65

console.log(binary === octal);  // true
console.log(octal === hex);     // true

// 자바스크립트의 숫자 타입은 정수만을 위한 타입이 없고, 모든 수를 실수로 처리한다.
// 정수로 표시되어도 실제론 실수이기에, 정수로 표시되는 수 끼리 나누더라도 실수가 나올 수 있다.
console.log(1 === 1.0); // true

var result = 4 / 2;
console.log(result); // 2
result = 3 / 2;
console.log(result); // 1.5

// 추가적으로 3가지의 특별한 값들도 표현할 수 있다.
var pInf = 10 / 0; // 양의 무한대
console.log(pInf); // Infinity

var nInf = 10 / -0; // 음의 무한대
console.log(nInf); // -Infinity

var nan = 1 * "string"; // 산술 연산 불가
console.log(nan);       // NaN

// =============================[string]=============================
// 문자열(String) 타입은 텍스트 데이터를 나타내는데 사용한다.
// 문자열은 0개 이상의 16bit 유니코드 문자(UTF-16) 들의 집합으로 대부분의 전 세계 문자를 표현할 수 있다.
// 문자열은 작은 따옴표('') 또는 큰 따옴표("") 안에 텍스트를 넣어 생성한다.
// 가장 일반적인 표기법은 작은 따옴표를 사용하는 것이다.
var str = "string"; // 큰 따옴표
str = 'string';     // 작은 따옴표
str = `string`;     // 백틱(ES6 템플릿 리터럴)

str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다."
str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.'

// C와 같은 언어와는 다르게, 자바스크립트의 문자열은 원시 타입이며 변경 불가능(immutable)하다.
// 이것은 한 번 문자열이 생성되면, 그 문자열을 변경할 수 없다는 것을 의미한다.
// 아래의 예시에서, 첫번째 구문이 실행되면 메모리에 문자열 "Hello"가 생성되고 식별자 str은 메모리에 생성된 "Hello"의 메모리 주소를 가르킨다.
// 그리고 두 번째 구문이 실행되면 이전에 생성된 문자열 "Hello"을 수정하는 것이 아니라 새로운 문자열 "world"를 메모리에 생성하고,
// 식별자 str은 이것을 가르키게 된다.
// 이 때 문자열 "Hello"와 "world"는 둘 다 메모리 상에 존재하고 있으며, 변수 str은 문자열 "Hello"를 가르키고 있다가 문자열 "world"를 가리키도록 변경되었을 뿐 이다.
var str = "Hello";
str = "world";

// 문자열은 배열처럼 인덱스를 통해 접근할 수 있으며, 이와 같은 특성을 갖는 데이터를 유사 배열이라 한다.
// str[0] = "S"처럼 이미 생성된 문자열의 일부 문자를 변경해도 반영되지 않으며, 에러가 발생하지 않는다.
// 한 번 생성된 문자열은 read only로서 변경할 수 없으며, 이를 변경 불가능(immutable)이라 한다.
// 그러나 새로운 문자열을 재할당하는 것은 가능하다.
var str = "string";
console.log(str); // string

str = "String";
console.log(str); // String

str += " test";
console.log(str); // String test

str = str.substring(0, 3);
console.log(str); // Str

str = str.toUpperCase();
console.log(str); // STR