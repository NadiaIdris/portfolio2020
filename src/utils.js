// Access CSS variable from JS: https://stackoverflow.com/a/41725782
const getValueOfCSSVariable = (element, variableName) => {
  const computedStyle = getComputedStyle(element);
  const value = computedStyle.getPropertyValue(variableName);
  const parsedValue = parseInt(value);
  return parsedValue;
};

const dummyText = `Spicy jalapeno bacon ipsum dolor `.repeat(700);

/**
 * There are issues w/ `window.scrollTo()` in the way that it is implemented in different browsers. It makes firing
 * window.scroll events inconsistent across browsers.
 * https://stackoverflow.com/questions/37098306/this-site-appears-to-use-a-scroll-linked-positioning-effect-this-may-not-work
 */
const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Scrolled to top");
  }, 0);
};

// Open full viewport modal component.
const openModal = (imageId) => {
  const imageElement = document.querySelector(`#${imageId}`);
  const htmlElement = document.querySelector("html");
  imageElement.style.display = "block";
  htmlElement.style.height = "100%";
  htmlElement.style.overflow = "hidden";
};

// Close modal component.
const closeModal = (imageId) => {
  document.querySelector(`#${imageId}`).style.display = "none";
  document.querySelector("html").style.height = "auto";
  document.querySelector("html").style.overflow = "visible";
};

export { getValueOfCSSVariable, dummyText, scrollToTop, openModal, closeModal };
