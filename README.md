# useful-tools
Simple, small and minimal tools that fulfils needs in one place. Welcome you to add more functions.

### Purpose
We try to make some best tool togather to increase people's productivity.

### For Contribution
- Feel Free To contribute :+1:
- make your tool as component.
- make sure it is Bootstrap friendly ( Not compulsory but recommanded )

### 1. Sanitize title from 

This code From the :- https://gist.github.com/spyesx/561b1d65d4afb595f295

```javascript
    const string_to_slug = function (str)
    {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        const from = "àáäâèéëêìíïîòóöôùúüûñçěščřžýúůďťň·/_,:;";
        const to   = "aaaaeeeeiiiioooouuuuncescrzyuudtn------";

        for (let i=0, l=from.length ; i<l ; i++)
        {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace('.', '-') // replace a dot by a dash 
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by a dash
            .replace(/-+/g, '-') // collapse dashes
            .replace( /\//g, '' ); // collapse all forward-slashes

        return str;
    }

```

### 2. Speech recognition tool

This code From the :- https://davidwalsh.name/speech-recognition

```javascript
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;
    recognition.start();

    recognition.onresult = function(event) {
        console.log('You said: ', event.results[0][0].transcript);
    };
```

### 3. Age Diffrence Calculator

```javascript
const [currentDate, setCurrentDate] = useState(Date.now());
    const [birthDate, setBirthDate] = useState(Date.now());
    const [diffrence, setDiffrence] = useState(0);
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const ONE_MONTH = 1000 * 3600 * 24 * 12;
    
    useEffect(() => {
        setDiffrence( () => {
            let timeDiffrence = (new Date(currentDate) - new Date(birthDate).getTime());
            let year = Math.floor( timeDiffrence / 3.15576e+10);
            let month = Math.floor( timeDiffrence / ONE_MONTH);
            let days = Math.floor( timeDiffrence / ONE_DAY);
            //let diffrenceMonth = Math.floor( new Date( timeDiffrence ).getMonth() )
            let total = `${year} years`; 
            return { 
                year: year, 
                month: month , 
                days: days,
                total: total,
            }
        });
    }, [birthDate, currentDate, ONE_MONTH, ONE_DAY])
```


---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
