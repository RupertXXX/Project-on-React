import React from 'react';
import Loading from '../../common/loading/loading';

const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Loading />}>
            <Component {...props} />
        </React.Suspense>
    }
}

export default withSuspense;