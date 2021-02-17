import React from 'react';
// import Onefriend from '../friends/onefriend/onefriend';
import Dialog from './dialog/dialog';
import MessageRight from './message_right/message_right';
import MessageLeft from './message_left/message_left';
import c from './messages.module.css';
import { Field, reduxForm, reset } from 'redux-form';
import { Textarea } from '../../../common/formControls/formControls';
import { maxLengthCreator} from '../../../common/utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const Messageform = (props) => {
    return(
        <form className={c.send_message_btn} onSubmit={props.handleSubmit} >
            <Field name={'message'} placeholder='Your message' component={Textarea} 
                validate={[maxLength50]} />
            <button className={c.send_btn}>+</button>
        </form>
    )
}

const MessageformWithRedux = reduxForm({
    form: 'message'
})(Messageform);

const Messages = (props) => {

    let dialogsData_is = props.messages_dialogs.map(obj => <Dialog name={obj.name} key={obj.id} id={obj.id} />);
    let messagesData_is = props.messages_messages.map(obj => obj.id % 2 === 0 ? <MessageRight message={obj.message} key={obj.id} /> : <MessageLeft message={obj.message} key={obj.id} />);

    let sendMessage = (formData, dispatch) => {
        let text = formData.message;
        props.sendMessage(text);
        dispatch(reset('message'));
    }

    return(
        <div className={c.main}>
            <div className={c.list}>
                <div className={c.title}>Your dialogs</div>
                {dialogsData_is  /* Dialog */}
            </div>
            <div className={c.line}></div>
            <div className={c.opened_dialog_send}> 
                <div className={c.opened_dialog}>
                    <div className={c.title_open_dialog}>
                        <div className={c.one_friend}></div>
                        {/* <Onefriend name='Misha' online='online' /> */}
                        <div className={c.line2}></div>
                    </div>
                    <div className={c.messages}>
                        {messagesData_is  /* Message */}
                    </div>
                </div>
                <MessageformWithRedux onSubmit={sendMessage} />
            </div>
        </div>
    );
}

export default Messages;