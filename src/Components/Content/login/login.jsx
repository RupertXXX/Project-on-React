import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required } from '../../../common/utils/validators/validators';
import c from './login.module.css';

const LoginForm = (props) => {
    return (
        <form className={c.main_form} onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} name={'login'} type={'email'} placeholder={'login'} component={'input'} />
            </div>
            <div>
                <Field validate={[required]} name={'password'} type={'password'} placeholder={'password'} component={'input'} />
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'} /> Remember me
            </div>
            {
                (props.error) &&
                <div className={c.mass_error}>
                    {props.error}
                </div>
            }
            {
                (props.url) &&
                <div>
                    <div>
                        <img src={props.url} alt="captcha" />
                    </div>
                    <Field validate={[required]} name={'captcha'} placeholder={'Enter captcha'} component={'input'} />
                </div>
            }
            <div>
                <button name={'submit'} >Login</button>
            </div>
        </form>
    );
}

const LoginFormWithRedux = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const login = (formData) => {
        props.authLogin(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }
    return (
        <div className={c.main} >
            {
                <div>
                    <h1> Login </h1>
                    <LoginFormWithRedux onSubmit={login} url={props.url} />
                </div>  
            }
        </div>
    );
}

export default Login;