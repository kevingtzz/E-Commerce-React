import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

import {
  SignUpContainer,
  ButtonContainer
} from './sign-in-from.styles.jsx'

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
          case 'auth/user-not-found':
            alert('No user associated with this email');
            break;
          default:
            console.error(error);
      }
    }
  };


  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
        </ButtonContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;