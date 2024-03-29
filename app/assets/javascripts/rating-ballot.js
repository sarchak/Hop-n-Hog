
$(document).ready(function () {
	$('input:submit').hide();
    var checkedId = $('form.rating_ballot > input:checked').attr('id');
    $('form.rating_ballot > label[for=' + checkedId + ']').prevAll().andSelf().addClass('bright');
});

$(document).ready(function() {
    // Makes stars glow on hover.
    $('form.rating_ballot > label').hover(
        function() {    // mouseover

            $(this).prevAll().andSelf().addClass('glow');
        },function() {  // mouseout
		
            $(this).siblings().andSelf().removeClass('glow');
    });

    // Makes stars stay glowing after click.
    $('form.rating_ballot > label').click(function() {
		
        $(this).siblings().removeClass("bright");
        $(this).prevAll().andSelf().addClass("bright");
    });

    // Submits the form (saves data) after user makes a change.
    $('form.rating_ballot').change(function() {
        $('form.rating_ballot').submit();
    });
});
