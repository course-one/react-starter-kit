import React from 'react';

// view
export const AppView = ( props ) => {
    return (
        <div className='ns-app'>
            <h1 className='ns-app__title'>{ props.message }</h1>
        </div>
    );
};

// default props
AppView.defaultProps = {
    message: 'Hello World!'
};
