using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQDemo
{
    public class Person
    {
        public Person(int age)
        {
            this.Age = age;
        }
        public int Age { get; set; }

        public override string ToString()
        {
            return this.Age.ToString();
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            #region 排列数据

            #region orderby word.Length
            //var words = new[] { "the", "quick", "brown", "fox", "jumps" };
            //var query = from word in words
            //            orderby word.Length
            //            select word;

            //foreach (var word in query)
            //{
            //    Console.WriteLine(word);
            //}
            #endregion

            #region orderby word.Substring(0, 1) descending
            //var words = new[] { "the", "quick", "brown", "fox", "jumps" };
            //var query = from word in words
            //            orderby word.Substring(0, 1) descending
            //            select word;

            //foreach (var word in query)
            //{
            //    Console.WriteLine(word);
            //}
            #endregion

            #region 下面通过演示使用 orderby 进行主要和次要排序：先升序按字符串长度（主）、再升序按字符串的第一个字母（次）

            //var words = new[] { "the", "quick", "brown", "fox", "jumps" };
            //var query = from word in words
            //            orderby word.Length, word.Substring(0, 1)
            //            select word;

            //foreach (var word in query)
            //{
            //    Console.WriteLine(word);
            //}
            #endregion
            #region  下面通过演示使用 orderby descending 进行主要和次要排序：先升序按字符串长度（主）、再降序按字符串的第一个字母（次）

            //var words = new[] { "the", "quick", "brown", "fox", "jumps" };
            //var query = from word in words
            //            orderby word.Length, word.Substring(0, 1) descending
            //            select word;

            //foreach (var word in query)
            //{
            //    Console.WriteLine(word);
            //}

            #endregion
            #endregion

            #region Set 操作

            #region （1）Distinct： 返回的序列包含输入序列的唯一元素。

            //List<int> fuck = new List<int>() { 1, 1, 2, 3, 4, 5, 6 };

            //fuck.Distinct().ToList().ForEach(x => Console.WriteLine(x));

            //List<Person> fuckPerson = new List<Person>() { new Person(20), new Person(24), new Person(20) };

            //fuckPerson.Distinct(x => x.Age).ToList().ForEach(x => Console.WriteLine(x));

            #endregion

            #region （2）Except： 返回的序列只包含位于第一个输入序列但不位于第二个输入序列的元素。  

            //List<int> fuck = new List<int>() { 1, 1, 2, 3, 4, 5, 6 };
            //List<int> fuck1 = new List<int>() { 1, 1, 2 };

            //var result = fuck.Except(fuck1);
            //result.ToList().ForEach(x => Console.WriteLine(x));
            #endregion

            #region （3）Intersect： 返回的序列包含两个输入序列共有的元素。  
            //List<int> fuck = new List<int>() { 1, 1, 2, 3, 4, 5, 6 };
            //List<int> fuck1 = new List<int>() { 1, 1, 22, 6 };

            //var result = fuck.Intersect(fuck1);
            //result.ToList().ForEach(x => Console.WriteLine(x));
            #endregion

            #region （4）Union： 返回的序列包含两个输入序列的唯一的元素。 
            //List<int> fuck = new List<int>() { 1, 1, 2, 3, 4, 5, 6 };
            //List<int> fuck1 = new List<int>() { 1, 1, 22, 66 };

            //var result = fuck.Union(fuck1);
            //result.ToList().ForEach(x => Console.WriteLine(x));
            #endregion
            #endregion

            #region 四、过滤数据

            #endregion
            //五、量词操作 

            Console.ReadKey();
        }
    }
}
