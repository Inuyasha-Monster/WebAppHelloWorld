using System;
using System.Collections.Generic;

namespace LINQDemo
{
    internal class PersonEqualityCompare : IEqualityComparer<Person>
    {
        public bool Equals(Person x, Person y)
        {
            if (x == null)
                return y == null;
            return x.Age.Equals(y.Age);
        }

        public int GetHashCode(Person obj)
        {
            if (obj == null) return 0;
            return obj.Age.GetHashCode();
        }
    }
}