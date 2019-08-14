import React from 'react';
import ReactDOM from 'react-dom';

// global config
console.log( '(logged at /src/index.js) CONFIG => ', CONFIG );

// export App components
import { App } from 'components/app';

// compile App component in `#app` HTML element
ReactDOM.render( <App />, document.getElementById( 'app' ) );
