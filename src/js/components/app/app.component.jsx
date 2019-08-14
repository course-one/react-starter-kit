import React from 'react';

// view
import { AppView } from './app.view';

/**
 * @desc Entry component of the application single page application.
 */
export class App extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <AppView />
        );
    }
}
