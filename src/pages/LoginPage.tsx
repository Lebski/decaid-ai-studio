import React from 'react';
import LoginForm from 'components/LoginForm';
import Logo from 'components/Logo';
import Testimonial from 'components/Testimonial';

const LoginPage: React.FC = () => {
  return (
    <main className="flex min-h-screen bg-white">
      <div className="flex flex-grow">
        <section className="flex flex-col justify-center items-start w-full max-w-screen-sm px-8 py-8 relative">
          <div className="w-full">
            <Logo />
            <LoginForm />
          </div>
          <footer className="absolute bottom-8 left-8 text-sm text-slate-600">
            © Untitled UI 2077
          </footer>
        </section>
      </div>
      <Testimonial />
    </main>
  );
};

export default LoginPage;