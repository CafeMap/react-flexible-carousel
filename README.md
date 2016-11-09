# React Flexible Carousel [ In progress ]
⭐️  Flexible image carousel and respond on any device 💻  🖥  👀￼￼￼￼￼

# ~~USE [ In progress ]~~

```javascript
const urls = ['http://placehold.it/350x150', 'http://placehold.it/350x150', 'http://placehold.it/350x150', 'http://placehold.it/350x150']
const settings = {
  auto_play={ true }
  use_arrow={ true }
  use_thumbs={ true }
  lazy_load={ true }
  styleEase='ease-in-out'
  options={ {
    listWidth: 300,
    listHeight: 400,
    auto_play_speed: 2000
  } }  
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
    - [ ] handle actionID change
    - [ ] handle thumbs item click
    - [ ] handle thumbs item change

# License
MIT
