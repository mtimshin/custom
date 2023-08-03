// // TABS

// window.addEventListener("load", function (event) {
//   // here

//   const tabsItems = document.querySelectorAll(".tabs__item");
//   const calculatorTabsItems = document.querySelectorAll(".calculator-tabs__item");
//   const categoriesTabsItems = document.querySelectorAll(".categories-tabs__item");

//   if (tabsItems) {
//     tabsItems.forEach((item) => {
//       item.addEventListener("click", () => {
//         const tabsParent = item.closest(".tabs");

//         tabsParent.querySelectorAll(".tabs__item").forEach((child) => child.classList.remove("tabs__item--active"));
//         tabsParent.querySelectorAll(".tabs__content").forEach((child) => child.classList.remove("tabs__content--active"));

//         item.classList.add("tabs__item--active");
//         tabsParent.querySelectorAll(".tabs__item").forEach((item, i) => {
//           if (item.classList.contains("tabs__item--active")) {
//             tabsParent.querySelectorAll(".tabs__content")[i].classList.add("tabs__content--active");
//           }
//         });
//       });
//     });
//   }

//   if (calculatorTabsItems) {
//     calculatorTabsItems.forEach((item, i) => {
//       item.addEventListener("click", () => {
//         document.querySelectorAll(".calculator-tabs__item").forEach((child) => child.classList.remove("calculator-tabs__item--active"));
//         document.querySelectorAll(".calculator-tabs__content").forEach((child) => child.classList.remove("calculator-tabs__content--active"));

//         item.classList.add("calculator-tabs__item--active");
//         document.querySelectorAll(".calculator-tabs__content")[i].classList.add("calculator-tabs__content--active");
//       });
//     });
//   }

//   if (categoriesTabsItems) {
//     categoriesTabsItems.forEach((item) => {
//       item.addEventListener("click", () => {
//         const categoriesTabsParent = item.closest(".categories-tabs__wrapper");

//         categoriesTabsParent.querySelectorAll(".categories-tabs__item").forEach((child) => child.classList.remove("categories-tabs__item--active"));
//         categoriesTabsParent.querySelectorAll(".categories-tabs__content").forEach((child) => child.classList.remove("categories-tabs__content--active"));

//         item.classList.add("categories-tabs__item--active");
//         categoriesTabsParent.querySelectorAll(".categories-tabs__item").forEach((item, i) => {
//           if (item.classList.contains("categories-tabs__item--active")) {
//             categoriesTabsParent.querySelectorAll(".categories-tabs__content")[i].classList.add("categories-tabs__content--active");
//           }
//         });
//       });
//     });
//   }
// });

// function openTab(evt, tabName) {
//   let i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].classList.remove("active");
//   }
//   tablinks = document.querySelectorAll(".tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].classList.remove("active");
//   }
//   document.getElementById(tabName).classList.add("active");
//   evt.currentTarget.classList.add("active");
// }

// function openTab2(evt, tabName) {
//   let i, tabcontent2, tablinks2;
//   tabcontent2 = document.getElementsByClassName("tabcontent2");
//   for (i = 0; i < tabcontent2.length; i++) {
//     tabcontent2[i].classList.remove("active");
//   }
//   tablinks2 = document.querySelectorAll(".tablinks2");
//   for (i = 0; i < tablinks2.length; i++) {
//     tablinks2[i].classList.remove("active");
//   }
//   document.getElementById(tabName).classList.add("active");
//   evt.currentTarget.classList.add("active");
// }

// function openTab4(evt, tabName) {
//   let i, tabcontent2_1, tablinks2;
//   tabcontent2_1 = document.getElementsByClassName("tabcontent2_1");
//   for (i = 0; i < tabcontent2_1.length; i++) {
//     tabcontent2_1[i].classList.remove("active");
//   }
//   tablinks2 = document.querySelectorAll(".tablinks2");
//   for (i = 0; i < tablinks2.length; i++) {
//     tablinks2[i].classList.remove("active");
//   }
//   document.getElementById(tabName).classList.add("active");
//   evt.currentTarget.classList.add("active");
// }

// function openTab3(evt, tabName) {
//   let i, tabcontent3, tablinks3;
//   tabcontent3 = document.getElementsByClassName("tabcontent3");
//   for (i = 0; i < tabcontent3.length; i++) {
//     tabcontent3[i].classList.remove("active");
//   }
//   tablinks3 = document.querySelectorAll(".tablinks3");
//   for (i = 0; i < tablinks3.length; i++) {
//     tablinks3[i].classList.remove("active");
//   }
//   document.getElementById(tabName).classList.add("active");
//   evt.currentTarget.classList.add("active");
// }

// let navLinks = document.querySelectorAll(".nav-link");

// navLinks.forEach(function (link) {
//   link.addEventListener("click", function () {
//     navLinks.forEach(function (link) {
//       link.classList.remove("active");
//     });
//     this.classList.add("active");
//   });
// });

// // Wait for the DOM to be ready
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the navigation element
//   let nav = document.querySelector(".sticky-nav");

//   // Get all the links in the navigation
//   let links = nav.querySelectorAll("a");

//   // Get all the sections on the page
//   let sections = document.querySelectorAll(".tabSection");

//   // Create an array to store the offsets of each section
//   let sectionOffsets = [];

//   // Loop through each section and store its offset from the top of the page
//   sections.forEach(function (section) {
//     sectionOffsets.push(section.offsetTop);
//   });

//   // Add an event listener to the window object for scroll events
//   window.addEventListener("scroll", function () {
//     // If the user has scrolled past the top of the navigation, show it
//     if (window.scrollY > 1200) {
//       nav.style.display = "block";
//     } else {
//       nav.style.display = "none";
//     }

//     // Loop through each section offset and check if the user has scrolled past it
//     for (let i = 0; i < sectionOffsets.length; i++) {
//       if (window.scrollY >= sectionOffsets[i] - 100) {
//         // Remove the active class from all links
//         links.forEach(function (link, linkIndex) {
//           if (linkIndex!==i) {
//             link.classList.remove("active");
//           }
//         });

//         // Add the active class to the link corresponding to the current section
//         links[i].classList.add("active");
//       }
//     }
//   });
// });

// // Wait for the DOM to be ready
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the navigation element
//   let nav = document.querySelector(".sticky-nav-compare");

//   // Get all the links in the navigation
//   let links = nav.querySelectorAll("a");

//   // Get all the sections on the page
//   let sections = document.querySelectorAll(".tabSection");

//   // Create an array to store the offsets of each section
//   let sectionOffsets = [];

//   // Loop through each section and store its offset from the top of the page
//   sections.forEach(function (section) {
//     sectionOffsets.push(section.offsetTop);
//   });

//   // Add an event listener to the window object for scroll events
//   window.addEventListener("scroll", function () {
//     // If the user has scrolled past the top of the navigation, show it
//     if (window.scrollY > 650) {
//       nav.style.display = "block";
//     } else {
//       nav.style.display = "none";
//     }

//     // Loop through each section offset and check if the user has scrolled past it
//     for (let i = 0; i < sectionOffsets.length; i++) {
//       if (window.scrollY >= sectionOffsets[i] - 100) {
//         // Remove the active class from all links
//         links.forEach(function (link, linkIndex) {
//           if (linkIndex!==i) {
//             link.classList.remove("active");
//           }
//         });

//         // Add the active class to the link corresponding to the current section
//         links[i].classList.add("active");
//       }
//     }
//   });
// });

// window.addEventListener("DOMContentLoaded", function () {
//   // Get the navigation element
//   let nav = document.querySelector("nav");

//   // Get all the links inside the navigation
//   let links = nav.querySelectorAll("a");

//   // Get the offset of each section and store them in an array
//   let sectionOffsets = [];
//   let sections = document.querySelectorAll("section");
//   sections.forEach(function (section) {
//     sectionOffsets.push(section.offsetTop);
//   });
// });

// const linksFirst = document.querySelectorAll(".links-first>li>a");
// linksFirst.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     let ID = link.getAttribute("href").substr(1);

//     let element = document.getElementById(ID);

//     let elementPosition = element.getBoundingClientRect().top;

//     let offsetPosition = elementPosition + window.pageYOffset - 90;

//     window.scrollTo({
//       top: offsetPosition,
//       behavior: "smooth",
//     });
//   });
// });

// const linksSecond = document.querySelectorAll(".links-second>li>a");
// linksSecond.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     let ID = link.getAttribute("href").substr(1);

//     let element = document.getElementById(ID);

//     let elementPosition = element.getBoundingClientRect().top;

//     let offsetPosition = elementPosition + window.pageYOffset - 90;

//     window.scrollTo({
//       top: offsetPosition,
//       behavior: "smooth",
//     });
//   });
// });
// // Get the "back to top" button element
// let backToTopBtn = document.querySelector(".up");

// // Add an event listener to the button for click events
// backToTopBtn.addEventListener("click", function () {
//   // Scroll to the top of the page with a smooth animation
//   window.scrollTo({
//     top: 200,
//     behavior: "smooth",
//   });
// });


// TABS

window.addEventListener("load", function (event) {
  // here

  const tabsItems = document.querySelectorAll(".tabs__item");
  const calculatorTabsItems = document.querySelectorAll(".calculator-tabs__item");
  const categoriesTabsItems = document.querySelectorAll(".categories-tabs__item");

  if (tabsItems) {
    tabsItems.forEach((item) => {
      item.addEventListener("click", () => {
        const tabsParent = item.closest(".tabs");

        tabsParent.querySelectorAll(".tabs__item").forEach((child) => child.classList.remove("tabs__item--active"));
        tabsParent.querySelectorAll(".tabs__content").forEach((child) => child.classList.remove("tabs__content--active"));

        item.classList.add("tabs__item--active");
        tabsParent.querySelectorAll(".tabs__item").forEach((item, i) => {
          if (item.classList.contains("tabs__item--active")) {
            tabsParent.querySelectorAll(".tabs__content")[i].classList.add("tabs__content--active");
          }
        });
      });
    });
  }

  if (calculatorTabsItems) {
    calculatorTabsItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        document.querySelectorAll(".calculator-tabs__item").forEach((child) => child.classList.remove("calculator-tabs__item--active"));
        document.querySelectorAll(".calculator-tabs__content").forEach((child) => child.classList.remove("calculator-tabs__content--active"));

        item.classList.add("calculator-tabs__item--active");
        document.querySelectorAll(".calculator-tabs__content")[i].classList.add("calculator-tabs__content--active");
      });
    });
  }

  if (categoriesTabsItems) {
    categoriesTabsItems.forEach((item) => {
      item.addEventListener("click", () => {
        const categoriesTabsParent = item.closest(".categories-tabs__wrapper");

        categoriesTabsParent.querySelectorAll(".categories-tabs__item").forEach((child) => child.classList.remove("categories-tabs__item--active"));
        categoriesTabsParent.querySelectorAll(".categories-tabs__content").forEach((child) => child.classList.remove("categories-tabs__content--active"));

        item.classList.add("categories-tabs__item--active");
        categoriesTabsParent.querySelectorAll(".categories-tabs__item").forEach((item, i) => {
          if (item.classList.contains("categories-tabs__item--active")) {
            categoriesTabsParent.querySelectorAll(".categories-tabs__content")[i].classList.add("categories-tabs__content--active");
          }
        });
      });
    });
  }
});

var initSlider = [];
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  if (!initSlider[tabName]){
    initSlider[tabName] = true;
    var $slider = jQuery('#' + tabName).find('.slick-slider');
    if(parseFloat($slider.find('.slick-track').css('width')) === 0) {
      $slider.slick('refresh');
    }
  }
  evt.currentTarget.classList.add("active");
}

function openTab2(evt, tabName) {
  let i, tabcontent2, tablinks2;
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].classList.remove("active");
  }
  tablinks2 = document.querySelectorAll(".tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].classList.remove("active");
  }
  if (!initSlider[tabName]){
    initSlider[tabName] = true;
    var $slider = jQuery('#' + tabName).find('.slick-slider');
    if(parseFloat($slider.find('.slick-track').css('width')) === 0) {
      $slider.slick('refresh');
    }
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

function openTab4(evt, tabName) {
  let i, tabcontent2_1, tablinks2;
  tabcontent2_1 = document.getElementsByClassName("tabcontent2_1");
  for (i = 0; i < tabcontent2_1.length; i++) {
    tabcontent2_1[i].classList.remove("active");
  }
  tablinks2 = document.querySelectorAll(".tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].classList.remove("active");
  }
  if (!initSlider[tabName]){
    initSlider[tabName] = true;
    var $slider = jQuery('#' + tabName).find('.slick-slider');
    if(parseFloat($slider.find('.slick-track').css('width')) === 0) {
      $slider.slick('refresh');
    }
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

function openTab3(evt, tabName) {
  let i, tabcontent3, tablinks3;
  tabcontent3 = document.getElementsByClassName("tabcontent3");
  for (i = 0; i < tabcontent3.length; i++) {
    tabcontent3[i].classList.remove("active");
  }
  tablinks3 = document.querySelectorAll(".tablinks3");
  for (i = 0; i < tablinks3.length; i++) {
    tablinks3[i].classList.remove("active");
  }
  if (!initSlider[tabName]){
    initSlider[tabName] = true;
    var $slider = jQuery('#' + tabName).find('.slick-slider');
    if(parseFloat($slider.find('.slick-track').css('width')) === 0) {
      $slider.slick('refresh');
    }
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Get the navigation element
  let nav = document.querySelector(".sticky-nav");

  // Get all the links in the navigation
  let links = nav.querySelectorAll("a");

  // Get all the sections on the page
  let sections = document.querySelectorAll(".tabSection");

  // Create an array to store the offsets of each section
  let sectionOffsets = [];

  // Loop through each section and store its offset from the top of the page
  sections.forEach(function (section) {
    sectionOffsets.push(section.offsetTop);
  });

  // Add an event listener to the window object for scroll events
  window.addEventListener("scroll", function () {
    // If the user has scrolled past the top of the navigation, show it
    if (window.scrollY > 1200) {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }

    // Loop through each section offset and check if the user has scrolled past it
    for (let i = 0; i < sectionOffsets.length; i++) {
      if (window.scrollY >= sectionOffsets[i] - 100) {
        // Remove the active class from all links
        links.forEach(function (link, linkIndex) {
          if (linkIndex!==i) {
            link.classList.remove("active");
          }
        });

        // Add the active class to the link corresponding to the current section
        links[i].classList.add("active");
      }
    }
  });
});

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Get the navigation element
  let nav = document.querySelector(".sticky-nav-compare");

  // Get all the links in the navigation
  let links = nav?nav.querySelectorAll("a"):null;

  // Get all the sections on the page
  let sections = document.querySelectorAll(".tabSection");

  // Create an array to store the offsets of each section
  let sectionOffsets = [];

  // Loop through each section and store its offset from the top of the page
  sections.forEach(function (section) {
    sectionOffsets.push(section.offsetTop);
  });

  // Add an event listener to the window object for scroll events
  window.addEventListener("scroll", function () {
    // If the user has scrolled past the top of the navigation, show it
    if (nav){
      if (window.scrollY > 650) {
        // nav.style.display = "block";
        nav.style.top = 0;
      } else {
        // nav.style.display = "none";
        nav.style.top = '-200px';
      }
    }

    // Loop through each section offset and check if the user has scrolled past it
    for (let i = 0; i < sectionOffsets.length; i++) {
      if (window.scrollY >= sectionOffsets[i] - 100) {
        // Remove the active class from all links
        links.forEach(function (link, linkIndex) {
          if (linkIndex!==i) {
            link.classList.remove("active");
          }
        });

        // Add the active class to the link corresponding to the current section
        links[i].classList.add("active");
      }
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  // Get the navigation element
  let nav = document.querySelector("nav");

  // Get all the links inside the navigation
  let links = nav.querySelectorAll("a");

  // Get the offset of each section and store them in an array
  let sectionOffsets = [];
  let sections = document.querySelectorAll("section");
  sections.forEach(function (section) {
    sectionOffsets.push(section.offsetTop);
  });
});

const linksFirst = document.querySelectorAll(".links-first>li>a");
linksFirst.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let ID = link.getAttribute("href").substr(1);

    let element = document.getElementById(ID);

    let elementPosition = element.getBoundingClientRect().top;

    let offsetPosition = elementPosition + window.pageYOffset - 90;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

const linksSecond = document.querySelectorAll(".links-second>li>a");
linksSecond.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let ID = link.getAttribute("href").substr(1);

    let element = document.getElementById(ID);

    let elementPosition = element.getBoundingClientRect().top;

    let offsetPosition = elementPosition + window.pageYOffset - 90;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
// Get the "back to top" button element
let backToTopBtn = document.querySelector(".up");

// Add an event listener to the button for click events
backToTopBtn.addEventListener("click", function () {
  // Scroll to the top of the page with a smooth animation
  window.scrollTo({
    top: 200,
    behavior: "smooth",
  });
});
