// https://poiemaweb.com/js-type-check

// 1. typeof
// 타입 연산자(type operator) typeof는 피연산자의 데이터 타입을 문자열로 반환한다.
typeof '';              // string
typeof 1;               // number
typeof NaN;             // number
typeof true;            // boolean
typeof [];              // object
typeof {};              // object
typeof new String();    // object
typeof new Date();      // object
typeof /test/gi;        // object
typeof function () {};  // function
typeof undefined;       // undefined
typeof null;            // object (설계적 결함)
typeof undeclared;      // undefined (설계적 결함)

// 2. Object.prototype.toString
// Object.prototype.toString 메소드는 객체를 나타내는 문자열을 반환한다.
var obj = new Object();
obj.toString(); // [object Object]

// Function.prototype.call 메소드를 사용하면 모든 타입의 값의 타입을 알아낼 수 있다.
Object.prototype.toString.call('');             // [object String]
Object.prototype.toString.call(new String());   // [object String]
Object.prototype.toString.call(1);              // [object Number]
Object.prototype.toString.call(new Number());   // [object Number]
Object.prototype.toString.call(NaN);            // [object Number]
Object.prototype.toString.call(Infinity);       // [object Number]
Object.prototype.toString.call(true);           // [object Boolean]
Object.prototype.toString.call(undefined);      // [object Undefined]
Object.prototype.toString.call();               // [object Undefined]
Object.prototype.toString.call(null);           // [object Null]
Object.prototype.toString.call([]);             // [object Array]
Object.prototype.toString.call({});             // [object Object]
Object.prototype.toString.call(new Date());     // [object Date]
Object.prototype.toString.call(Math);           // [object Math]
Object.prototype.toString.call(/test/i);        // [object RegExp]
Object.prototype.toString.call(function () {}); // [object Function]
Object.prototype.toString.call(document);       // [object HTMLDocument]
Object.prototype.toString.call(argument);       // [object Arguments]
Object.prototype.toString.call(undeclared);     // ReferenceError

// 3. instanceof
// 이와 같이 Object.prototype.toString를 사용하여 객체의 종류(일반 객체, 배열, Date, RegExp, Function, DOM 요소 등)까지 식별할 수 있는 타입 체크 기능을 구현할 수 있다.
// 하지만 이 방법으론 객체의 상속 관계까지는 체크할 수 없다.

// HTMLElement를 상속받은 모든 DOM 요소에 css 프로퍼티를 추가하고 값을 할당한다.
function css(elem, prop, val) {
    // type checking...
    elem.style[prop] = val;
}

css({}, "color", "red");
// TypeError: Cannot set property 'color' of undefined

// 타입 연산자(type operator)에는 앞서 살펴본 typeof 이외에 instanceof를 제공한다.
// instanceof 연산자는 피연산자인 객체가 우항에 명시한 타입의 인스턴스인지 여부를 알려준다.
// 이 때 타입이란 constructor를 말하며 프로토타입 체인에 존재하는 모든 constructor를 검색하여 일치하는 constructor가 있다면 true를 반환한다.
function Person() {}
const person = new Person();

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

// 4. 유사 배열 객체
// 배열인지 체크하기 위해서는 Array.isArray 메소드를 사용한다.
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray("123")); // false