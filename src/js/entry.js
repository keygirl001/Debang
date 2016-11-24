import '../less/index.less';
import city from './city.js';
import lunbo from './lunBo.js';
import createPage from './createPage.js';

city();
lunbo();
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
$.ajax({
        type:'GET',
        url:'..src/txt/data.txt',
        dataType : 'json',
        success : function (data) {
            createPage(json,data);
        },
        error : function (e) {
            console.log(e);
        }
});