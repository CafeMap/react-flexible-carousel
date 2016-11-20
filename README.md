# React Flexible Carousel
⭐️  Flexible image carousel and respond on any device 💻  🖥  👀￼￼￼￼￼

# Example page
[Demo Page](https://cafemap.github.io/react-flexible-carousel/)

# Installation

```command
> npm install react-flexible-carousel --save
```

# USE - v1.1.2

```javascript
import { Carousel } from 'react-flexible-carousel'

const urls = ['http://placehold.it/350x150', 'http://placehold.it/350x200', 'http://placehold.it/350x250', 'http://placehold.it/350x300']

<Carousel
  urls={ urls }
  auto_play={ true }
  use_arrow={ true }
  use_thumbs={ true }
  lazy_load={ true }
  touch_mode={ true }
  styleEase='ease-in-out'
  custom_styles={{
    wrapper: { border: '1px solid #ccc' },
    list: { backgroundColor: 'black' },
    thumbs: { border: '1px solid #ccc' },
    thumbs_item: { backgroundColor: 'yellow' }
  }}
  use_left_arrow={<div>Left</div>}
  use_right_arrow={<div>Right</div>}
  options={ {
    listWidth: 350,
    listHeight: 400,
    auto_play_speed: 2000,
    start_actionID: 4,
    thumbsPerPage: 3
  } }
  beforeWrapperMouseOver={ (index, url) => console.log(index, url) }
  afterWrapperMouseOver={ (index, url) => console.log(index, url) }
  beforeWrapperMouseLeave={ (index, url) => console.log(index, url) }
  afterWrapperMouseLeave={ (index, url) => console.log(index, url) }
  beforeActionIDChange={ (preId) => console.log(preId) }
  afterActionIDChange={ (nextId) => console.log(nextId) } />
```

# PROGRESS

- [ ] handle wrapper
  - [x] custom wrapper style
- [x] handle list slider
  - [x] handle list auto play
  - [ ] handle custom image
    - [x] use image url data
    - [ ] use custom component
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
- [ ] handle fancy box show ( click list image and show the bigger one )
- [ ] handle hook event
  - [ ] handle before, after bind event
    - [x] handle wrapper mouse over, leave event
    - [ ] ~~handle arrow mouse click~~
    - [x] handle actionID change
    - [ ] handle thumbs item click
    - [ ] ~~handle thumbs item change~~

# Props

|    Property    | Type |          Description          | Default | Done |
| -------------  | ---- |          -----------          | ------- | ---- |
|urls|array|An array of urls||Done|
|auto_play|boolean||false|Done|
|use_arrow|boolean||false|Done|
|use_left_arrow|ReactElement|custom left arrow ReactElement|null|Done|
|use_right_arrow|ReactElement|custom right arrow ReactElement|null|Done|
|use_thumbs|boolean|||Done|
|touch_mode|boolean||control touch mode by yourself|Done|
|thumbsPerPage|int||5|Done|
|lazy_load|boolean||true|Done|
|styleEase|string|use css3 ease style e.g. "ease-in-out", "ease-in" etc..|ease-out|Done|
|custom_styles|object|custom styles for carousel component. e.g. "wrapper", "list", "thumbs", "thumbs_item"||Done|
|options|object|{ listWidth:200, listHeight: 200, auto_play_speed: 2000 }||Done|
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
