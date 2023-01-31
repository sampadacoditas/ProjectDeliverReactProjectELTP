
import { Field, Form, Formik } from "formik";
import { useState } from "react"
import { Button } from "../../Components/Button/Button";

import styles from "./SignUp.module.scss"
export const LoginPage = () => {
  const [signInPage, setSignInPage] = useState(false);
  const signInFunction = () => {
    setSignInPage(!signInPage)
  }
  return (
    <div className={styles.loginLayout}>
      <div className={styles.loginPageFormAndImage}>
        <div className={styles.loginPageImage}>
          {/* <img src="" alt="loginImage" /> */}
        </div>
        <div className={styles.loginPageForm}>
          <div className={styles.formImg}>
          </div>
          <Formik initialValues={{ email: "", password: "" }} onSubmit={() => { }}>
            <Form className={styles.loginForm}>
              <h2>Welcome!!</h2>
              <label htmlFor="" className={styles.emailLabel}>Email</label>
              <Field name="email" type="email"></Field>
              <label htmlFor="" className={styles.passwordLabel}>Password</label>
              <Field name="password" type="password"></Field>
              <Button buttonText="Sign In" />
              <p>If you are a new user click below</p>
              <Button buttonText="Sign Up" onClick={signInFunction} />
            </Form>
          </Formik>
        </div>
      </div>
      {
        signInPage && (
          <div className={styles.signInModel}>
            <form className={styles.signInForm}>
              <h2>Sign Up</h2>
              <label htmlFor="" className={styles.addNewUserUsernameLabel}>Username</label>
              <input type="text" />
              <label htmlFor="" className={styles.addNewUserEmailLabel}>Email</label>
              <input type="email" />
              <label htmlFor="" className={styles.addNewUserPasswordLabel}>Passowrd</label>
              <input type="password" />
              <select name="year" className={styles.selectYear}>
                <option value="Select Year">Select Year</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2021">2021</option>
              </select>
              <select name="track" className={styles.selectTrack}>
                <option value="Select Track">Select Track</option>
                <option value="React">React</option>
                <option value="Node">Node</option>
                <option value="Java">Java</option>
                <option value="Angular">Angular</option>
                <option value="Data Science">Data Science</option>
                <option value=".Net">.Net</option>
                <option value="Devops">Devops</option>
                <option value="Flutter">Flutter</option>
                <option value="GoLang">GoLang</option>
                <option value="Python">Python</option>
                <option value="Swift">Swift</option>
              </select>
              <div className={styles.signInBtnStyling}>
                <Button buttonText="Register" onClick={signInFunction} />
                <Button buttonText="Close" onClick={signInFunction}  />
              </div>
            </form>
          </div>
        )
      }
    </div>
  )
}