module com.myfuck {

    interface Count {
        num1: number;
        num2: number;
    }

    // 接口类型作为参数
    function Add(args: Count) {
        return args.num1 + args.num2;
    }

    // 隐式接口类型作为参数
    function Add2(args: {
        num1: number;
        num2: number;
    }) {
        return args.num1 + args.num2;
    }

    interface Count1 {
        (num1: number, num2: number): number;
    }

    var Add1: Count1 = function (a, b) {
        return a + b;
    }

    var _count = <Count>{};
    _count.num1 = 10;
    _count.num2 = 10;
}
