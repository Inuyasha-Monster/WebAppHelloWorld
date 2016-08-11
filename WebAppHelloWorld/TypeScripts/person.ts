module com.test {
    export class Person {
        constructor(Name: string, Sex: boolean) {
            this._Name = Name;
            this._Sex = Sex;
        }
        private _Name: string;
        private _Sex: boolean;
        get Name() {
            return this._Name;
        }
        set Name(Name: string) {
            this._Name = Name;
        }

        get Sex() {
            return this._Sex;
        }
        set Sex(Sex: boolean) {
            this._Sex = Sex;
        }

        static SayHello(person: Person) {
            return "大家好" + person.Name;
        }
    }
}