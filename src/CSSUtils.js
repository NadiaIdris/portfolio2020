// Access CSS variable from JS: https://stackoverflow.com/a/41725782
const getValueOfCSSVariable = (element, variableName) => {
    return parseInt(getComputedStyle(element).getPropertyValue(variableName));
};

export { getValueOfCSSVariable };