import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from 'components/Common/Logo';
import LoginForm from 'components/Login/LoginForm';
import Testimonial from 'components/Login/Testimonial';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    console.log('Login submitted', { email, password, rememberMe });
    // Here you would typically validate the credentials
    // For now, we'll just navigate to the home page
    navigate('/home');
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign In clicked');
    // Implement Google Sign In logic here
    // After successful sign-in, navigate to home
    navigate('/home');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
    // Implement forgot password logic here
  };

  const handleSignUp = () => {
    console.log('Sign Up clicked');
    // Implement sign up logic here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex min-h-screen bg-white">
        <div className="flex flex-grow">
          <section className="flex flex-col justify-center items-start w-full max-w-screen-sm px-8 py-8 relative">
            <Logo />
            <LoginForm
              onSubmit={handleSubmit}
              onGoogleSignIn={handleGoogleSignIn}
              onForgotPassword={handleForgotPassword}
              onSignUp={handleSignUp}
            />
            <footer className="absolute bottom-8 left-8 text-sm text-slate-600">
              © Untitled UI 2077
            </footer>
          </section>
        </div>
        <Testimonial />
      </main>
    </div>
  );
};

export default LoginPage;
