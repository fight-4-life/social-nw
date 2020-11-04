import React from 'react'
import styles from './FormsControls.module.css'
import {WrappedFieldProps} from "redux-form";

type TextareaInputPropsType = {
    input: WrappedFieldProps
    meta: {
        touched: boolean
        error: string
    }
}

export const Textarea: React.FC<TextareaInputPropsType> = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error

    return (
        <div className={(hasError ? styles.formControl : '')}>
            <textarea {...input} {...props} />
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Input: React.FC<TextareaInputPropsType> = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error

    return (
        <div className={(hasError ? styles.formControl : '')}>
            <input {...input} {...props} />
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}