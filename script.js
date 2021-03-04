var size=10;
getList();
$("#list").on("click","a",function(){
    var title=$(this).attr("title");
    var authors=$(this).attr("authors");
    var contents=$(this).attr("contents");
    var price=$(this).attr("price");
    var img=$(this).find("img").attr("src");
    $("#image").attr("src",img);
    $("#title").html(title);   /*속성을 바꿔줄땐 attr 값을 넣어줄때 html*/
    $("#authors").html(authors);
    $("#contents").html(contents);
});
$("#btnMore").on("click",function(){
    size+=5;
    getList();
});
$("#txtQuery").on("keydown",function(){
    size=10;
    getList();
});
function getList(){
    var query=$("#txtQuery").val();
    $.ajax({
        type:"get",
        url:url,
        dataType:"json",
        data:{"query":query,"size":size},
        headers:{"Authorization": "KakaoAK 296843c37a5753ce7961fe40ba389811"},
        success:function(data){
            var temp=Handlebars.compile($("#temp").html());
            $("#list").html(temp(data)).listview("refresh");
        }
    });
}