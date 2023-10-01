// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");

// MESSAGES
const messageNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const searchMessage = document.querySelector("#js-message-search");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalettes = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// SIDEBAR
// remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id !== "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      // Hide the notification count
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// MESSAGES
// Search chats
const filterMessages = () => {
  const inputValue = searchMessage.value.toLowerCase();
  message.forEach((msg) => {
    let name = msg.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(inputValue) !== -1) {
      msg.style.display = "flex";
    } else {
      msg.style.display = "none";
    }
  });
};

searchMessage.addEventListener("keyup", filterMessages);

//  Highlight message card when messages menu item is clicked
messageNotification.addEventListener("click", () => {
  // Add box shadow to the message box
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  // Remove the messages count
  messageNotification.querySelector(".notification-count").style.display =
    "none";

  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// THEME CUSTOMIZATION
//  opens theme modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

//  closes theme modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

// FONTS
// Remove active class from the span
const removeActiveClass = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeActiveClass();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    //    change fontsize of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// remove active color when clicked
const removeActiveColor = () => {
  colorPalettes.forEach((color) => {
    color.classList.remove("active");
  });
};

// COLOR PICKER
colorPalettes.forEach((picker) => {
  picker.addEventListener("click", () => {
    let primaryHue;
    removeActiveColor();

    primaryHue = picker.classList.contains("color-1")
      ? 252
      : picker.classList.contains("color-2")
      ? 52
      : picker.classList.contains("color-3")
      ? 352
      : picker.classList.contains("color-4")
      ? 152
      : 202;

    picker.classList.add("active");

    //   Update the hue of the primary color
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// theme background colors
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Function to change background
const changeBG = () => {
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

// Function to remove active class
const removeActiveBg = () => {
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  bg3.classList.remove("active");
};

bg1.addEventListener("click", () => {
  // remove active class from all others
  removeActiveBg();
  // add active class
  bg1.classList.add("active");

  // remove customized changes from local storage
  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // remove active class from all others
  removeActiveBg();

  // add active class
  bg2.classList.add("active");
  changeBG();
});

bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  // remove active class from all others
  removeActiveBg();

  // add active class
  bg3.classList.add("active");

  changeBG();
});
