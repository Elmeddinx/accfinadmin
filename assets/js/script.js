if (document.body.id == "login-page") {
  function togglePassword() {
    const passwordInput = document.getElementById("passwordInput");
    const passwordToggle = document.querySelector(".toggle-password img");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.src = "./assets/icons/eye.png";
    } else {
      passwordInput.type = "password";
      passwordToggle.src = "./assets/icons/eye-hide.png";
    }
  }
} else {
  var menuItems = document.querySelectorAll(".sidebar-menu__item");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var tabName = this.getAttribute("data-tab");
      openTab(tabName);
    });
  });

  var firstMenuItem = document.querySelector(".sidebar-menu__item");
  var defaultTab = firstMenuItem.getAttribute("data-tab");
  openTab(defaultTab);

  var submenuItems = document.querySelectorAll(".sidebar-submenu__item");

  submenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var parentInner = this.closest(".sidebar-submenu__inner");
      var siblingItems = parentInner.querySelectorAll(".sidebar-submenu__item");

      siblingItems.forEach(function (subItem) {
        subItem.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
  var hamburger = document.getElementById("hamburger");
  var sidebar = document.getElementById("sidebar");
  var sidebarClose = document.getElementById("sidebarClose");
  var profile = document.getElementById("profile");
  var profileDropdown = document.getElementById("profileDropdown");
  var addBtn = document.getElementById("addBtn");
  var modal = document.getElementById("modal");
  var modalInner = document.getElementById("modalInner");
  var modalClose = document.getElementById("modalClose");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });
  document.addEventListener("click", function (e) {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove("show");
    }
    if (!profile.contains(e.target) && !profileDropdown.contains(e.target)) {
      profileDropdown.classList.remove("show");
    }
    if (!modalInner.contains(e.target) && !addBtn.contains(e.target)) {
      modal.classList.remove("show");
    }
  });
  sidebarClose.addEventListener("click", function () {
    sidebar.classList.remove("show");
  });
  profile.addEventListener("click", function () {
    profileDropdown.classList.toggle("show");
  });
  function openTab(tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("sidebar-submenu__content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("sidebar-menu__item");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    document.querySelector(`[data-tab="${tabName}"]`).className += " active";
  }
  var swiper = new Swiper(".employeesSwiper", {
    slidesPerView: 12,
    spaceBetween: 16,
    breakpoints: {
      320: {
        slidesPerView: 2.5,
      },
      400: {
        slidesPerView: 3.8,
      },
      500: {
        slidesPerView: 5,
      },
      650: {
        slidesPerView: 7,
      },
      800: {
        slidesPerView: 8,
      },
      1000: {
        slidesPerView: 10,
      },
      1440: {
        slidesPerView: 12,
      },
    },
  });
}

if (document.getElementById("select-all")) {
  document.getElementById("select-all").addEventListener("change", function (e) {
    const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]:not(.switch-checkbox)');
    checkboxes.forEach((checkbox) => (checkbox.checked = e.target.checked));
  });
}

if (addBtn) {
  addBtn.addEventListener("click", function (e) {
    modal.classList.add("show");
  });
  modalClose.addEventListener("click", function (e) {
    modal.classList.remove("show");
  });

}

