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
}

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
var mainArea = document.getElementById("main");
hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("show");
  mainArea.style.width = window.innerWidth - 280 + "px";
  if (!sidebar.classList.contains("show")) {
    mainArea.style.width = "";
  }
});
document.addEventListener("click", function (e) {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove("show");
    mainArea.style.width = "";
  }
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
