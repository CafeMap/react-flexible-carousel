# React Flexible Carousel [ In progress ]
⭐️  Flexible image carousel and respond on any device 💻  🖥  👀￼￼￼￼￼

# ~~USE~~ [ Not Release ]

```javascript
const urls = ['http://placehold.it/350x150', 'http://placehold.it/350x150', 'http://placehold.it/350x150', 'http://placehold.it/350x150']
const settings = {
  auto_play={ true }
  use_arrow={ true }
  use_thumbs={ true }
  lazy_load={ true }
  styleEase='ease-in-out'
  use_left_arrow={<div>Left</div>}
  use_right_arrow={<div>Right</div>}
  options={ {
    listWidth: 300,
    listHeight: 400,
    auto_play_speed: 2000
  } }
  beforeWrapperMouseOver={(index, url) => console.log(index, url)}
  afterWrapperMouseOver={(index, url) => console.log(index, url)}
  beforeWrapperMouseLeave={(index, url) => console.log(index, url)}
  afterWrapperMouseLeave={(index, url) => console.log(index, url)}
  beforeActionIDChange={ (preId) => {console.log(preId)} }
  afterActionIDChange={ (nextId) => {console.log(nextId)} }
}
<Carousel urls={ urls } { ...settings } />
```

# PROGRESS

- [x] handle list slider
  - [x] handle list auto play
  - [ ] handle custom image
    - [x] use image url data
    - [ ] use custom component
- [x] handle thumbs
  - [ ] custom thumbs position
    - [x] bottom
    - [ ] left
    - [ ] right
- [x] handle arrow
  - [x] handle arrow use
  - [x] handle custom arrow component
- [x] handle lazy load
- [x] handle respond design
  - [x] with parent element
- [ ] handle touch mode
- [ ] handle fancy box show ( click list image and show the bigger one )
- [ ] handle hook event
  - [ ] handle before, after bind event
    - [x] handle wrapper mouse over, leave event
    - [ ] handle arrow mouse click
    - [x] handle actionID change
    - [ ] handle thumbs item click
    - [ ] handle thumbs item change

# SETTINGS

|    Property    | Type |          Description          | Done |
| -------------  | ---- |          -----------          | ------- |
|urls|array|use array of url|Done|
|auto_play|boolean||Done|
|use_arrow|boolean||Done|
|use_left_arrow|ReactElement|custom left arrow ReactElement|Done|
|use_right_arrow|ReactElement|custom right arrow ReactElement|Done|
|use_thumbs|boolean||Done|
|lazy_load|boolean||Done|
|styleEase|string|use css3 ease style e.g. "ease-in-out", "ease-in" etc..|Done|
|options|object|{ listWidth:200, listHeight: 200, auto_play_speed: 2000 }|Done|
|start_actionID|int||Not|

# EVENT SETTINGS
|    Property    | Type |          Description          | Done |
| -------------  | ---- |          -----------          | ------- |
|beforeWrapperMouseOver(actionID, actionUrl)|function|callback before when wrapper mouse over event call|Done|
|afterWrapperMouseOver(actionID, actionUrl)|function|callback after when wrapper mouse over event call|Done|
|beforeWrapperMouseLeave(actionID, actionUrl)|function|callback before wrapper mouse leave event call|Done|
|afterWrapperMouseLeave(actionID, actionUrl)|function|callback after wrapper mouse leave event call|Done|
|beforeActionIDChange(preID)|function|callback before actionID change call|Done|
|afterActionIDChange(nextID)|function|callback after actionID change call|Done|
