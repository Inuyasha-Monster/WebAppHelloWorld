$(function () {

    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();

    //2.初始化Button的点击事件
    var oButtonInit = new ButtonInit();
    oButtonInit.Init();

});


var TableInit = function () {
    var oTableInit = new Object();

    //index：父表当前行的行索引。
    //row：父表当前行的Json数据对象。
    //$detail：当前行下面创建的新行里面的td对象。
    //第三个参数尤其重要，因为生成的子表的table在装载在$detail对象里面的。bootstrap table为我们生成了$detail这个对象，然后我们只需要往它里面填充我们想要的table即可。

    oTableInit.InitSubTable = function (index, row, $detail) {
        var parentID = row.ParentID;
        var cur_table = $detail.html('<table></table>').find('table');
        $(cur_table).bootstrapTable({
            url: '/Home/GetChildrenMenu',
            method: 'get',
            queryParams: { strParentID: parentID },
            ajaxOptions: { strParentID: parentID },
            clickToSelect: true,
            detailView: true,//父子表
            uniqueId: "ID",
            pageSize: 10,
            pageList: [10, 25, 50],
            columns: [{
                checkbox: true
            }, {
                field: 'ID',
                title: '部门编号'
            }, {
                field: 'Name',
                title: '部门名字'
            }, {
                field: 'ParentName',
                title: '上级部门名字'
            }, {
                field: 'ParentID',
                title: '上级部门ID'
            }, {
                field: 'Desc',
                title: '描述'
            }, {
                field: 'Level',
                title: '部门级别'
            }, ],
            //无线循环取子表，直到子表里面没有记录
            onExpandRow: function (index, row, $Subdetail) {
                oTableInit.InitSubTable(index, row, $Subdetail);
            }
        });
    }

    //初始化Table
    oTableInit.Init = function () {
        $('#tb_departments').bootstrapTable({
            url: '/Home/GetDepartment',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: true,                    //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber: 1,                      //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            height: undefined,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            undefinedText: '-',
            classes: 'table table-hover',
            showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: true,                  //是否显示父子表
            paginationLoop: false,
            idField: 'ID',
            silentSort: false,
            sortName: 'Name',
            columns: [{
                checkbox: true,
                visible: true,
                switchable: false,
                cardVisible: false
            }, {
                field: 'ID',
                title: 'GUID',
                sortable: true
            }, {
                field: 'Name',
                title: '部门名称',
                align: 'left',
                sortable: true
            }, {
                field: 'ParentName',
                title: '上级部门'
            }, {
                field: 'ParentID',
                title: '上级部门ID'
            }, {
                field: 'Level',
                title: '部门级别'
            }, {
                field: 'Desc',
                title: '描述',
                editable: true
            }, ],
            //注册加载子表的事件。注意下这里的三个参数！
            onExpandRow: function (index, row, $detail) {
                oTableInit.InitSubTable(index, row, $detail);
            },
            rowStyle: function (row, index) {
                //这里有5个取值代表5中颜色['active', 'success', 'info', 'warning', 'danger'];
                var strclass = "";
                if (row.Name === "销售部0") {
                    strclass = 'success';//还有一个active
                }
                else if (row.Name === "销售部1") {
                    strclass = 'danger';
                }
                else {
                    return {};
                }
                return { classes: strclass }
            },
            onEditableSave: function (field, row, oldValue, $el) {
                $.ajax({
                    type: "post",
                    url: "/Home/Edit",
                    data: { strJson: JSON.stringify(row) },
                    success: function (data, status) {
                        if (status === "success") {
                            alert("编辑成功");
                        }
                    },
                    error: function () {
                        alert("Error");
                    },
                    complete: function () {

                    }
                });
            }
        });
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            departmentname: $("#txt_search_departmentname").val(),
            statu: $("#txt_search_statu").val(),
            search: params.search,
            order: params.order,
            sort: params.sort
        };
        return temp;
    };
    return oTableInit;
};


var ButtonInit = function () {
    var oInit = new Object();
    var postdata = {};

    oInit.Init = function () {
        //初始化页面上面的按钮事件
        $('#btn_query').on('click', function () {
            $('#tb_departments').bootstrapTable('refresh');
        });
    };

    return oInit;
};