import '../less/city.less';
let city = () => {
    $('.city-content li').on('click', function (e) {
        var e = event || e;
        var target = event.target || event.srcElement;
        $('.nowPos').text('');
        $('.nowPos').html(target.innerHTML);
        $(this).css({'color':'#494e7b','textDecoration':'underline'});

    })
    $('.city-content li').on('mouseleave', function () {
        $(this).css({'color':'#999','textDecoration':'none'});
    })
	$('.position').on('mouseenter', function () {
	$('.city-select').css({'display':'block'});
    $('.city-content-a').css({'display':'none'});
        $('.city-content-b').css({'display':'none'});
        $('.city-content-c').css({'display':'none'});
        $('.city-content-d').css({'display':'none'});
        $('.city-content-e').css({'display':'none'});
        $('.city-content-f').css({'display':'none'});  
    });
    $('.city_hot').on('mouseenter', function () {
    	
	    $('.city_hot').css({'background':'#494e7b','color':'#fbfbfb'});
	    $('.city-content-hot').css({'display':'block'});
	    $('.city-content-a').css({'display':'none'});
        $('.city-content-b').css({'display':'none'});
        $('.city-content-c').css({'display':'none'});
        $('.city-content-d').css({'display':'none'});
        $('.city-content-e').css({'display':'none'});
        $('.city-content-f').css({'display':'none'});  

	

    $('.city_a').css({'background':'#fff','color':'#424242'});
    $('.city_b').css({'background':'#fff','color':'#424242'});
    $('.city_c').css({'background':'#fff','color':'#424242'});
    $('.city_d').css({'background':'#fff','color':'#424242'});
    $('.city_e').css({'background':'#fff','color':'#424242'});
    $('.city_f').css({'background':'#fff','color':'#424242'});    

})
$('.city_a').on('mouseenter', function () {
	$('.city-content-a').css({'display':'block'});
	$('.city_a').css({'background':'#494e7b','color':'#fbfbfb'});

    $('.city-content-hot').css({'display':'none'});
	$('.city-content-b').css({'display':'none'});
    $('.city-content-c').css({'display':'none'});
    $('.city-content-d').css({'display':'none'});
    $('.city-content-e').css({'display':'none'});
    $('.city-content-f').css({'display':'none'});

    $('.city_hot').css({'background':'#fff','color':'#424242'});
    $('.city_b').css({'background':'#fff','color':'#424242'});
    $('.city_c').css({'background':'#fff','color':'#424242'});
    $('.city_d').css({'background':'#fff','color':'#424242'});
    $('.city_e').css({'background':'#fff','color':'#424242'});
    $('.city_f').css({'background':'#fff','color':'#424242'});    
});
$('.city_b').on('mouseenter', function () {
	$('.city_b').css({'background':'#494e7b','color':'#fbfbfb'});
	$('.city-content-b').css({'display':'block'});
	
	$('.city-content-hot').css({'display':'none'});
	$('.city-content-a').css({'display':'none'});
    $('.city-content-c').css({'display':'none'});
    $('.city-content-d').css({'display':'none'});
    $('.city-content-e').css({'display':'none'});
    $('.city-content-f').css({'display':'none'});

    $('.city_hot').css({'background':'#fff','color':'#424242'});
    $('.city_a').css({'background':'#fff','color':'#424242'});
    $('.city_c').css({'background':'#fff','color':'#424242'});
    $('.city_d').css({'background':'#fff','color':'#424242'});
    $('.city_e').css({'background':'#fff','color':'#424242'});
    $('.city_f').css({'background':'#fff','color':'#424242'});  

});

$('.city_c').on('mouseenter', function () {
	$('.city_c').css({'background':'#494e7b','color':'#fbfbfb'});
	$('.city-content-c').css({'display':'block'});
	
	$('.city-content-hot').css({'display':'none'});
	$('.city-content-a').css({'display':'none'});
    $('.city-content-b').css({'display':'none'});
    $('.city-content-d').css({'display':'none'});
    $('.city-content-e').css({'display':'none'});
    $('.city-content-f').css({'display':'none'});

    $('.city_hot').css({'background':'#fff','color':'#424242'});
    $('.city_a').css({'background':'#fff','color':'#424242'});
    $('.city_b').css({'background':'#fff','color':'#424242'});
    $('.city_d').css({'background':'#fff','color':'#424242'});
    $('.city_e').css({'background':'#fff','color':'#424242'});
    $('.city_f').css({'background':'#fff','color':'#424242'});  

});
$('.city_d').on('mouseenter', function () {
	$('.city_d').css({'background':'#494e7b','color':'#fbfbfb'});
	$('.city-content-d').css({'display':'block'});
	
	$('.city-content-hot').css({'display':'none'});
	$('.city-content-a').css({'display':'none'});
    $('.city-content-c').css({'display':'none'});
    $('.city-content-b').css({'display':'none'});
    $('.city-content-e').css({'display':'none'});
    $('.city-content-f').css({'display':'none'});

    $('.city_hot').css({'background':'#fff','color':'#424242'});
    $('.city_a').css({'background':'#fff','color':'#424242'});
    $('.city_c').css({'background':'#fff','color':'#424242'});
    $('.city_b').css({'background':'#fff','color':'#424242'});
    $('.city_e').css({'background':'#fff','color':'#424242'});
    $('.city_f').css({'background':'#fff','color':'#424242'});  

});
$('.city_e').on('mouseenter', function () {
	$('.city_e').css({'background':'#494e7b','color':'#fbfbfb'});
	$('.city-content-e').css({'display':'block'});
	
	$('.city-content-hot').css({'display':'none'});
	$('.city-content-a').css({'display':'none'});
    $('.city-content-c').css({'display':'none'});
    $('.city-content-d').css({'display':'none'});
    $('.city-content-b').css({'display':'none'});
    $('.city-content-f').css({'display':'none'});

    $('.city_hot').css({'background':'#fff','color':'#424242'});
    $('.city_a').css({'background':'#fff','color':'#424242'});
    $('.city_c').css({'background':'#fff','color':'#424242'});
    $('.city_d').css({'background':'#fff','color':'#424242'});
    $('.city_b').css({'background':'#fff','color':'#424242'});
    $('.city_f').css({'background':'#fff','color':'#424242'});  

});
$('.city_f').on('mouseenter', function () {
	$('.city_f').css({'background':'#494e7b','color':'#fbfbfb'});
	$('.city-content-f').css({'display':'block'});
	
	$('.city-content-hot').css({'display':'none'});
	$('.city-content-a').css({'display':'none'});
    $('.city-content-c').css({'display':'none'});
    $('.city-content-d').css({'display':'none'});
    $('.city-content-e').css({'display':'none'});
    $('.city-content-b').css({'display':'none'});

    $('.city_hot').css({'background':'#fff','color':'#424242'});
    $('.city_a').css({'background':'#fff','color':'#424242'});
    $('.city_c').css({'background':'#fff','color':'#424242'});
    $('.city_d').css({'background':'#fff','color':'#424242'});
    $('.city_e').css({'background':'#fff','color':'#424242'});
    $('.city_b').css({'background':'#fff','color':'#424242'});  

});


$('.city-select').on('mouseleave', ()=> {
	$('.city-select').css({'display':'none'});
})

}
export default city;