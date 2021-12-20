import React, { useState, useEffect } from 'react'

import styles from '../styles/Contact.module.scss'

import { SplitScreen } from '@/components/Layouts/SplitScreen'
// import { validate } from "uuid";

const LeftHandComponent = () => {
    return (
        <div className={styles.LeftPane}>
            <h1>
                <span className={styles.underlineTitle}>Heading</span> One
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                dos eiusmod tempor incididunt ut labore et trace dolore magna
                aliqua.
            </p>
            <p>
                {' '}
                Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu
                dictum varius duis at consectetur lorem.
            </p>
        </div>
    )
}

const RightHandComponent = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        message: '',
    }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    // const [clearForm, setClearForm] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    const validate = values => {
        const errors = {}
        if (!values.firstName) {
            errors.firstName = 'Required'
        }
        if (!values.lastName) {
            errors.lastName = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        }
        console.log(errors.firstName)
        return errors
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
            setFormValues(initialValues)
        }
    }, [formErrors])

    return (
        <div className={styles.RightPane}>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <p className={styles.data__success} aria-live="polite">
                    Your form has been submitted successfully!
                </p>
            ) : (
                <p className={styles.dataMsg}>Please fill out form.</p>
            )}
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <legend className={styles.formTitle}>
                    <h2>Heading Two</h2>
                </legend>
                <fieldset>
                    <label htmlFor="firstName">
                        <span className={styles.srOnly}>First Name</span>
                        <input
                            className={styles.fname}
                            id="firstName"
                            name="firstName"
                            type="text"
                            // placeholder="First name"
                            placeholder="First name"
                            aria-required="true"
                            value={formValues.firstName}
                            onChange={handleChange}
                            // required="required"
                        />
                    </label>
                    <label htmlFor="lastName">
                        <span className={styles.srOnly}>Last Name</span>
                        <input
                            className={styles.lname}
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            aria-required="true"
                            value={formValues.lastName}
                            onChange={handleChange}
                        />
                        {/* <p className={styles.data__err} aria-live="polite">
              {formErrors.email}
            </p> */}
                    </label>
                </fieldset>
                <fieldset>
                    <label htmlFor="inputTitle">
                        <span className={styles.srOnly}>Title</span>
                        <input
                            className={styles.inputTitle}
                            id="inputTitle"
                            name="title"
                            type="text"
                            placeholder="Title"
                            value={formValues.title}
                            onChange={handleChange}
                        />
                        {/* <span className={styles.data__err} aria-live="polite">
              {formErrors.email}
            </span> */}
                    </label>
                    <label htmlFor="email">
                        <span className={styles.srOnly}>Email</span>
                        <input
                            className={styles.email}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            aria-required="true"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <p className={styles.data__err} aria-live="polite">
                            {formErrors.email}
                        </p>
                    </label>
                </fieldset>
                <fieldset className={styles.textarea}>
                    <label htmlFor="msg">
                        <span className={styles.srOnly}>Message</span>
                        <textarea
                            id="msg"
                            name="message"
                            placeholder="Message"
                            value={formValues.message}
                            onChange={handleChange}></textarea>
                    </label>
                </fieldset>

                <button
                    className={styles.btn__submit}
                    type="submit"
                    disabled={Object.keys(formErrors).length === 0 && isSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

function Contact() {
    return <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
}

export default Contact
