class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
}

let greeter = new Greeter("Hello");
console.log(greeter);
