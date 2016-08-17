module MySnake {
    /**
     *移动枚举对象
     */
    export enum MoveDirection {
        Up = 0,
        Right = 1,
        Down = 2,
        left = 3
    }
    /**
     *蛇体本身对象
     */
    export class SnakeBody {
        X: number;
        Y: number;
    }
}