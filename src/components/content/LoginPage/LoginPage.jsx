import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { sendLoginData } from "../../../store/authReduser";


const LoginPage = (props) => {
    
    return (    
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            onSubmit={(values) => {
                debugger
                props.login(values.email, values.password, values.rememberMe)
            }}
        >
            <Form>
                <h1>Login</h1>
                <label htmlFor="email">email</label>
                <Field id="email" type="email" name="email"/>

                <label htmlFor="password">password</label>
                <Field id="password" type="password" name="password"/>

                <label htmlFor="rememberMe"></label>
                <Field id="rememberMe" type="checkbox" name="rememberMe"/>

                <button type="submit">Send</button>

            </Form>

        </Formik>
    )
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispathToProps = (dispath) => {
    return {
        login: (email, password, rememberMe) => {dispath(sendLoginData(email, password, rememberMe))}
    }
}


export default connect(mapStateToProps, mapDispathToProps)(LoginPage)

// export default LoginPage