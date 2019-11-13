$(document).ready(function(){
	$('a.tab-menu').click(function(){
		let idHref = $(this).attr('href');

		//atur class menu
		$('.tab-menu').removeClass('active');
		$(this).addClass('active');

		//atur content active
		$('.content').removeClass('page-active');
		$('.content' + idHref).addClass('page-active');
	});
});