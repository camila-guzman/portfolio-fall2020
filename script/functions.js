// toggle display for mobile nav bar content
$(document).ready(function () {
  $("#toggle-nav").click(function () {
    $(".nav-content").toggle();
  });
});

// toggle display for each sections
$(document).ready(function () {
  $("nav a").click(function () {
    // grab clicked anchor's href
    var selectedSection = $(this).attr("href");
    // grab sections that are currently visible
    var visibleSection = $(".section:visible");

    // show the selected section
    $(selectedSection).toggle();

    // hide the previous section
    $(visibleSection).toggle();
  });
});
