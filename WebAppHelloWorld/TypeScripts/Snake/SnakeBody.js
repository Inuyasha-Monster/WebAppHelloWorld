var MySnake;
(function (MySnake) {
    /**
     *移动枚举对象
     */
    (function (MoveDirection) {
        MoveDirection[MoveDirection["Up"] = 0] = "Up";
        MoveDirection[MoveDirection["Right"] = 1] = "Right";
        MoveDirection[MoveDirection["Down"] = 2] = "Down";
        MoveDirection[MoveDirection["left"] = 3] = "left";
    })(MySnake.MoveDirection || (MySnake.MoveDirection = {}));
    var MoveDirection = MySnake.MoveDirection;
    /**
     *蛇体本身对象
     */
    var SnakeBody = (function () {
        function SnakeBody() {
        }
        return SnakeBody;
    }());
    MySnake.SnakeBody = SnakeBody;
})(MySnake || (MySnake = {}));
//# sourceMappingURL=SnakeBody.js.map