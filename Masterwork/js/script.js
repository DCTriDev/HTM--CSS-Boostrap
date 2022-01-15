window.onscroll = function () {
  scrollFunction();
};
let header_fix = document.querySelector("header");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header_fix.classList.add("nav-fix");
  } else {
    header_fix.classList.remove("nav-fix");
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

document.querySelector("#back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

let btn_dark_mode = document.querySelector("#btn-dark-mode");

btn_dark_mode.addEventListener("click", function () {
  //switch icon
  btn_dark_mode.classList.toggle("dark-mode-active");

  //Background when dark mode active
  if (btn_dark_mode.classList.contains("dark-mode-active")) {
    document.documentElement.style.setProperty("--bg-color", "#131313");
    document.documentElement.style.setProperty("--primary", "#fffffe");
    document.documentElement.style.setProperty("--title-color", "#94a1b2");
    document.documentElement.style.setProperty("--card-background", "#242629");
    document.documentElement.style.setProperty("--testi-color", "#242629");
    document.documentElement.style.setProperty("--text-color", "#94a1b2");
    document.documentElement.style.setProperty("--light-bg-color", "#232946");
    document.documentElement.style.setProperty("--box-shadow-color", "#625461");
  }

  //Background when light mode active
  else {
    document.documentElement.style.setProperty("--bg-color", "#FBFCFD");
    document.documentElement.style.setProperty("--primary", "#DC4F72");
    document.documentElement.style.setProperty("--title-color", "#2C3038");
    document.documentElement.style.setProperty("--text-color", "#5A5A5A");
    document.documentElement.style.setProperty("--card-background", "#fff");
    document.documentElement.style.setProperty("--testi-color", "#5a5a5a");
    document.documentElement.style.setProperty("--light-bg-color", "#F7F9FC");
    document.documentElement.style.setProperty(
      "--box-shadow-color",
      "rgba(0, 0, 0, 0.05)"
    );
  }
});
