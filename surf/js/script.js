	$(function(){
				$('a[data-target^="anchor"]').bind('click.smoothscroll',function()
				{
					var target = $(this).attr('href'),
					bl_top = $(target).offset().top;
					$('body, html').scrollTop(bl_top);
					return false;
				})
			});