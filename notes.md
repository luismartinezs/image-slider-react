Reference: https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4

Stories:

Static
- user sees first image on screen fullwidth and responsive width: OK
- image is partially dimmed to black --
- user can see a text inside the image OK
- user can see a series of horizontal lines to the right OK

- when user clicks menu line, slide shows corresponding image OK
- Menu should be within slider view OK

- if viewport width/height ratio > 16:9, slide should fill full width OK
- menu should adjust size depending on viewport size OK

- load all images on mount OK

- function that makes slide fade out (opacity 0.0) OK > solved with a css transition property
- function that makes slide fade in (opacity from 0.0 to 1.0) OK > solved with CSS transition

- When a menu item is clicked, it should stay extended to 60px, when another menu item is clicked, the first one should shrink back


Behavior:

- if view width > 1200px
    user can't scroll, image fills full height of window always, images are not displayed sucessively:
    if viewport width/height > 19:6
        width = window width
        height = auto (keep ratio 19:6)
    if viewport width/height < 19:6
        height = window height
        width = auto (keep ratio 19:6)
- if view width < 1200px
    user can scroll, images are displayed successively one below the next, nav menu disappears