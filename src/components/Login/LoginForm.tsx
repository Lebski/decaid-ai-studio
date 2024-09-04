import React, { useState } from 'react';

import socialLoginIconGoogle from 'assets/images/social-login-icon-google.svg';
import InputField from 'components/Forms/InputField';
import Button from 'components/Forms/Button';

interface LoginFormProps {
  onSubmit: (email: string, password: string, rememberMe: boolean) => void;
  onGoogleSignIn: () => void;
  onForgotPassword: () => void;
  onSignUp: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onGoogleSignIn,
  onForgotPassword,
  onSignUp
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, rememberMe);
  };

  return (
    <div className="flex flex-col max-w-[360px] w-[360px]">
      <div className="flex flex-col w-full">
        <h1 className="text-3xl font-semibold leading-10 text-gray-900">Welcome back</h1>
        <p className="mt-3 text-base leading-6 text-slate-600">Welcome back! Please enter your details.</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full rounded-xl">
        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          autocomplete='username'
          required
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          autocomplete='current-password'
          required
        />
        <div className="flex mt-6 w-full">
          <div className="flex flex-1 shrink gap-2 items-start my-auto basis-0 min-w-[240px]">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="sr-only peer"
              />
              <div className="flex justify-center items-center w-4 h-4 border border-gray-300 rounded peer-checked:bg-violet-700 peer-checked:border-violet-700 transition-colors duration-200 ease-in-out">
                {rememberMe && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="ml-2 text-sm font-medium leading-5 text-slate-700">Remember for 30 days</span>
            </label>
          </div>
          <a href="#" className="overflow-hidden gap-1.5 self-stretch h-full text-sm font-semibold leading-5 text-violet-700" onClick={(e) => { e.preventDefault(); onForgotPassword(); }}>
            Forgot password
          </a>
        </div>
        <Button type="submit" variant="primary" className="mt-6">
          Sign in
        </Button>
        <Button type="button" variant="secondary" className="mt-4" onClick={onGoogleSignIn}>
          <img src={socialLoginIconGoogle} alt="Google" className="w-6 h-6 mr-2" />
          Sign in with Google
        </Button>
      </form>
      <p className="flex gap-1 justify-center items-start mt-8 w-full text-sm leading-5">
        <span className="text-slate-600">Don't have an account?</span>
        <a href="#" className="overflow-hidden gap-1.5 self-stretch font-semibold text-violet-700" onClick={(e) => { e.preventDefault(); onSignUp(); }}>
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;