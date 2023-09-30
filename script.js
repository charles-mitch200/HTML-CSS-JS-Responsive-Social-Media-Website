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
