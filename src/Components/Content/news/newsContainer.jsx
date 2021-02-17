import { connect } from 'react-redux';
import News from './news';

const mapStateToProps = (state) => {
    return {
        news_post: state.newsPage.newsPostsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;