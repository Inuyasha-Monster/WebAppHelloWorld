module MySnake {
    /**
     * 绘图对象
     */
    export class Draw {
        /**
         * 擦除蛇身体方法
         * @param p_Bodies 蛇身体的集合
         * @param p_Table  游戏容器对象
         */
        static Erase(p_Bodies: Array<SnakeBody>, p_Table: HTMLTableElement): void {
            for (var i = 0; i < p_Bodies.length; i++) {
                this.EraseDot(p_Bodies[i].X, p_Bodies[i].Y, p_Table);
            }
        }
        /**
         * 擦除蛇体单元格
         * @param x 列
         * @param y 行
         * @param p_Table 容器对象
         */
        static EraseDot(x: number, y: number, p_Table: HTMLTableElement): void {
            (<HTMLTableCellElement>(<HTMLTableRowElement>p_Table.rows[y]).cells[x]).style.backgroundColor = "";
        }

        /**
         * 绘制蛇身
         * @param p_Bodies 蛇身体的集合
         * @param p_Table  游戏容器对象
         */
        static Print(p_Bodies: Array<SnakeBody>, p_Table: HTMLTableElement): void {
            for (var i = 0; i < p_Bodies.length; i++) {
                this.PrintDot(p_Bodies[i].X, p_Bodies[i].Y, p_Table);
            }
        }
        /**
         * 绘制单元格
         * @param x 列
         * @param y 行
         * @param p_Table 容器对象
         */
        private static PrintDot(x: number, y: number, p_Table: HTMLTableElement): void {
            (<HTMLTableCellElement>(<HTMLTableRowElement>p_Table.rows[y]).cells[x]).style.backgroundColor = "#999";
        }

        /**
         * 检查下一步
         * @param p_Bodies      蛇
         * @param p_Direction   方向
         * @param p_ColumnCount 列数
         * @param p_RowCount    行数
         * @param p_Table       容器  
         */
        static CheckNextStep(p_Bodies: Array<SnakeBody>, p_Direction: MoveDirection, p_ColumnCount: number, p_RowCount: number, p_Table: HTMLTableElement): number {
            var _NewBody: SnakeBody = this.GetNextPostion(p_Bodies, p_Direction);
            // 边界检查
            if (_NewBody.X < 0 || _NewBody.X >= p_ColumnCount || _NewBody.Y < 0 || _NewBody.Y >= p_RowCount) {
                return -1;
            }
            // 自身检查
            for (var i = 0; i < p_Bodies.length; i++) {
                if (p_Bodies[i].X == _NewBody.X && p_Bodies[i].Y == _NewBody.Y) {
                    return -1;
                }
            }
            // 食物检查
            if (this.IsCellFilled(p_Table, _NewBody.X, _NewBody.Y)) {
                return 1;
            }
            // 空白
            return 0;
        }
        /**
         * 获取下一个坐标点对象
         * @param p_Bodies
         * @param p_Direction
         */
        static GetNextPostion(p_Bodies: Array<SnakeBody>, p_Direction: MoveDirection): SnakeBody {
            var x: number = p_Bodies[0].X;
            var y: number = p_Bodies[0].Y;
            switch (p_Direction) {
                case MoveDirection.Up: y--; break;
                case MoveDirection.Down: y++; break;
                case MoveDirection.Right: x++; break;
                case MoveDirection.left: x--; break;
            }
            var item = new SnakeBody();
            item.X = x;
            item.Y = y;
            return item;
        }
        /**
         * 检查是否填充
         * @param p_Table
         * @param x
         * @param y
         */
        static IsCellFilled(p_Table: HTMLTableElement, x: number, y: number): boolean {
            if ((<HTMLTableCellElement>(<HTMLTableRowElement>p_Table.rows[y]).cells[x]).style.backgroundColor === "") {
                return false;
            }
            return true;
        }
    }
}