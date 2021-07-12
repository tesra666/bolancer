// $(document).ready(function(){
   // $("#header").load("component/header.html");
   // $('.footer').load('component/footer.html');
// });
$(function(){
	$(window).scroll(function() {
		let height =$(window).scrollTop();
		if(height > 300){
			$('.go-header').css({"display":"inline-block"});
		} else {
			$('.go-header').css({"display":"none"});
		}
	})
	$('.go-header').on('click',function(){
		console.log(1)
		$('body,html').animate({scrollTop:0},500);
	})
	
	$('.panel-more').on('click',function(){
		$(this).next().toggle(500)
		if(!$(this).find('i').hasClass("down")){
			 $(this).find('i').removeClass('gengduo');
			$(this).find('i').addClass('down');
			$(this).parent().addClass('panel-list-bg');
			$(this).prev().addClass('tit');
		} else if(!$(this).find('i').hasClass("gengduo")){
			 $(this).find('i').removeClass('down');
			$(this).find('i').addClass('genduo')
			$(this).prev().removeClass('tit');
			$(this).parent().removeClass('panel-list-bg');
		}
		// $(this).find('i').addClass('down')
	})
	
	$('.nav-list>li').hover(function() {
		$(this).children('.pull-down').toggle(200)
	})
	$('.faq-list ul li').on('click',function(){
		let str = $(this).find('div.faq-list-text h3').html();
		$('.panel-tittle h3').html(str+'问题')
		// console.log(str);
	})
})