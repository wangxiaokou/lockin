$(function(){
	$('.nav-box li').on('click', function(){
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.content-box').removeClass('active');
		$('.content-box').eq(index).addClass('active');
	})
})