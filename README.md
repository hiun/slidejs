#slidejs

Simple fade slider for web.

##Demo

Click [here](http://divtag.sejong.edu) to see real world example.

##Prerequisites

- [jQuery](http://jquery.com) 1.0 or higher.
- Slide image must be named `0` to `n` (number of slide).

##Install and Configuration

###Installation

Add `slidejs.js` file to your HTML file will take global function called `slidejs`.

###Configuration API

- Example

```html
<img id="slide1">
<img id="slide0">

<script>
  slidejs({
    index: 13,
    path: './img/slideshow/'

    //more configuration to go.

  });
</script>
```

A function `slidejs` take single object as an argument. In this object, we can configure required and optional settings. The *Italic font is special consideration of value*.

- `index` (Required, Number) : Number of image to slide. *Must be start with `0`*.

- `path` (Required, String) : URL of slide image. *Must be ended with `/` ( ex. `./img/slideshow/` )*.

- `extension` (Optional, String) : Extension of image. Default to `.jpg`.

- `slide0` (Optional, String) : Name of DOM Element for slide. Default to `#slide0`.

- `slide1` (Optional, String) : Name of DOM Element for another slide. Default to `#slide1`.

- `width` (Optional, String) : Width of slide image. Default to `auto`.

- `height` (Optional, String) : Height of slide image. Default to `auto`.

- `time` (Optional, Number) : Time of fading animation. Default to `600`ms.

- `duration` (Optional, Number) : Presenting time of slide. Default to `6000`ms.

- `reverse` (Optional, Boolean) : Reverse option of slide. If `true` slide is advancing `n` to `0`. Default to `false`.

###Additional DOM Configuration

slidejs require two DOM element to present slide. **Slide you want to present first, have to located downside of another.** check following example.

```html
<img src="./img/slideshow/1.jpg" id="slide1">
<img src="./img/slideshow/0.jpg" id="slide0">
```

##Contributing

slidejs is just starting framework for helps to make simple fade slide in web. 

You may feel fade slide is really great way to express story like [this](http://ycombinator.com).

Feel free to make pull request for any improvements.

##License

MIT








