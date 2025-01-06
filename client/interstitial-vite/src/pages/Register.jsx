// import React from 'react';
import AuthForm from '../components/AuthForm';

const Register = () => {
  const handleRegister = (data) => {
    console.log('Register data:', data);
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
};

export default Register;