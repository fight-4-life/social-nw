import React from 'react'
import styles from './FormsControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={(hasError ? styles.formControl  : '')}>
            <textarea {...input} {...props} />
            <div>
                {hasError && <span>{meta.error }</span>}
            </div>
        </div> 
    )
}

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={(hasError ? styles.formControl  : '')}>
            <input {...input} {...props} />
            <div>
                {hasError && <span>{meta.error }</span>}
            </div>
        </div> 
    )
}