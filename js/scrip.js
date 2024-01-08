function handleHover(showClass, hideClass) {
  const showElements = document.querySelectorAll(`.${showClass}`);
  const hideElements = document.querySelectorAll(`.${hideClass}`);

  showElements.forEach((element) => {
    element.style.display = "block";
  });

  hideElements.forEach((element) => {
    element.style.display = "none";
  });
}

function setupColorChange(containerId) {
  var containers = document.querySelectorAll(`#${containerId} .product-item`);

  containers.forEach(function (container) {
    var colorsList = container.querySelectorAll(
      ".product-item-choose-color li img"
    );

    colorsList.forEach(function (color) {
      color.addEventListener("mouseover", function () {
        var mainImg = container.querySelector(".product-item-top a img");
        mainImg.src = this.alt;

        // Thêm class "active" cho tất cả các tùy chọn màu
        for (var j = 0; j < colorsList.length; j++) {
          colorsList[j].classList.remove("active");
        }

        // Thêm class "active" cho tùy chọn màu đang được di chuột qua
        this.classList.add("active");
      });
    });
  });
}

setupColorChange("new-products");
setupColorChange("recommend");

$(".center").slick({
  centerMode: true,
  dots: true,
  centerPadding: "200px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

$(".slider-responsive").slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#backtop").fadeIn();
    } else {
      $("#backtop").fadeOut();
    }
  });
  $("#backtop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 100);
  });
});
