import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import styles from '../common/FormsControls/FormsControls.module.css'
import loginStyles from './Login.module.css'
import {AppStateType} from "../../redux/reduxStore";

type LoginOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginOwnPropsType> & LoginOwnPropsType> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]} type={'password'} />
            </div>
            <div>
            Remember me <Field type={'checkbox'} name={'rememberMe'} component={Input} /> 
            </div>
            {captchaUrl && <img src={captchaUrl} alt={'captcha'} />}

            {captchaUrl && <Field placeholder={'Enter the symbols from image'} name={'captcha'}
                component={Input} validate={[required]} />}
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button className={styles.loginButton}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginOwnPropsType>({ form: 'login' })(LoginForm)

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div className={loginStyles.loginPage}>
        <h1>Login page</h1>
        <p>Please enter your login and password</p>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login)