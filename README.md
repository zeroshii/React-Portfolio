# Responsive Portfolio

This is an exercise of developing web applications that will render well on a variety of screen sizes and devices by adding responsive design.

See the deployed application here: [Responsive Portfolio](https://zeroshii.github.io/Responsive-Portfolio/portfolio.html)

![screenshot](https://github.com/zeroshii/Responsive-Portfolio/blob/master/assets/screenshot.png)

## Getting Started

We will use the Bootstrap CSS Framework to create a mobile responsive portfolio. Be sure to visit the documentation to copy-paste the stylesheet &lt;link&gt; into your &lt;head&gt;and the necessary JS &lt;script&gt;s before the closing &lt;/body&gt; tag to enable them:

```
https://getbootstrap.com/docs/4.0/getting-started/introduction/
```
## Components

The following HTML pages including a personal CSS stylesheet were created: 
```
https://zeroshii.github.io/Responsive-Portfolio/index.html
https://zeroshii.github.io/Responsive-Portfolio/portfolio.html
https://zeroshii.github.io/Responsive-Portfolio/contact.html
```

## Requirements

The portfolio site is developed with the following:

* A navbar
* A responsive layout
* Responsive images
* Valid and semantic HTML
* Working links
* Utilization of Bootstrap components and grid system

In addition, personalized information must be included such as name, bio, images, and links to social media.

## Technologies Used
* HTML
* CSS
* Bootstrap

## Process

Web searching, w3schools, as well as the Bootstrap website proved to be excellent resources for coding reference. 

When building a consistent navbar on all pages, a button class of `navbar-toggler` and its attributes were implemented, thereby allowing the navigation links to be collapsed on smaller screens. The links were sorted as unordered list items belonging to the parent section with the class `collapse navbar-collapse`.

Three section class `row`s were created under the main class `container` on portfolio.html. Each row consists of two figure tags with the class `col-sm` for columns. An image element is placed in each column except for the last.

The img class attribute `img-fluid max-width: 100%` must be included to ensure the images are responsive. As a result, images will scale and fit accordingly to screen size. 

A `form-group` containing the input fields of `text` for name, and `email`, as well as a `textarea` tag and a `submit` button were created on contact.html as per instruction.

## Credit
Developer, Garman Kwan: https://github.com/zeroshii/

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



