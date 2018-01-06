# Specify-Image-Dimensions
Script For Specifying images dimensions

# Overview

Specifying a width and height for all images allows for faster rendering by eliminating the need for unnecessary reflows and repaints.
How does your site score on this recommendation?

Page Speed currently only detects image dimensions that are specified via the image attributes. If you are specifying the dimensions via CSS, then you can safely ignore this recommendation.

# Details from Google

When the browser lays out the page, it needs to be able to flow around replaceable elements such as images. It can begin to render a page even before images are downloaded, provided that it knows the dimensions to wrap non-replaceable elements around. If no dimensions are specified in the containing document, or if the dimensions specified don't match those of the actual images, the browser will require a reflow and repaint once the images are downloaded. To prevent reflows, specify the width and height of all images, either in the HTML <img> tag, or in CSS.
