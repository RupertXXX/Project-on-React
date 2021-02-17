import React from 'react';
import c from './formControls.module.css';

const FormCreator = ({children, meta, classes}) => {
    const error_message = classes.error_message;
    const error_message_none = classes.error_message_none;
    return(
        <>
            {children}
            <div className={ ((meta.active || meta.submitFailed) && meta.error) ? c[error_message] : c[error_message_none] } >
                {((meta.active || meta.submitFailed) && meta.error) && <span>{meta.error}</span>}
            </div>
        </>
    )
}

export const Textarea = ({input, meta, ...props}) => {
    const classes = {
        error_message: "error_text_message",
        error_message_none: "error_text_message_none",
    }
    return(
        <>
            <FormCreator meta={meta} classes={classes}>
                <textarea className={ ((meta.active || meta.submitFailed) && meta.error) ? c.addPost_text_error : c.addPost_text } 
                    {...input} {...props} />
            </FormCreator>
        </>
    )
}

export const InputText = ({input, meta, ...props}) => {
    const classes = {
        error_message: "error_input_text_message",
        error_message_none: "error_input_text_message_none",
    }
    return(
        <>
            <FormCreator meta={meta} classes={classes}>
                <input type="text" className={ ((meta.active || meta.submitFailed) && meta.error) ? c.addPost_input_text_error : c.addPost_input_text } 
                    {...input} {...props} />
            </FormCreator>
        </>
    )
}