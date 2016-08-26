var com;
(function (com) {
    var test;
    (function (test) {
        var Person = (function () {
            function Person(Name, Sex) {
                this._Name = Name;
                this._Sex = Sex;
            }
            Object.defineProperty(Person.prototype, "Name", {
                get: function () {
                    return this._Name;
                },
                set: function (Name) {
                    this._Name = Name;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Person.prototype, "Sex", {
                get: function () {
                    return this._Sex;
                },
                set: function (Sex) {
                    this._Sex = Sex;
                },
                enumerable: true,
                configurable: true
            });
            Person.SayHello = function (person) {
                return "大家好" + person.Name;
            };
            return Person;
        }());
        test.Person = Person;
    })(test = com.test || (com.test = {}));
})(com || (com = {}));
//# sourceMappingURL=person.js.map