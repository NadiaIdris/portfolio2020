<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Project deadline estimation](#project-deadline-estimation)
- [Fonts](#fonts)
- [Getting an element's size with JS](#getting-an-elements-size-with-js)
- [Resources](#resources)
- [Responsive design](#responsive-design)
  - [Design projects carousel](#design-projects-carousel)
    - [1. When viewport is larger than 1280px](#1-when-viewport-is-larger-than-1280px)
    - [2. When viewport is smaller than 1281px](#2-when-viewport-is-smaller-than-1281px)
    - [3. When viewport is smaller than 601px](#3-when-viewport-is-smaller-than-601px)
    - [4. When viewport is smaller than 501px](#4-when-viewport-is-smaller-than-501px)
  - [Coding projects carousel](#coding-projects-carousel)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Project deadline estimation

- [Google sheet with deadline and how long it will take to build each component](https://docs.google.com/spreadsheets/d/1imgfyCUpgzgNWIvKdQVKgBjbUXKFZxAvD8iMdrbAdA8/edit?usp=sharing)

# Fonts

- [Read about CSS Web Fonts](<https://www.w3schools.com/css/css3_fonts.asp#:~:text=OpenType%20Fonts%20(OTF),on%20the%20major%20computer%20platforms.>)

# Getting an element's size with JS

According to MDN:
[Determining the dimensions of elements](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)

`offsetWidth` and `offsetHeight` return the "total amount of space an element
occupies, including the width of the visible content, scrollbars (if any),
padding, and border"

`clientWidth` and `clientHeight` return "how much space the actual displayed
content takes up, including padding but not including the border, margins, or
scrollbars"

`scrollWidth` and `scrollHeight` return the "actual size of the content,
regardless of how much of it is currently visible"

# Resources

- [Interesting article on collapsing right/left margins](https://www.smashingmagazine.com/2019/07/margins-in-css/)

# Responsive design

## Design projects carousel

I created 4 breakpoints for design projects carousel component:

1. When viewport is larger than 1280px
2. When viewport is smaller than 1281px
3. When viewport is smaller than 601px
4. When viewport is smaller than 501px

### 1. When viewport is larger than 1280px

Design projects carousel has 5 projects. In the largest viewport about 1 and
half of projects are always hidden. I have _disabled_ the horizontal scrolling
option and instead added buttons to scroll to right and left on the carousel.

This design also features 31px padding on the left and right side of the
carousel.

### 2. When viewport is smaller than 1281px

If viewport is smaller than 1281px then I wanted the component to take up 100%
width of the viewport. So I removed the 31px padding on the left and right side
of the carousel. Instead I added 31px margin on the left side of the first
project and I also added 31px margin on the right side of the last project. By
doing that I learned there is such thing as collapsible margins. Read more about
it [here](https://www.smashingmagazine.com/2019/07/margins-in-css/).

After removing the padding on the carousel and by adding margins, I had to write
another JS function (`hidePreviousButtonIfViewport601To1280Px()`) to hide the
previous button on the carousel. That is because I am using
`getBoundingClientRect()` to get the left side of the first design project and
`getBoundingClientRect()` doesn't include margin of the element. So I had to
remove 31px (margin) from left of the first design project to be able to hide
the previous button in JS.

(add gif)

### 3. When viewport is smaller than 601px

If viewport is smaller then 600px, then I reduced the margin-left of the first
design project and margin-right of the last design project to 16px.

I had to write a third function in JS
(`hidePreviousButtonIfViewportSmallerThan601Px`) to hide previous button,
because now the margins are 16px instead of 31px. Here I could have made one
function that takes one argument, the size of the first design project
margin-left. But in that point I decided to move on because I have many other
responsive components to build.

### 4. When viewport is smaller than 501px

If viewport is smaller than 501px, than user is most likely in a mobile device.
For that reason, I hid next and previous buttons on the carousel and enabled
horizontal scrolling.

## Coding projects carousel

Coding projects carousel works basically the same way as Design projects
carousel. It has same amount or breakpoints. Only difference is when viewport is
larger than 1434, then all 3 coding projects will be visible and there will be
no carousel (next and previous buttons).

- Viewport is smaller than 500px: I reduced the size of the coding project from
  441px in width to 354px to make sure that each coding project component fits
  on the viewport fully on smaller viewports.
