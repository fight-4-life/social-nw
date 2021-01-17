import React from "react";
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../redux/usersReducer";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
    const onSearchBtn = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }
    return <div>
        <Formik
            initialValues={{
                term: '',
                friend: 'null'
            }}
            validate={usersSearchFormValidate}
            onSubmit={onSearchBtn}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Followed only</option>
                        <option value="false">Unollowed only</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Search
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})