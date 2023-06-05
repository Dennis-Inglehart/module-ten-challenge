# SVG Logo Maker

The SVG Logo Maker generates logos in an SVG format! The logos always have 3 letters (or similar characters), standing out in front of a simple, geometric shape. The content is determined by user input.

<hr>

## Link

[Inglehart SVG Logo Generator](https://watch.screencastify.com/v/-REPLACE-THIS-WITH-THE-ACTUAL-VIDEO-LINK-ONCE-IT-EXISTS-)

## Description

SVG Logo Maker generates small (300 x 200 pixel) SVG files. It uses inquirer.js to prompt the users with a series of questions that define:

* The 3 character combination

* The text color

* The shape color

* Whether the shape is to be a circle, a triangle, or a square

The background is always transparent. The shape and the text are both centered, more or less. If the text input is too long, only the first 3 characters will be applied to the logo. If an invalid color input is chosen, Logo Maker will default to something valid (orange for shape color, and/or blue for text color)

## Usage Instructions

Open a terminal in the appropriate directory, run `npm install`, then `npm init`, then `node index.js`. Answer the questions Logo Maker asks in the CLI. Logo Maker will create a SVG according to your specifications; it will be in the same directory as index.js.

Note that Logo Maker is only capable of making files named "logo.svg", and it will over-write anything already named "logo.svg" in its directory. This means that, if you run it twice in a row, your first logo will get deleted! (One way to avoid this is by renaming your "logo.svg", or by moving it to a different directory)

## Testing Instructions

## Future Development

* Prevent text color from being the same as shape color

* Add background color

* Add more shapes (including the same square, but rotated 45°, and the same triangle, but rotated 180°)

* Create a workaround for the over-writing problem (probably by creating uniquely named directories, since the brief mandates that every logo absolutely must be named "logo.svg")

* Make the text and the shape more exactly centered