using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            var words = new[] { "the", "quick", "brown", "fox", "jumps" };
            var query = from word in words
                        orderby word.Length
                        select word;

            foreach (var word in query)
            {
                Console.WriteLine(word);
            }

            Console.ReadKey();
        }
    }
}
