import { connect } from 'react-redux';
import { addMessageCreateAction } from '../../../redux/reducers/messagesReducer';
import Messages from './messages';
import withLoginCheck from '../../HOCs/isLoginHoc';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        messages_dialogs: state.messagesPage.dialogsData,
        messages_messages: state.messagesPage.messagesData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {
            dispatch(addMessageCreateAction(text));
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoginCheck,)(Messages);