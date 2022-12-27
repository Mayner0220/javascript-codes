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

// =============================[boolean]=============================
// 불리언(boolean) 타입의 값은 논리적 참, 거짓을 나타내는 true와 false뿐이다.
var foo = true;
var bar = false;

// typeof 연산자는 타입을 나타내는 문자열을 반환한다.
console.log(typeof foo); // boolean
console.log(typeof bar); // boolean

// 비어있는 문자열과 null, undefined, 숫자 0은 false로 간주된다.

// =============================[undefined]=============================
// undefined 타입의 값은 undefined가 유일하며, 선언 이후 값을 할당하지 않은 변수는 undefined 값을 가진다.
// 즉, 선언은 되었지만 값을 할당하지 않은 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 undefined가 반환된다.
// 이는 변수 선언에 의해 확보된 메모리 공간을 처음 할당이 이루어질 때까지 빈 상태(보통 비어있지 않고, 쓰레기 값(grabage value)이 들어있다)로 두지 않고 자바스크립트 엔진이 undefined로 초기화하기 때문이다.
var foo_new;
console.log(foo); // undefined

// 이 처럼 undefined는 개발자가 의도적으로 할당한 값이 아니라, 자바스크립트 엔진에 의해 초기화된 값이다.
// 변수를 참조했을 때 undefined가 반환된다면, 참조한 변수가 선언 이후 값이 할당된 적이 없는 변수라는 것을 개발자는 확인할 수 있다.
// 하지만 개발자가 의도적으로 undefined를 할당하는 하는 것은 undefined의 본래의 취지와 어긋날 뿐더러,
// 혼란을 발생시킬 수 있기에 권장되는 방법은 아니다.
// 만약 의도적으로 변수의 값이 없다는 것을 명시하고자 하는 경우에는 undefined가 아닌, null을 사용하면 된다.

// =============================[null]=============================
// null 타입의 값은 null이 유일하며, 자바스크립트 내에서는 대소문자를 구별(case-sensitive)하므로 null은 Null, NULL등과 다르다.
// 프로그래밍 언어에서 null은 의도적으로 변수에 값이 없다는 것을 명시할 때 사용한다.
// 이는 변수가 기억하는 메모리 어드레스의 참조 정보를 제거하는 것을 의미하며, 자바스크립트 엔진은 누구도 참조하지 않는 메모리 영역에 대해 가비지 콜렉션을 수행할 것이다.
var foo = "Lee";
foo = null; // 참조 정보가 제거됨

// 또한 함수가 호출되었으나 유효한 값을 반환할 수 없는 경우, 명시적으로 null을 반환하기도 한다.
// 예를 들어, 조건에 부합하는 HTML 요소를 검색해 반환하는 Document.querySelector()는 조건에 부합하는 HTML 요소를 검색할 수 없는 경우, null을 반환한다.
var element = document.querySelector(".myElem");
console.log(element);

// 타입을 나타내는 문자열을 반환하는 typeof 연산자로 null 값을 연산해 보면 null이 아닌 object가 나오는데,
// 이는 자바스크립트의 걸계상의 오류이다.
var foo = null;
console.log(typeof foo);

// 따라서 null 타입을 확인할 때에는 typeof 연산자를 사용하지 않고, 일치 연산자(===)사용한다.
var foo = null;
console.log(typeof foo === null);   // false
console.log(foo === null);          // true

// =============================[symbol]=============================
// 심볼(symbol)은 ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다.
// 심볼은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용한다.
// 심볼은 Symbol 함수를 호출하여 생성하며, 이 때 생성된 심볼 값은 다른 심볼 값들과 다른 유일한 심볼 값이다.
var key = Symbol("key");
console.log(typeof key);

var obj = {};
obj[key] = "value";
console.log(obj[key]); // value

// =============================[변수]=============================
// 변수(variable)는 프로그램에서 사용되는 데이터를 일정 기간 동안 기억하여 필요할 때에 다시 사용하기 위해 데이터에 고유의 이름인 식별자(identifier)를 명시한 것이다.
// 변수에 명시한 고유한 식별자를 변수명이라 하고 변수로 참조할 수 있는 데이터를 변수 값이라고 한다.
// 변수는 var, let, const 키워드를 사용하여 선언하고 할당 연산자를 사용해 값을 할당한다.
// 그리고 식별자인 변수 명을 사용해 변수에 저장된 값을 참조한다.
var score;  // 변수의 선언
score = 80; // 값의 할당
score = 90; // 값의 재할당
score;      // 변수의 참조

// 변수의 선언과 할당
var average = (50 + 100) / 2;