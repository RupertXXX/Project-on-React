import React, { useCallback, useState } from 'react';
import { Field, reduxForm } from 'redux-form'
import { InputText, Textarea } from '../../../../common/formControls/formControls';
import { maxLengthCreator, required } from '../../../../common/utils/validators/validators';
import Loading from '../../../../common/loading/loading';
import c from './changeProfile.module.css';

const OneForm = (props) => {
    const maxLengthis = useCallback(maxLengthCreator(props.maxLength), [props.maxLength]);
    
    const [editMode, setEditMode] = useState(false);
    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    return <>
    {
        editMode
        ?
            <Field onBlur={toggleEditMode} autoFocus={true} name={props.fieldName} 
                validate={props.isReq ? [required, maxLengthis] : [maxLengthis]} type={'text'} 
                placeholder={props.placeholder} component={props.component} />
        : 
            <span className={c.span_is} onClick={toggleEditMode} >{props.info}</span>
    }
    </>
}

const ChangeProfileForm = (props) => {

    const fileChosen = (e) => {
        if(e.target.files.length) props.setPhoto(e.target.files[0]);
    }
    const jobCheckChosen = (e) => {
        props.setJobCheck(val => !val);
    }

    return <>
        <form action="" onSubmit={props.handleSubmit}>
            <div className={c.changeItem}> Add your photo: 
                <input type="file" onChange={fileChosen} className={c.addPhoto} placeholder={"Choose photo"} />
            </div>
            <div className={c.changeItem}> Name: 
                <OneForm component={InputText} info={props.info.fullName} fieldName={"fullName"} 
                    placeholder={"Enter your name"} maxLength={40} isReq={true}/> 
            </div>
            <div className={c.changeItem}> Looking for a job: 
                <input type="checkbox" onChange={jobCheckChosen} className={c.lookForJob} /> 
            </div>
            <div className={c.changeItem}> Looking for a job description: 
                <OneForm component={Textarea} info={props.info.lookingForAJobDescription} fieldName={"lookingForAJobDescription"} 
                    placeholder={"Enter your description"} maxLength={160} isReq={false}/> 
            </div>
            <button name="submit" className={c.submit}> Отправить </button>
        </form>
    </>
}

const ChangeProfileFormRedux = reduxForm({
    form: 'changeProfile'
})(ChangeProfileForm);

const ChangeProfile = (props) => {
    let [jobValue, setJobValue] = useState(props.value);

    let info = props.info;

    const setInfo = (formData) => {
        if(formData.lookingForAJobDescription) info.lookingForAJobDescription = formData.lookingForAJobDescription;
        if(formData.fullName) info.fullName = formData.fullName;
        info.lookingForAJob = jobValue;
        info.AboutMe = "about me";
        props.setProfileInfo(info);
    }

    if(!props.info) {
        return <Loading />
    }
    else {
        return <div> 
            <h1>Costomize profile</h1>
            <ChangeProfileFormRedux onSubmit={setInfo} setPhoto={props.setPhoto} setJobCheck={setJobValue} info={props.info} />
        </div>
    }
}

export default ChangeProfile;