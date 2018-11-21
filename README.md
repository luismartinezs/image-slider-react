This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Check the view: https://luismartinezs.github.io/image-slider-react/

## Slider notes:

- Once you've imported the modules required to make React work (see instructions below) copy the "components" folder and its contents in your src folder. It contains everything you need to add the slider to your project.
    - I assume you have a working React app. In any case, you need to use the react modules: https://reactjs.org/docs/create-a-new-react-app.html
    - Import Slider, adding 'import Slider from './components/slider';' to your App.js
    - Add Slider component, wrapped in a div with App class:
    ```
    <div className="App">
        <Slider />
    </div>
    ```
    - Define a width and height css properties for a css class .App, the slider will adapt to the dimensions you define. You can define absolute dimensions or responsive dimensions, the Slider will work either way. Example:
    ```
    .App {
        --width: 768px;
        width: var(--width);
        height: -webkit-calc(var(--width) * 9/16);
        height: -moz-calc(var(--width) * 9/16);
        height: calc(var(--width) * 9/16);
    }
    ```
    - IMPORTANT: Take care of using images that have the same dimensions to the ones you use for the .app class, the images will be distorted otherwise!
    - In folder components/assets you'll find a data.js containing an array with data about the images used by the Slider. Just use the urls, alt and text you want.
        - IMPORTANT: The Slider is designed to work with 5 images (for this, add data for 5 images in the array in data.js). If you use more or less images, everything will break down. The slider could be tweaked without much effort to take on more images, probably. Also, you should take care that the urls are working urls and point to an image.
    - If you don't like that the slider changes image automatically, comment lines 48 to 53 of slider.js file

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
