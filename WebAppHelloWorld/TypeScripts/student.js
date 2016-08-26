var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var com;
(function (com) {
    var test;
    (function (test) {
        var Student = (function (_super) {
            __extends(Student, _super);
            function Student() {
                _super.apply(this, arguments);
            }
            Object.defineProperty(Student.prototype, "Grade", {
                get: function () {
                    return this._Grade;
                },
                set: function (grade) {
                    this._Grade = grade;
                },
                enumerable: true,
                configurable: true
            });
            return Student;
        }(test.Person));
        test.Student = Student;
    })(test = com.test || (com.test = {}));
})(com || (com = {}));
//# sourceMappingURL=student.js.map