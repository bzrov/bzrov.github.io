$('.menu-ham').click(function () {
    $('.menu').animate({right: '0px'}, 100)
});
$('.close-menu').click(function () {
    $('.menu').animate({right: '-280px'}, 100)
});
$(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll',function()
	{
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	})
});