$('li').on('click', function(){
    $('li').removeclass('active'),
    $(this).toggleclass('active')
})