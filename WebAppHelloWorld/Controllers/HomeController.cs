using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebAppHelloWorld.Controllers
{
    public class HomeController : Controller
    {
        static HomeController()
        {
            var lstRes = new List<Department>();
            for (var i = 0; i < 100; i++)
            {
                var guid = Guid.NewGuid().ToString();
                var oModel = new Department();
                oModel.ID = guid;
                oModel.Name = "销售部" + i;
                oModel.Level = i.ToString();
                oModel.Desc = "暂无描述信息";
                oModel.ParentName = "父级部门销售部" + i;
                //ParentID
                oModel.ParentID = guid;
                lstRes.Add(oModel);
            }
            Departments = lstRes;
        }

        private static List<Department> Departments { get; set; }


        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetChildrenMenu(string strParentID)
        {
            var departments = Departments.Where(x => x.ID == strParentID).ToList();
            return Json(departments, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetDepartment(int limit, int offset, string departmentname, string statu, string search, string order, string sort)
        {
            var departments = Departments.Where(x => departmentname == null || x.Name.Contains(departmentname)).Where(x => statu == null || x.Desc.Contains(statu)).Where(x => search == null || x.Name.Contains(search)).ToList();
            if (order == "asc")
            {
                if (sort == "Name")
                {
                    departments = departments.OrderBy(x => x.Name).ToList();
                }
                else
                {
                    departments = departments.OrderBy(x => x.ID).ToList();
                }

            }
            else
            {
                if (sort == "Name")
                {
                    departments = departments.OrderByDescending(x => x.Name).ToList();
                }
                else
                {
                    departments = departments.OrderByDescending(x => x.ID).ToList();
                }
            }
            var total = departments.Count;
            var rows = departments.Skip(offset).Take(limit).ToList();
            return Json(new { total = total, rows = rows }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Edit(string strJson)
        {
            var model = Newtonsoft.Json.JsonConvert.DeserializeObject<Department>(strJson);
            Departments.Single(x => x.ID == model.ParentID).Desc = "fuck";
            return new HttpStatusCodeResult(System.Net.HttpStatusCode.OK);
        }

        [HttpGet]
        public ViewResult Snake()
        {
            return View();
        }

        [HttpGet]
        public ActionResult ExportExcel()
        {
            return View();
        }
    }


    public class Department
    {
        public string Desc { get; internal set; }
        public string ID { get; internal set; }
        public string Level { get; internal set; }
        public string Name { get; internal set; }
        public string ParentName { get; internal set; }
        public string ParentID { get; set; }
    }
}