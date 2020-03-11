import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2> I already have an account </h2>
                <span> Please sign in using your username and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        value={this.state.email} 
                        type='email' 
                        handleChange={this.handleChange}
                        required 
                        label='Email'
                    />
                    <FormInput 
                        name='password' 
                        value={this.state.password} 
                        type='password' 
                        handleChange={this.handleChange} 
                        required
                        label='Password'
                    />

                    <div className='buttons'>
                        <CustomButton type='submit' > sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> sign in with google</CustomButton>
                    </div>

                    
                </form>
            </div>
        )
    }
}

export default SignIn;