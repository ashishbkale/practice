let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "Blue";
let myColor: string = "myColor";
let fullname: string = "Srinivas k";
let age: number = 30;
let sentence: string = `my name is ${fullname}
	i will be ${age} year old in next month`;
let list: number[] = [1, 2, 4, 3];
let customList: Array<number> = [3, 2, 1];

let x: [string, number];
x = ["es2015", 6];
console.log(x[0].length);

enum Color {
	Red,
	Green,
	Blue
}
let r: Color = Color.Red;
let g: Color = Color.Green;
let b: Color = Color.Blue;

console.log(r, b, g);

let notSure: any = 2;
notSure = "back to top";

function warnUser(): void {
	alert("waring user");
}

let unusable: void = undefined;
let mynull: null = null;
