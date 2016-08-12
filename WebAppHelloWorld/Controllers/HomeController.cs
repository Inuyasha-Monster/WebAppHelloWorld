using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAppHelloWorld.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetDepartment(int limit, int offset, string departmentname, string statu, string search, string order, string sort)
        {
            var lstRes = new List<Department>();
            for (var i = 0; i < 100; i++)
            {
                var oModel = new Department();
                oModel.ID = Guid.NewGuid().ToString();
                oModel.Name = "销售部" + i;
                oModel.Level = i.ToString();
                oModel.Desc = "暂无描述信息";
                oModel.ParentName = "父级部门销售部" + i;
                lstRes.Add(oModel);
            }
            lstRes = lstRes.Where(x => departmentname == null || x.Name.Contains(departmentname)).Where(x => statu == null || x.Desc.Contains(statu)).Where(x => search == null || x.Name.Contains(search)).ToList();
            if (order == "asc")
            {
                if (sort == "Name")
                {
                    lstRes = lstRes.OrderBy(x => x.Name).ToList();
                }
                else
                {
                    lstRes = lstRes.OrderBy(x => x.ID).ToList();
                }

            }
            else
            {
                if (sort == "Name")
                {
                    lstRes = lstRes.OrderByDescending(x => x.Name).ToList();
                }
                else
                {
                    lstRes = lstRes.OrderByDescending(x => x.ID).ToList();
                }
            }
            var total = lstRes.Count;
            var rows = lstRes.Skip(offset).Take(limit).ToList();
            return Json(new { total = total, rows = rows }, JsonRequestBehavior.AllowGet);
        }
    }

    internal class Department
    {
        public string Desc { get; internal set; }
        public string ID { get; internal set; }
        public string Level { get; internal set; }
        public string Name { get; internal set; }
        public string ParentName { get; internal set; }
    }
}