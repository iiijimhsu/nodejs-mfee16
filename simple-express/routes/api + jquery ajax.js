// TODO jquery.ajax 去取得 api/stocks 的資料

$(function () {
    $.ajax({
            type:"GET",
            url:"/stocks",
        }).done(function(data){
            console.log(data);
        });
        });
