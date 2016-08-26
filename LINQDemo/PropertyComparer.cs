using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace LINQDemo
{
    public class PropertyComparer<T> : IEqualityComparer<T>
    {
        private PropertyInfo _PropertyInfo;

        public PropertyComparer(string propertyName)
        {
            _PropertyInfo = typeof(T).GetProperty(propertyName,
     BindingFlags.GetProperty | BindingFlags.Instance | BindingFlags.Public);
            if (_PropertyInfo == null)
            {
                throw new ArgumentException(string.Format("{0} is not a property of type {1}.", nameof(propertyName), typeof(T)));
            }
        }

        public bool Equals(T x, T y)
        {
            if (x == null) return y == null;
            var xValue = _PropertyInfo.GetValue(x);
            var yValue = _PropertyInfo.GetValue(y);
            if (xValue == null) return yValue == null;
            return xValue.Equals(yValue);
        }

        public int GetHashCode(T obj)
        {
            object propertyValue = _PropertyInfo.GetValue(obj);

            if (propertyValue == null)
                return 0;
            else
                return propertyValue.GetHashCode();
        }
    }
}
