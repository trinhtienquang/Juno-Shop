function handleHover(targetElement, showClass, hideClass) {
  console.log('handleHover called');
  const parentElement = targetElement.parentElement;
  const showElements = parentElement.querySelectorAll(`.${showClass}`);
  const hideElements = parentElement.querySelectorAll(`.${hideClass}`);

  showElements.forEach((element) => {
    element.style.display = 'block';
  });

  hideElements.forEach((element) => {
    element.style.display = 'none';
  });
  targetElement.removeEventListener('mouseenter', handleHoverOnce);
}
function handleHoverOnce(event) {
  handleHover(event.currentTarget, 'product-item-show', 'product-item-hidden');
}

document.addEventListener('DOMContentLoaded', function () {
  const liElements = document.querySelectorAll('.product-item-show');

  liElements.forEach((liElement) => {
    liElement.addEventListener('mouseenter', handleHoverOnce);
  });
});

function setupColorChange(classOrId, containerId) {
  var containers = document.querySelectorAll(
    `${classOrId}${containerId} .product-item`,
  );

  containers.forEach(function (container) {
    var colorsList = container.querySelectorAll(
      '.product-item-choose-color li img',
    );
    var sizesList = container.querySelectorAll(
      '.product-item-choose-size li p',
    );

    colorsList.forEach(function (color) {
      color.addEventListener('mouseover', function () {
        var mainImg = container.querySelector('.product-item-top a img');
        mainImg.src = this.alt;

        // Thêm class "active" cho tất cả các tùy chọn màu
        for (var j = 0; j < colorsList.length; j++) {
          colorsList[j].classList.remove('active-color');
        }
        // Thêm class "active" cho tùy chọn màu đang được di chuột qua
        this.classList.add('active-color');
      });
    });

    sizesList.forEach(function (size) {
      size.addEventListener('mouseover', function () {
        // Thêm class "active" cho tất cả các tùy chọn màu
        for (var i = 0; i < sizesList.length; i++) {
          sizesList[i].classList.remove('active-size');
        }
        // Thêm class "active" cho tùy chọn màu đang được di chuột qua
        this.classList.add('active-size');
      });
    });
  });
}

setupColorChange('#', 'new-products');
setupColorChange('.', 'recommend');
setupColorChange('#', 'all-product');

//tro ve dau trang
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('#backtop').fadeIn();
    } else {
      $('#backtop').fadeOut();
    }
  });
  $('#backtop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 100);
  });
});

//sticky navbar
$(document).ready(function () {
  var header = $('#header');
  var threshold = 100;

  function handleScroll() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > threshold) {
      header.addClass('fade-in-down');
    } else {
      header.removeClass('fade-in-down');
    }
  }

  $(window).scroll(handleScroll);
});

//change nav-tabs
$(document).ready(function () {
  function initializeTabs(containerSelector) {
    $(`${containerSelector} .tab-content-item`).hide();
    $(`${containerSelector} .tab-content-item:first-child`).fadeIn();
    $(`${containerSelector} .nav-tabs li`).click(function () {
      // Active nav tabs
      $(`${containerSelector} .nav-tabs li`).removeClass('active');
      $(this).addClass('active');

      // Show tab-content item
      let id_tab_content = $(this).children('a').attr('href');
      $(`${containerSelector} .tab-content-item`).hide();
      $(id_tab_content).fadeIn();
      return false;
    });
  }

  initializeTabs('#product-detail-main');
  initializeTabs('#product-tab-bot');
});
