# React App as an Embeddable Widget

This is a widget will be displaying anything you pass to "data-contest" in an embeddable div.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use

### `npm install`

Install all dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build:widget`

Builds the app as an embeddable react widget. Creates two files :

- index.js
- index.css

## Integration

Once built, the widget can be integrated by creating a div with the proper class identifier, parameters and referencing the js and css files as resources.

**Note that the resources should only be included once in a page, even if injecting the widget several times.**

Here's an example integration :

```html
...
<!-- Our widget div -->
<div class="react-widget" data-contest="Hello!"></div>

<!-- JS and CSS files for the widget -->
<link href="https://seifahmed.com/react-widget/index.css" rel="stylesheet" />
<script src="https://seifahmed.com/react-widget/index.js"></script>
...
```
