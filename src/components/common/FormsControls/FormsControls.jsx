import React from 'react'
import styles from './FormsControls.module.css'

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
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

export const Input = ({ input, meta: { touched, error }, ...props }) => {
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