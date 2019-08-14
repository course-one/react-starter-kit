import React from 'react';
import classnames from 'classnames';

// spinner view
export const Spinner = ( props ) => {
    const widgetClassName = classnames( 'lds-ring', {
        'lds-ring--absolute': props.absolute
    } );

    return (
        <div className={ widgetClassName }>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

// default props
Spinner.defaultProps = {
    absolute: true
};
