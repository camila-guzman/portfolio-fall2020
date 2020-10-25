// toggle display nav bar
$(document).ready(function () {
  $(".toggle-nav").click(function () {
    $(".nav-content").toggle();
  });
});

$(document).ready(function () {
  $(".nav-bar a").click(function () {
    var selectedPage = $(this).attr("href");
    $(selectedPage).toggle();
  });
});
