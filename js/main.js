import replaceTextModule from "./modules/replaceTextModule.js";
import aosModule from "./modules/aosModule.js";
import menuModule from "./modules/menuModule.js";
import selectDropdownModule from "./modules/selectDropdownModule.js";
import smoothScroll from "./modules/smoothScroll.js";
import swiperModule from "./modules/swiperModule.js";
import countUpModule from "./modules/countUpModule.js";
import searchModule from "./modules/searchModule.js";
import tablistModule from "./modules/tablistModule.js";
import scrollAddClassModule from "./modules/scrollAddClassModule.js";
import lightGalleryModule from "./modules/lightGalleryModule.js";
import magnificModule from "./modules/magnificModule.js";
import popupContactModule from "./modules/popupContactModule.js";

window.addEventListener("DOMContentLoaded", () => {
  replaceTextModule();
  aosModule();
  menuModule();
  selectDropdownModule();
  smoothScroll();
  swiperModule();
  countUpModule();
  searchModule();
  tablistModule();
  scrollAddClassModule();
  lightGalleryModule();
  magnificModule();
  popupContactModule();
});
