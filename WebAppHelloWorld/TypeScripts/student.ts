module com.test {
    export class Student extends Person {
        private _Grade: string;
        get Grade() {
            return this._Grade;
        }
        set Grade(grade: string) {
            this._Grade = grade;
        }
    }
}