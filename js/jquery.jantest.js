/**
 * Self evaluating script
 * @return {none}
 */
$(function(){

	var seconds = 10;

	function countDown() {

		if( seconds > 0 ) {
			setTimeout(function(){
				seconds--;
				$('.countdown').html(seconds);
				countDown();
			}, 1000);
		}

	}

	countDown();

});