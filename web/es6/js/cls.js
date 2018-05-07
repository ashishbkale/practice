class StaticMethodCall {
	constructor() {
		this.a = 1;
		var b = 2;
	}

	static staticMethod() {
		return "staticMethod";
	}
}
var sm = new StaticMethodCall();
console.log(sm);

class StaticMethod {
	static aMethod() {
		return "a method";
	}

	static bMethod() {
		return this.aMethod();
	}
}

StaticMethod.aMethod();
console.log(StaticMethod.bMethod());
