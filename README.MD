# A simple dark mode toggle
Add dark mode styling to your app/website with a simple toggle button. The selection is saved in localStorage.

## Install
```
npm install @luukone/darkmode-toggle
```

## Usage
Create an element where you want to inject the toggle button in:
```
<div id="screen-mode">
  // the toggle button will be injected here
</div>
```

Create a `.dark-mode` class in your css file:
```
.dark-mode {
  background: #000;
}

.dark-mode h1 {
  color: #CCC;
}
```

Import the package in your javascript file and create an instance with the following arguments:
- the element you want to inject the toggle button in
- the name of the css class where your dark mode styles will live

Example:
```
import Dark from '@luukone/darkmode-toggle';

new Dark(document.querySelector('#screen-mode'), 'dark-mode')
```

Add the following script right after the `<body>` tag:
```
<body>
  <script>
    if (localStorage.getItem('screen_mode')) {
      document.querySelector('body').classList.add('dark-mode')
    }
  </script>

  // content
```

This way the browser will render the dark mode styles before rendering any other styles.


[optional] get a nice looking toggle button by importing the following css file or by directly copying the css code from [w3schools](https://www.w3schools.com/howto/howto_css_switch.asp).
```
@import '~@luukone/darkmode-toggle/dark-mode';
```
