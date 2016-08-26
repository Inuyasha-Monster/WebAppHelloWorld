var MySnake;
(function (MySnake) {
    var Snake = (function () {
        function Snake() {
            var _this = this;
            // 蛇身
            this.Bodies = new Array();
            // 速度
            this.Speed = 250;
            // 是否暂停
            this.IsPaused = true;
            // 初始化行数
            this.RowCount = 30;
            // 初始化列数
            this.ColumnCount = 30;
            this.Pause = function () {
                clearInterval(this.Timer);
                this.IsPaused = true;
                MySnake.Draw.Print(this.Bodies, this.Container);
            };
            this.MoveNextStep = function () {
                if (MySnake.Draw.CheckNextStep(this.Bodies, this.Direction, this.ColumnCount, this.RowCount, this.Container) === -1) {
                    alert('Game Over');
                    this.Pause();
                    return;
                }
                if (MySnake.Draw.CheckNextStep(this.Bodies, this.Direction, this.ColumnCount, this.RowCount, this.Container) === 1) {
                    var newBody = MySnake.Draw.GetNextPostion(this.Bodies, this.Direction);
                    this.Bodies.unshift(newBody);
                    this.GenerateDood();
                    return;
                }
                var newBody = MySnake.Draw.GetNextPostion(this.Bodies, this.Direction);
                this.Bodies.unshift(newBody);
                this.Bodies.pop();
            };
            // 运行游戏
            this.Run = function () {
                var _Snake = this;
                this.Timer = setInterval(function () {
                    MySnake.Draw.Erase(_Snake.Bodies, _Snake.Container);
                    _Snake.MoveNextStep();
                    MySnake.Draw.Print(_Snake.Bodies, _Snake.Container);
                }, this.Speed);
            };
            this.GenerateDood = function () {
                // 产生食物
                var x = Math.floor(Math.random() * this.ColumnCount);
                var y = Math.floor(Math.random() * this.RowCount);
                if (!MySnake.Draw.IsCellFilled(this.Container, x, y)) {
                    this.Container.rows[y].cells[x].style.backgroundColor = "#ff0";
                }
            };
            this.Container = document.getElementById("container");
            this.Direction = Math.floor(Math.random() * 4);
            var x;
            var y;
            for (var i = 0; i < this.RowCount; i++) {
                var _row = this.Container.insertRow(-1);
                for (var j = 0; j < this.ColumnCount; j++) {
                    _row.insertCell(-1);
                }
            }
            for (var i = 0; i < 10; i++) {
                x = Math.floor(Math.random() * this.ColumnCount);
                y = Math.floor(Math.random() * this.RowCount);
                if (!MySnake.Draw.IsCellFilled(this.Container, x, y)) {
                    this.Container.rows[y].cells[x].style.backgroundColor = "#ff0";
                }
            }
            while (true) {
                x = Math.floor(Math.random() * this.ColumnCount);
                y = Math.floor(Math.random() * this.RowCount);
                if (!MySnake.Draw.IsCellFilled(this.Container, x, y)) {
                    this.Container.rows[y].cells[x].style.backgroundColor = "#999";
                    var _body = new MySnake.SnakeBody();
                    _body.X = x;
                    _body.Y = y;
                    this.Bodies.push(_body);
                    break;
                }
            }
            document.onkeydown = function (e) {
                switch (e.keyCode | e.which | e.charCode) {
                    case 13:
                        //回车
                        if (_this.IsPaused) {
                            _this.Run();
                            _this.IsPaused = false;
                        }
                        else {
                            // 如果没有暂停,则停止移动
                            _this.Pause();
                            _this.IsPaused = true;
                        }
                        break;
                    case 37:
                        //左箭头
                        if (_this.Direction == MySnake.MoveDirection.Right) {
                            break;
                        }
                        _this.Direction = MySnake.MoveDirection.left;
                        break;
                    case 38:
                        //上箭头
                        if (_this.Direction == MySnake.MoveDirection.Down) {
                            break;
                        }
                        _this.Direction = MySnake.MoveDirection.Up;
                        break;
                    case 39:
                        //右箭头
                        if (_this.Direction == MySnake.MoveDirection.left) {
                            break;
                        }
                        _this.Direction = MySnake.MoveDirection.Right;
                        break;
                    case 40:
                        //下箭头
                        if (_this.Direction == MySnake.MoveDirection.Up) {
                            break;
                        }
                        _this.Direction = MySnake.MoveDirection.Down;
                        break;
                }
            };
        }
        return Snake;
    }());
    window.onload = function (e) {
        var snake = new Snake();
    };
})(MySnake || (MySnake = {}));
//# sourceMappingURL=Snake.js.map