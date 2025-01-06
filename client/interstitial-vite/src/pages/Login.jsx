// import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const handleLogin = (data) => {
    console.log('Login data:', data);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;