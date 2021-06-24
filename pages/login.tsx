import React, { ReactElement } from 'react'
import { Formik } from 'formik'
import router, { useRouter } from 'next/router'

interface Props {}

import styles from './styles/login.module.scss'

export default function Login({}: Props): ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors = {}
            if (!values.email) {
              errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false)
              localStorage.setItem('email', values.email)
              router.push('/')
            }, 400)
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputWrapper}>
                <label htmlFor="email-input">Email</label>
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="pass-input">Password</label>
                <input
                  id="pass-input"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
