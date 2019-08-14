import React from 'react';

// import spinner view
import { Spinner } from './spinner.view';

// export hoc
export const withPreloader = ( Component ) => {
    return class WithPreloader extends React.Component {
        render() {
            const { isLoading, isSpinnerAbs, ...props } = this.props;

            if( isLoading ) {
                return <Spinner absolute={ isSpinnerAbs } />;
            } else {
                return <Component { ...props }/>;
            }
        }
    };
};
