// https://poiemaweb.com/js-strict-mode

// 1. strict mode란?
function foo() {
    x = 10;
}

console.log(x);

// foo 함수 내에서 선언하지 않은 변수 x에 값 10을 할당하였다.
// 이 때 변수 x를 찾아야 x에 값을 할당할 수 있기 때문에 자바스크립트 엔진은 변수 x가 어디에서 선언되었는지 스코프 체인을 통해 검색하기 시작한다.
// 전역 스코프에 변수 x의 선언이 존재하기 않기 때문에 ReferenceError를 throw할 것 같지만 자바스크립트 엔진은 암묵적으로 전역 객체에 프로퍼티 x를 동적 생성한다.
// 결국 식별자 x는 전역 변수가 된다.
// 이렇게 전역 변수가 된 변수를 암묵적 변수(implicit global)라 한다.
// 개발자의 의도와는 상관없이 자바스크립트 엔진이 생성한 암묵적인 전역 변수는 오류를 방생시키는 원인이 될 가능성이 크다.
// 따라서 반드시 var, let, const 키워드를 사용하여 변수를 선언한 다음 변수를 사용해야 한다.
// strict mode는 자바스크립트 언어의 문법을 보다 엄격히 적용하여 기존에는 무시되던 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.

// 2. strict mode의 적용
// strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가한다.
// 전역의 선두에 추가하면 스크립트 전체에 strict mode가 적용된다.
// 전역에 strict mode의 적용하는 것은 바람직하지 않다.
"use strict";

function foo() {
    x = 10; // ReferenceError: x is not defined
}
foo();

// 함수 몸체의 선두에 추가하면 해당 함수와 중첩된 내부 함수에 strict mode가 적용된다.
function foo() {
    "use strict";

    x = 10; // ReferenceError: x is not defined
}
foo();

// 코드의 선두에 strict mode를 위치시키지 않으면 제대로 동작하지 않으니, 주의해야 한다.
function foo() {
    x = 10;
    "use strict";
}
foo();

// 3. 전역에 strict mode를 적용하는 것은 피하자.
// strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류를 발생시킬 수 있다.
// 특히 외부 서드 파티 라이브러리를 사용하는 경우, 라이브러리가 non-strict mode일 경우도 있기 때문에 전역에 strict mode를 적용하는 것은 바람직하지 않다.
// 이러한 경우, 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 선두에 strict mode를 적용한다.
(function () {
    "use strict";
    
    // Do something...
}());

// 4. 함수 단위로 strict mode를 적용하는 것도 피하자.
// 앞서 말한 바와 같이 함수 단위로 strict mode를 적용할 수도 있다.
// 그러나 어떤 함수는 strict mode를 적용하고 어떤 함수는 strict mode를 적용하지 않는 것은 바람직하지 않으며 모든 함수에 일일이 strict mode를 적용하는 것은 번거로운 일이다.
// 그리고 strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 않는다면 이 또한 문제가 발생할 수 있다.
(function () {
    // non-strict mode
    var let = 10;

    function foo() {
        "use strict";

        let = 20; // SyntaxError: Unexpected strict mode reserved word
    }
    foo();
}());

// 5. strict mode가 발생시키는 에러
// 5.1 암묵적 전역 변수
// 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.
(function () {
    "use strict";

    x = 1;
    console.log(x); // ReferenceError: x is not defined
}());

// 5.2 변수, 함수, 매개변수의 삭제
(function () {
    "use strcit";

    var x = 1;
    delete x;
    // SyntaxError: Delete of an unqualified identifier in strict mode.

    function foo(a) {
        delete a;
        // SyntaxError: Delete of an unqualified identifier in strict mode.
    }
    delete foo;
    // SyntaxError: Delete of an unqualified identifier in strict mode.
}());

// 5.3 매개변수 이름의 중복
// 중복된 함수 파라미터 이름을 사용하면 SyntaxError가 발생한다.
(function () {
    "use strict";

    // SyntaxError: Duplicate parameter name not allowed in this context
    function foo(x, x) {
        return x + x;
    }
    console.log(foo(1, 2));
}());

// 5.4 with문의 사용
// with문을 사용하면 SyntaxError가 발생한다.
(function () {
    "use strict";

    // SyntaxError: Strict mode code may not include a with statement
    with({ x: 1 } =) {
        console.log(x);
    }
}());

// 5.5 일반 함수의 this
// strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다.
// 생성자 함수가 일반 함수 내부에서는 this를 사용할 필요가 없기 때문이다.
// 이 때 에러는 발생하지 않는다.
(function () {
    "use strict";
  
    function foo() {
      console.log(this); // undefined
    }
    foo();
  
    function Foo() {
      console.log(this); // Foo
    }
    new Foo();
}());