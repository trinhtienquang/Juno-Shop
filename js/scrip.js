function handleHover(targetElement, showClass, hideClass) {
  console.log("handleHover called");
  const parentElement = targetElement.parentElement;
  const showElements = parentElement.querySelectorAll(`.${showClass}`);
  const hideElements = parentElement.querySelectorAll(`.${hideClass}`);

  showElements.forEach((element) => {
    element.style.display = "block";
  });

  hideElements.forEach((element) => {
    element.style.display = "none";
  });
  targetElement.removeEventListener("mouseenter", handleHoverOnce);
}
function handleHoverOnce(event) {
  handleHover(event.currentTarget, "product-item-show", "product-item-hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const liElements = document.querySelectorAll(".product-item-show");

  liElements.forEach((liElement) => {
    liElement.addEventListener("mouseenter", handleHoverOnce);
  });
});

function setupColorChange(containerId) {
  var containers = document.querySelectorAll(`#${containerId} .product-item`);

  containers.forEach(function (container) {
    var colorsList = container.querySelectorAll(
      ".product-item-choose-color li img"
    );
    var sizesList = container.querySelectorAll(
      ".product-item-choose-size li p"
    );

    colorsList.forEach(function (color) {
      color.addEventListener("mouseover", function () {
        var mainImg = container.querySelector(".product-item-top a img");
        mainImg.src = this.alt;

        // Thêm class "active" cho tất cả các tùy chọn màu
        for (var j = 0; j < colorsList.length; j++) {
          colorsList[j].classList.remove("active-color");
        }
        // Thêm class "active" cho tùy chọn màu đang được di chuột qua
        this.classList.add("active-color");
      });
    });

    sizesList.forEach(function (size) {
      size.addEventListener("mouseover", function () {
        // Thêm class "active" cho tất cả các tùy chọn màu
        for (var i = 0; i < sizesList.length; i++) {
          sizesList[i].classList.remove("active-size");
        }
        // Thêm class "active" cho tùy chọn màu đang được di chuột qua
        this.classList.add("active-size");
      });
    });
  });
}

setupColorChange("new-products");
setupColorChange("recommend");
setupColorChange("all-product");

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
