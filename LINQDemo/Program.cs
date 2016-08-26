using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
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

            #region 六、投影操作


            //六、投影操作

            //            标准查询运算符操作方法 - 投影
            //方法名 说明  C# 查询表达式语法
            //Select  映射基于转换函数的值。	select
            //SelectMany  映射基于转换函数的值序列，然后将它们展平为一个序列。	使用多个 from 子句

            //var phrases = new List<string>() { "an apple a day", "the quick brown fox" };
            //phrases.SelectMany(x => x.Split(' ')).ToList().ForEach(x => Console.WriteLine(x));
            //Console.WriteLine();
            //var query = from phrase in phrases
            //            from word in phrase.Split(' ')
            //            select word;

            //foreach (var word in query)
            //{
            //    Console.WriteLine(word);
            //}

            //Select() 和 SelectMany() 的工作都是依据源值生成一个或多个结果值。Select() 为每个源值生成一个结果值。因此，总体结果是一个与源集合具有相同元素数目的集合。与之相反，SelectMany() 将生成单一总体结果，其中包含来自每个源值的串联子集合。作为参数传递到 SelectMany() 的转换函数必须为每个源值返回一个可枚举值序列。然后，SelectMany() 将串联这些可枚举序列以创建一个大的序列。
            #endregion

            #region 七、划分数据

            //            分区序列的标准查询运算符方法
            //            运算符名称

            //说明

            //C# 查询表达式语法

            //Skip

            //跳过序列中的指定位置之前的元素。

            //X
            //SkipWhile

            //基于谓词函数跳过元素，直到某元素不再满足条件。

            //X
            //Take

            //提取序列中的指定位置之前的元素。

            //X
            //TakeWhile

            //基于谓词函数提取元素，直到某元素不再满足条件。	X
            #endregion

            #region 八、联接操作

            //List<Student> ss = new List<Student>();
            //ss.Add(new Student { ClassRoomID = 1 });
            //ss.Add(new Student { ClassRoomID = 2 });
            //ss.Add(new Student { ClassRoomID = 3 });
            //ss.Add(new Student { ClassRoomID = 2 });

            //List<ClassRoom> cc = new List<LINQDemo.ClassRoom>();
            //cc.Add(new ClassRoom { ID = 2, ClassName = "2班" });

            //(from s in ss
            // join c in cc on s.ClassRoomID equals c.ID into sc
            // from d in sc.DefaultIfEmpty(new ClassRoom { ClassName = "null" })
            // select new { Student = s, ClassName = d.ClassName }).ToList().ForEach(x => Console.WriteLine(x.Student.ClassRoomID + " " + x.ClassName));
            //Console.WriteLine();
            //ss.Join(cc, s => s.ClassRoomID, c => c.ID, (s, c) => new { s.ClassRoomID, c.ClassName }).ToList().ForEach(x => Console.WriteLine(x.ClassRoomID + " " + x.ClassName));
            //Console.WriteLine();

            //var sss = ss.GroupJoin(cc, s => s.ClassRoomID, c => c.ID, (s, ccc) => new { ID = s.ClassRoomID, Num = ccc.FirstOrDefault() }).ToList();
            //foreach (var item in sss)
            //{
            //    Console.WriteLine(item.ID);
            //    if (item.Num != null) Console.WriteLine(" " + item.Num.ClassName);
            //}

            #endregion

            #region 九、分组数据
            //var numbers = new List<int>() { 35, 25, 25, 25, 3987, 4, 199, 329, 446, 208 };
            //var query = from number in numbers
            //            group number by number % 2 == 0;
            //foreach (var item in query)
            //{
            //    Console.WriteLine(item.Key ? "偶数" : "奇数");

            //    foreach (var temp in item)
            //    {
            //        Console.WriteLine(temp);
            //    }
            //}

            //List<ClassRoom> crs = new List<ClassRoom>();
            //crs.Add(new ClassRoom { ID = 1, ClassName = "1" });
            //crs.Add(new ClassRoom { ID = 1, ClassName = "2" });
            //crs.Add(new ClassRoom { ID = 2, ClassName = "3" });
            //crs.Add(new ClassRoom { ID = 2, ClassName = "4" });

            //(from a in crs
            // group a by a.ID into ga
            // select new { Num = ga.Count() }).ToList().ForEach(x => Console.WriteLine(x.Num));

            //crs.GroupBy(x => x.ID).Select(group => new { Num = group.Count() }).ToList().ForEach(x => Console.WriteLine(x.Num));

            #endregion

            #region 反射性能优化

            dynamic math = new MyMath();

            System.Diagnostics.Stopwatch sw = new System.Diagnostics.Stopwatch();
            sw.Start();

            for (int i = 0; i < 10000000; i++)
            {
                math.Add(1, 2);
            }
            sw.Stop();
            Console.WriteLine("dynamic:耗时{0} ms", sw.ElapsedMilliseconds);
            sw.Restart();

            var math1 = new MyMath();
            Expression<Func<int, int, int>> add = (a, b) => math1.Add(a, b);
            var fuck = add.Compile();
            for (int i = 0; i < 10000000; i++)
            {
                fuck(1, 2);
            }
            sw.Stop();
            Console.WriteLine("expression:耗时{0} ms", sw.ElapsedMilliseconds);

            #endregion

            Console.ReadKey();
        }
    }

    public class MyMath
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
    }

    public class Student
    {
        public int ClassRoomID { get; set; }
    }

    public class ClassRoom
    {
        public int ID { get; set; }
        public string ClassName { get; set; }
    }
}
