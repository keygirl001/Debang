import '../less/createPage.less';
var json = {nowNum : 1, allNum : 5, callback : function (now, all, data) {
    var num = (now * 10 < data.length) ? 10 : data.length % 10;
   
    if($('.list-content ul').length === 0){  
         for(var i = 0;i < num;i++){
            var ul = $('<ul></ul>');          
            var li = $('<li class="a">' + data[(now - 1) * 10 + i].name + '</li>' + '<li class="b">' + data[(now - 1) * 10 + i].address + '</li>' + '<li class="c">' + data[(now - 1) * 10 + i].salary + '</li>' + '<li class="d">' + data[(now - 1) * 10 + i].experience + '</li>' + '<li class="e">' + data[(now - 1) * 10 + i].degree + '</li>' + '<li class="f">' + data[(now - 1) * 10 + i].time + '</li>');
            ul.append(li);
            $('.list-content').append(ul);
        }
    }else {
            for(var i = 0;i < num;i++){
                $('.list-content ul').eq(i).html('<li class="a">' + data[(now - 1) * 10 + i].name + '</li>' + '<li class="b">' + data[(now - 1) * 10 + i].address + '</li>' + '<li class="c">' + data[(now - 1) * 10 + i].salary + '</li>' + '<li class="d">' + data[(now - 1) * 10 + i].experience + '</li>' + '<li class="e">' + data[(now - 1) * 10 + i].degree + '</li>' + '<li class="f">' + data[(now - 1) * 10 + i].time + '</li>')
            }
        }
        
    }
};
var createPage = (json1,data) => {
    var allNum = json1.allNum;
    var nowNum = json1.nowNum;
    
    if(nowNum > 1){
        $A = $('<a href="#' + (nowNum - 1) + '" class="last">上一页</a>');
        $('.pager').append($A);
    } 
    for(var i = 1;i <= allNum;i++){
        var $A = $('<a href="#' + i + '"  class= ' + i + '></a>');
        $A.text(i);
        if(i === nowNum){
            $A.text(i);
            $A.css({'background':'#494e7b','color':'#fff'});
        }else{
            $A.text(i);
        }
        $('.pager').append($A);
    }
    if(nowNum < allNum){
        $A = $('<a href="#' + (nowNum + 1) + '" class="next">下一页</a>');
        $('.pager').append($A);
    } 
    $('.pager').find('a').on('click', function () {
           var  nowNum = parseInt(this.getAttribute('href').substring(1));
           json.nowNum = nowNum;
           $('.pager').html('');
           createPage(json,data);        
    })
           json1.callback(nowNum, allNum, data);
}
export default createPage;


