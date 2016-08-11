function Add(num1: number, num2: number): number;
function Add(string1: string, string2: string): string;
function Add(arg1: any, arg2: any): any {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        let num1 = <number>arg1;
        let num2 = <number>arg2;
        return num1 + num2;
    } else if (typeof arg1 == "string" && typeof arg2 == "string") {
        let s1 = <string>arg1;
        let s2 = <string>arg2;
        return s1 + s2;
    }
}

alert(Add(3, 2));
alert(Add("3", "2"));