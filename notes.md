Reference: https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4

Stories:

Static
- user sees first image on screen fullwidth and responsive width: OK
- image is partially dimmed to black --
- user can see a text inside the image OK
- user can see a series of horizontal lines to the right OK

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