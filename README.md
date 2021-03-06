# React Flexible Carousel
⭐️  Flexible image carousel and respond on any device 💻  🖥  👀￼￼￼￼￼

# Simple Example

```javascript
import React, { Component } from 'react'
import { Carousel } from 'react-flexible-carousel'
class SimpleExample extends Component {
  render() {
    const urls = [
      'http://images.freeimages.com/images/previews/a6c/window-7-1547198.jpg',
      'http://images.freeimages.com/images/previews/5f7/hunter-s-bend-1316926.jpg',
      'http://images.freeimages.com/images/previews/423/burger-1320282.jpg',
      'http://images.freeimages.com/images/previews/f44/strawberry-cake-2-1323179.jpg',
      'http://images.freeimages.com/images/previews/5b0/rubik-s-cube-1-1424892.jpg',
    ]
    return (
      <Carousel
        urls={ urls }
        use_thumbs={ true }
        listHeight={ 200 }
      />
    )
  }  
}
export default SimpleExample
```

# Example page
[Demo Page](https://cafemap.github.io/react-flexible-carousel/)

# Installation

```command
> npm install react-flexible-carousel --save
```

# USE

[examples](https://github.com/CafeMap/react-flexible-carousel/tree/master/examples)

# PROGRESS

- [x] handle wrapper
  - [x] custom wrapper style
- [x] handle list slider
  - [x] handle list auto play
  - [x] handle custom image
    - [x] use image url data
    - [x] use custom component
- [x] handle thumbs
  - [ ] custom thumbs position
    - [ ] top
    - [x] bottom
    - [ ] left
    - [ ] right
  - [x] thumbs item custom style
  - [x] thumbs per page
  - [x] start action ID
- [x] handle arrow
  - [x] handle arrow use
  - [x] handle custom arrow component
- [x] handle lazy load
- [x] handle respond design
  - [x] with parent element
- [x] handle touch mode
- [ ] handle hook event
  - [ ] handle before, after bind event
    - [x] handle wrapper mouse over, leave event
    - [ ] ~~handle arrow mouse click~~
    - [x] handle actionID change
    - [ ] handle thumbs item click
    - [ ] ~~handle thumbs item change~~
- [ ] handle fancy box show ( click list image and show the bigger one )

# Props

|    Property    | Type |          Description          | Default | Done |
| -------------  | ---- |          -----------          | ------- | ---- |
|urls (required)|array|An array of urls|null|Done|
|listWidth|int|carousel image width size|300|Done|
|listHeight|int|carousel image height size|400|Done|
|auto_play|boolean||false|Done|
|auto_play_speed|int|speed setting for auto play|1000|Done|
|use_arrow|boolean||false|Done|
|use_left_arrow|ReactElement|custom left arrow ReactElement|null|Done|
|use_right_arrow|ReactElement|custom right arrow ReactElement|null|Done|
|use_thumbs|boolean|||Done|
|touch_mode|boolean||control touch mode by yourself|Done|
|thumbsPerPage|int||5|Done|
|lazy_load|boolean||true|Done|
|styleEase|string|use css3 ease style e.g. "ease-in-out", "ease-in" etc..|ease-out|Done|
|custom_styles|object|custom styles for carousel component. e.g. "wrapper", "list", "thumbs", "thumbs_item"||Done|
|custom_thumbs({ setting, handler })|ReactElement|[see example](https://github.com/CafeMap/react-flexible-carousel/tree/master/examples/components)||Done|
|custom_lists({ urls, width, height })|ReactElement|[see example](https://github.com/CafeMap/react-flexible-carousel/tree/master/examples/components)||Done|
|start_actionID|int||0|Done|

# Events
|    Property    | Type |          Description          | Done |
| -------------  | ---- |          -----------          | ------- |
|beforeWrapperMouseOver(actionID, actionUrl)|function|This callback fires before wrapper mouse over|Done|
|afterWrapperMouseOver(actionID, actionUrl)|function|This callback fires after wrapper mouse over|Done|
|beforeWrapperMouseLeave(actionID, actionUrl)|function|This callback fires before wrapper mouse leave|Done|
|afterWrapperMouseLeave(actionID, actionUrl)|function|This callback fires after wrapper mouse leave|Done|
|beforeActionIDChange(preID)|function|This callback fires before actionID changed|Done|
|afterActionIDChange(nextID)|function|This callback fires after actionID changed|Done|
