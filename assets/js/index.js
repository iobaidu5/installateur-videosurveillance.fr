$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});

const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("navbar-active");
  } else {
    nav.classList.remove("navbar-active");
  }
}

$(".tab1").click(function () {
  $(".content1").show('slow');
});

$(".tab2").click(function () {
  $(".content2").show('slow');
});

$(".tab3").click(function () {
$(".content3").show('slow');
});

$(".tab4").click(function () {
$(".content4").show('slow');
});

$(".tab5").click(function () {
$(".content5").show('slow');
});



function openCity(evt, cityName, imageId) {
    var i, tabcontent, tablinks, tabimage;
    tabcontent = document.getElementsByClassName("tabcontent");
    tabimage = document.getElementsByClassName("tabimage");
    
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabimage[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    document.getElementById(imageId).style.display = "block";
    evt.currentTarget.className += " active";
  }


  function openGallery(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabimage[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  function openDrop(event) {
    event.preventDefault();
    console.log("menu open")
    var drop = document.getElementById("filter_list");
    drop.style.display = "block";
}