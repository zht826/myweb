
/*skill面板显示-隐藏*/
$(document).ready(function() {
	var  a=1;
	$('.skill_detail_pic').click(function(){
		$(".skill_text").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().css('transform','rotate(0deg)');
			}
		});
		if($(this).next().next().is(':hidden')){
			$(this).next().next().slideDown(400);
			$(this).next().css('transform','rotate(180deg)');
		}else{
			$(this).next().next().slideUp(200);
			$(this).next().css('transform','rotate(0deg)');
		}
	});
});
/*demo图片切换*/
$(document).ready(function(){
	var index=2;
	$('.demo1').addClass('demo1_active');
	$('.demo2').addClass('demo2_active');
	$('.demo3').addClass('demo3_active');
	$('.btn_left').click(function(){
		if(index==2){
			$('.demo1').removeClass('demo1_active');
			$('.demo2').removeClass('demo2_active');
			$('.demo3').removeClass('demo3_active');

			$('.demo1').addClass('demo2_active');
			$('.demo2').addClass('demo3_active');
			$('.demo3').addClass('demo1_active');
			index--;
		}else if(index==1){
			$('.demo1').removeClass('demo2_active');
			$('.demo2').removeClass('demo3_active');
			$('.demo3').removeClass('demo1_active');

			$('.demo1').addClass('demo3_active');
			$('.demo2').addClass('demo1_active');
			$('.demo3').addClass('demo2_active');
			index--;
		}else if(index==0){
			$('.demo1').removeClass('demo3_active');
			$('.demo2').removeClass('demo1_active');
			$('.demo3').removeClass('demo2_active');

			$('.demo1').addClass('demo1_active');
			$('.demo2').addClass('demo2_active');
			$('.demo3').addClass('demo3_active');
			index=2;
		}
		
	});
	$('.btn_right').click(function(){
		if(index==2){
			$('.demo1').removeClass('demo1_active');
			$('.demo2').removeClass('demo2_active');
			$('.demo3').removeClass('demo3_active');

			$('.demo1').addClass('demo3_active');
			$('.demo2').addClass('demo1_active');
			$('.demo3').addClass('demo2_active');
			index=0;
		}else if(index==1){
			$('.demo1').removeClass('demo2_active');
			$('.demo2').removeClass('demo3_active');
			$('.demo3').removeClass('demo1_active');

			$('.demo1').addClass('demo1_active');
			$('.demo2').addClass('demo2_active');
			$('.demo3').addClass('demo3_active');
			index++;
		}else if(index==0){
			$('.demo1').removeClass('demo3_active');
			$('.demo2').removeClass('demo1_active');
			$('.demo3').removeClass('demo2_active');

			$('.demo1').addClass('demo2_active');
			$('.demo2').addClass('demo3_active');
			$('.demo3').addClass('demo1_active');
			index++;
		}
		
	});
	// $('.demo1_active').click(function(event){
	// 	$('this').removeClass('.demo1_active');
	// 	$('this').addClass('.demo3_active');
	// 	event.preventDefault();
	// });
});