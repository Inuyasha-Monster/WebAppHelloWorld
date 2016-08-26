function Add(arg1, arg2) {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        var num1 = arg1;
        var num2 = arg2;
        return num1 + num2;
    }
    else if (typeof arg1 == "string" && typeof arg2 == "string") {
        var s1 = arg1;
        var s2 = arg2;
        return s1 + s2;
    }
}
alert(Add(3, 2));
alert(Add("3", "2"));
//# sourceMappingURL=function.js.map