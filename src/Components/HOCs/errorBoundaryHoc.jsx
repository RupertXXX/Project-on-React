import React from 'react';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary';

const withErrorBoundary = (Component) => {
    return ({forErrorName}, ...props) => {
        return <ErrorBoundary name={forErrorName}>
            <Component {...props} />
        </ErrorBoundary>
    }
}

export default withErrorBoundary;