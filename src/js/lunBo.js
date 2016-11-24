import '../less/lunBo.less';
let lunbo = () => {
	var oLi = $('.wrapper .move');
    var index = 0;
    var timer = null;
    var flag = true;
    let init = () => {
        oLi.eq(0).css({'top' : '0', 'height' : '370px', 'width' : '640px', 'left' : '130px', 'opacity' : '1','z-index': '3'});
        oLi.eq(1).css({'top' : '37px', 'height' : '296px', 'width' : '512px', 'left' : '301px','opacity' : '1', 'z-index' : '2'});
        oLi.eq(2).css({'top' : '66px', 'height' : '236px', 'width' : '410px', 'left' : '447px', 'opacity' : '0.5', 'z-index' : '1'});   
        oLi.eq(3).css({'top' : '90px', 'height' : '190px', 'width' : '328px', 'left' : '572px', 'opacity' : '0.4', 'z-index' : '0'});
        oLi.eq(4).css({'top' : '37px',  'height' : '296px', 'width' : '512px', 'left' : '87px', 'opacity' : '1', 'z-index' : '2'});
        oLi.eq(5).css({'top' : '66px', 'height' : '236px', 'width' : '410px', 'left' : '43px', 'opacity' : '0.5', 'z-index' : '1'});
        oLi.eq(6).css({'top' : '90px', 'height' : '190px', 'width' : '328px' , 'left' : '0px', 'opacity' : '0.4', 'z-index' : '0'});
    }
    init();
    let leftMove = () => {
        if(flag){
            flag = false;
            oLi.eq((index) % 7).animate({'left' : '87px', 'width' : '512px', 'height' : '296px', 'top' : '37px', 'opacity' : '1','z-index' : '2'});
            oLi.eq((index + 1) % 7).animate({'left' : '130px', 'width' : '640px', 'height' : '370px', 'top' : '0', 'opacity' : '1', 'z-index':'3'});
        // oLi.css({'z-index' : '100'})
            oLi.eq((index + 2) % 7).animate({'left' : '301px', 'width' : '512px', 'height' : '296px', 'top' : '37px', 'opacity' : '1', 'z-index' : '2'});
        
            oLi.eq((index + 3) % 7).animate({'left' : '447px', 'width' : '410px', 'height' : '236px', 'top' : '66px', 'opacity' : '0.5', 'z-index' : '1'});
            oLi.eq((index + 4) % 7).animate({'left' : '43px', 'width' : '410px', 'height' : '236px', 'top' : '66px', 'opacity' : '0.5', 'z-index':'1'});
            oLi.eq((index + 5) % 7).animate({'top' : '90px', 'height' : '190px', 'width' : '328px' , 'left' : '0px', 'opacity' : '0.4', 'z-index' : '0'});
            oLi.eq((index + 6) % 7).animate({'top' : '90px', 'height' : '190px', 'width' : '328px', 'left' : '572px', 'opacity' : '0.4', 'z-index' : '0'} , function() {
                index++;
                flag = true;
            });
        }	
    }
    let rightMove = () => {
        if(flag){
            flag = false;
            oLi.eq((index + 6) % 7).animate({'top' : '37px', 'height' : '296px', 'width' : '512px', 'left' : '301px','opacity' : '1', 'z-index' : '2'});
            oLi.eq((index + 5) % 7).animate({'top' : '66px', 'height' : '236px', 'width' : '410px', 'left' : '447px', 'opacity' : '0.5', 'z-index' : '1'});
            oLi.eq((index + 4) % 7).animate({'top' : '90px', 'height' : '190px', 'width' : '328px', 'left' : '572px', 'opacity' : '0.4', 'z-index' : '0'});
            oLi.eq((index + 3) % 7).animate({'top' : '90px', 'height' : '190px', 'width' : '328px' , 'left' : '0px', 'opacity' : '0.4', 'z-index' : '0'});
            oLi.eq((index + 2) % 7).animate({'top' : '0', 'height' : '370px', 'width' : '640px', 'left' : '130px', 'opacity' : '1','z-index': '3'});
            oLi.eq((index + 1) % 7).animate({'top' : '37px',  'height' : '296px', 'width' : '512px', 'left' : '87px', 'opacity' : '1', 'z-index' : '2'});
            oLi.eq((index ) % 7).animate({'top' : '66px', 'height' : '236px', 'width' : '410px', 'left' : '43px', 'opacity' : '0.5', 'z-index' : '1'},function () {
            index--;
            flag = true;
            });
        }
    }

    $('.left').on('click', function () {
        leftMove();
    });
    $('.right').on('click', function () {
        rightMove();
    });
}
export default lunbo;