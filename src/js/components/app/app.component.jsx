import React from 'react';

// dependencies
import { getUsers } from 'services/users.service';

// app component view
import { AppView } from './app.view';

/**
 * @desc Entry component of the application single page application.
 */
export class App extends React.Component {
    constructor( props ) {
        super( props );

        // component state
        this.state = {
            isFetching: true,
            users: []
        };

        // fetch user data
        this.fetchUserData();
    }

    // when component is mouting, load users data
    async fetchUserData() {
        const users = await getUsers();

        // update users in the state
        this.setState( {
            users,
            isFetching: false
        } );
    }

    // render
    render() {
        return (
            <AppView
                isFetching={ this.isFetching }
                users={ this.state.users }
            />
        );
    }
}
