$(function () {
    $('.content-page').hide();

    $('.sidenav').on('click', 'a', function () {
        $('.content-page').hide()
        var target = $(this).attr('href');
        $(target).show();
    });
});

$('.sidenav, a').click(function() {
    $('.content-page').hide()
    var target = $(this).attr('href');
    $('.#' + target).show();
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
    $("#menuicon").empty();
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $("#menuicon").append("<span onclick='openNav()'><img class='menu-icon' src= '../images/menu-icon.png'/></span>");
}
