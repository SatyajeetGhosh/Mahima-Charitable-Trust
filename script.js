// Making Navbar Responsive
$(document).ready(function(){
    $(".hamburger i").click(function(){
        $(this).toggleClass("fa-times");
        $(".nav-links").toggleClass("mobile-view");
    });
});

