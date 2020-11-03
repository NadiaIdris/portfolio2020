// Access CSS variable from JS: https://stackoverflow.com/a/41725782
const getValueOfCSSVariable = (element, variableName) => {
    return parseInt(getComputedStyle(element).getPropertyValue(variableName));
};

const dummyText = `Spicy jalapeno bacon ipsum dolor `.repeat(700);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("Scrolled to top");
}

export { getValueOfCSSVariable, dummyText, scrollToTop };