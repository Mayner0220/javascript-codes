// Source/Reference: https://poiemaweb.com/js-syntax-basics

// =============================[변수]=============================
var x;
x = 6;

var x = 6;

// =============================[값]=============================
// 자바스크립트의 모든 값은 데이터 타입을 가지며, 총 7가지의 데이터 타입을 제공한다.
// 원시 타입(Primitive data type): number, string, boolean, null, undefined, symbol
// 객체 타입(Object data type): object

// number
var num1 = 100;
var num2 = 10.32;

// string
var str1 = "Hello";
var str2 = "World";

// boolean
var bool1 = true;
var bool2 = false;

// null
var foo = null;

// undefined
var bar;

// object
var obj = {name: "Lee", gender: "male"};

// array
var arr1 = [1, 2, 3];
var arr2 = [1, "2", 3];

// function
var foo = function() {};

// =============================[연산자]=============================
// 산술 연산자
var area = 5 * 4; // 20

// 문자열 연결 연산자
var str = "My name is " + "Lee"; // My name is Lee

// 할당 연산자
var color = "red"; // red

// 비교 연산자
var foo = 3 > 5; // false 

// 논리 연산자
var bar = (5 > 3) && (2 < 4); // true

// 타입 연산자
var type = typeof "Hi"; // "string"

// 인스턴스 생성 연산자
var today = new Date();

// 피연산자의 타입은 일치할 필요가 없으며, 자바스크립트는 암묵적 타입 강제 변환을 통해 연산을 수행한다.
var foo = 1 + "10"; // "110"
var bar = 1 * "10"; // 10

// =============================[문]=============================
// 문은 리터털, 연산자(operator), 표현식(expression), 키워드(keyword) 등으로 구성되며 세미콜론(;)으로 끝나야 한다.
// 문은 코드 블록으로 그룹화할 수 있다.

// 함수
function myFunction(x, y) {
    return x + y;
}

// if 문
if(x > 0) {
    // do something
}

// for 문
for(var i=0; i<10; i++) {
    // do something
}

// =============================[함수]=============================
// 함수의 정의(함수 선언문)
function square(num) {
    return num * num;
}

// 함수의 호출
square(2); // 4

// =============================[객체]=============================
// 자바스크립트는 객체(object) 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 "모든 것"이 객체이다.
// 원시 타입(primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.
// 자바스크립트 객체는 키(이름)와 값으로 구성된 프로퍼티(property)의 집합이다.
// 프로퍼티의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용할 수 있다.
// 자바스크립트의 함수는 일급 객체이므로 값으로 취급할 수 있다.
// 따라서 프로퍼티 값으로 함수를 사용할 수 있으며 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.
// 자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 "프로토타입"이라고 불리는 객체의 프로퍼티와 메소드를 상속 받을 수 있다.

var person = {
    name: "Lee",
    gender: "male",
    sayHello: function() {
        console.log("Hi, My name is " + this.name);
    }
};

console.log(typeof persone); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: [Function: sayHello]}

person.sayHello(); // Hi, My name is Lee
