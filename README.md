# useful-tools
Simple, small and minimal tools that fulfils needs in one place. Welcome you to add more functions.

### Purpose
We try to make some best tool togather to increase people's productivity.

### For Contribution
- Feel Free To contribute :+1:
- make your tool as component.
- make sure it is Bootstrap friendly ( Not compulsory but recommanded )
- It will sound funny, But try to do not use NPM modules ( Because of Updates )

### Installation

1. `git clone <REPO>`
2. In folder `npm install`
3. To run in Local server `npm start`

> no need to create build we are using :octocat: github actions for this

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

    function toCamelCase(str){
        var arr= str.match(/[a-z]+|\d+/gi);
        return arr.map((m,i)=>{
            let low = m.toLowerCase();
            if (i!==0){
                low = low.split('').map((s,k)=>k===0?s.toUpperCase():s).join``
            }
            return low;
        }).join``;
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

### 3. Recap Text To Total Time Converter

Thanks to This code From the :- https://gist.github.com/joseluisq/dc205abcc9733630639eaf43e267d63f

```javascript
const [recapText, setRecapText] = useState('10:20 \n 0:30 10:20');
const [totalTime, setTotalTime] = useState('Add Recap Text');

useEffect( () => {
    let regularExpression = /\d{1,}:\d{2}/g;
    let times;
    times = recapText.match(regularExpression);
    times =  times ? times.reduce((total, currentValue) => total = addTimes(total, currentValue)) : times;
    setTotalTime(times);
},[recapText]);


function addTimes(startTime, endTime) {
    var times = [ 0, 0, 0 ]
    var max = times.length

    var a = (startTime || '').split(':')
    var b = (endTime || '').split(':')

    // normalize time values
    for (var i = 0; i < max; i++) {
        a[i] = isNaN(parseInt(a[i])) ? 0 : parseInt(a[i])
        b[i] = isNaN(parseInt(b[i])) ? 0 : parseInt(b[i])
    }

    // store time values
    for (i = 0; i < max; i++) {
        times[i] = a[i] + b[i]
    }

    var hours = times[0]
    var minutes = times[1]
    var seconds = times[2]

    if (seconds >= 60) {
        var m = (seconds / 60) << 0
        minutes += m
        seconds -= 60 * m
    }

    if (minutes >= 60) {
        var h = (minutes / 60) << 0
        hours += h
        minutes -= 60 * h
    }

    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
}
```


### 4. Age Diffrence Calculator

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
