import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./LoginForm.module.scss";
import Button from "../../components/Ui/Button/Buttom";
import FormGroup from "../../components/Ui/FormGroup/FormGroup";
import Input from "../../components/Ui/Input/Input";
import { isRequired } from "../../utils/validation";

let LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.loginForm}>
      <FormGroup>
        <Field
          name="login"
          component={Input}
          type="text"
          validate={[isRequired]}
        />
      </FormGroup>
      <FormGroup>
        <Field name="password" component={Input} type="password" />
      </FormGroup>
      <FormGroup>
        <Field name="rememberme" component="input" type="checkbox" />
      </FormGroup>
      <FormGroup>
        <Button color="primary">Login</Button>
      </FormGroup>
    </form>
  );
};

LoginForm = reduxForm({
  form: "login"
})(LoginForm);

export default LoginForm;
