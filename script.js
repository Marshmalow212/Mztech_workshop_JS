var portfolio_link = document.getElementsByClassName("navbar-brand");

var home_lnk = document.getElementById("home_li");

$(portfolio_link).on('click', function(){
    $('li').removeClass('active');
    $(home_lnk).toggleClass('active');
});


$('li').on('click', function(){
    $('li').removeClass('active');
    $(this).toggleClass('active');
});


var search_btn = document.getElementById("ssbtn");

$(search_btn).on('click',function(){
    var search_bar_text = document.getElementById("sbar").value;
    console.log(search_bar_text);
    $(document.getElementById("sbar").value=null);
});

var navtoggler = document.getElementsByClassName("navbar-toggler");

$(navtoggler).on('click',function(){
    $(document.getElementById("navbarCollapse")).toggleClass('collapse'); 
    $(document.getElementsByClassName("nav-item")).on('click',function(){
        $(document.getElementById("navbarCollapse")).toggleClass('collapse');
    });
});