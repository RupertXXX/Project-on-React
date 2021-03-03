import React from 'react';
import { connect } from 'react-redux';
import withErrorBoundary from '../../HOCs/errorBoundaryHoc';
import withSuspense from '../../HOCs/suspenseHoc';
import {compose} from 'redux';
const News = React.lazy(() => import('./news'));

const mapStateToProps = (state) => {
    return {
        news_post: state.newsPage.newsPostsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default compose( withSuspense, 
                        withErrorBoundary, 
                        connect(mapStateToProps, mapDispatchToProps)
                        )(News);