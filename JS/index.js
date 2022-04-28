$(document).ready(function(){
    var i = 1;
    $("#btn2").click(function(){
        $("#myModal").modal();
    });
    function kiemtraten(){
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}{a-z]+){1,})$/;
        if($("#Name").val() == ""){
            $("#tbName").html("Không để trống")
            return false;
        }
        if(!mauKT.test($("#Name").val())){
            $("#tbName").html("Mỗi kí tự đầu viết hoa không dùng số")
            return true;
        }
        $("#tbName").html("*")
            return true;
    }
    $("#Name").blur(kiemtraten);

    function kiemtrasoao(){
        var mauKT = /^\d*$/;
        if($("#Ao").val() == ""){
            $("#tbAo").html("Không để trống")
            return false;
        }
        if(!mauKT.test($("#Ao").val())){
            $("#tbAo").html("Dùng số từ 1 đến 100")
            return true;
        }else{
            var soao = $("#Ao").val();
            if(soao < 1 || soao > 100){
                $("#tbAo").html("Từ 1 đến 100")
            }else{
                $("#tbName").html("*")
                return true;
            }
        }
        $("#tbName").html("*")
            return true;
    }
    $("#Ao").blur(kiemtrasoao);

    function kiemtradiachi(){
        var mauKT = /^([A-Z0-9][a-z0-9]+)*(\s[A-Z0-9][a-z0-9]*)*$/;
        if($("#DC").val() == ""){
            $("#tbDC").html("Không để trống")
            return false;
        }
        if(!mauKT.test($("#DC").val())){
            $("#tbDC").html("Mỗi kí tự đầu viết hoa không dùng số")
            return true;
        }
        $("#tbDC").html("*")
            return true;
    }
    $("#DC").blur(kiemtradiachi);

    function kiemtraNTT(){
        if($("#NTT").val() == ""){
            $("#tbNTT").html("Không để trống")
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 7);
        if(today > ntt){
            $("#tbNTT").html("Phải sau  ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNTT").html("*")
            return true;
    }
    $("#NTT").blur(kiemtraNTT);

    function kiemtraSDT(){
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if($("#SDT").val() == ""){
            $("#tbSDT").html("Không để trống")
            return false;
        }
        if(!mauKT.test($("#SDT").val())){
            $("#tbSDT").html("Theo dạng 0xxx-xxxx-xxxx trong đó x là số")
            return true;
        }
        $("#tbSDT").html("*")
            return true;
    }
    $("#SDT").blur(kiemtraSDT);

    $("#Save").click(function(){
        if(kiemtraten ==true && kiemtrasoao==true && kiemtradiachi == true && kiemtraSDT==true && kiemtraNTT==true){
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#Ao").val() + "</th>";
            row += "<th>" + $("#Dc").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#NTT").val() + "</th>";
            $("#danhsach").append(row);
            $("#myModal").modal(hide);
        }
    })
});