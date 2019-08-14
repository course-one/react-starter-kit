import React from 'react';

// dependencies
import { firstLetterUpperCase } from 'utils/string-manip.util';
import { withPreloader } from 'hocs/with-preloader';

// user list view
const UserList = ( props ) => {
    return (
        <ul className='ns-app__user-list'>
            {
                props.users.map( user => {
                    return (
                        <li key={ user.id } className='ns-app__user-list__item'>
                            <img className='ns-app__user-list__item__avatar' src='/assets/images/avatar.jpeg' />
                            <div className='ns-app__user-list__item__details'>
                                <p className='ns-app__user-list__item__details__name'>{ firstLetterUpperCase( user.name ) }</p>
                                <p className='ns-app__user-list__item__details__email'>{ user.email }</p>
                            </div>
                        </li>
                    );
                } )
            }
        </ul>
    );
};

// user list with preloader
const UserListWithPreloader = withPreloader( UserList );

/*******************************************/

// app component view
export const AppView = ( props ) => {
    return (
        <div className='ns-app'>
            <UserListWithPreloader
                isLoading={ props.isFetching }
                users={ props.users }
            />
        </div>
    );
};

// default props
AppView.defaultProps = {
    isFetching: false,
    users: [],
    message: 'Hello World!'
};
