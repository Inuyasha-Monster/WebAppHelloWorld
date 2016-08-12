var com;
(function (com) {
    var myfuck;
    (function (myfuck) {
        // 接口类型作为参数
        function Add(args) {
            return args.num1 + args.num2;
        }
        // 隐式接口类型作为参数
        function Add2(args) {
            return args.num1 + args.num2;
        }
        var Add1 = function (a, b) {
            return a + b;
        };
        var _count = {};
        _count.num1 = 10;
        _count.num2 = 10;
    })(myfuck = com.myfuck || (com.myfuck = {}));
})(com || (com = {}));
//# sourceMappingURL=NoknownNameInterface.js.map