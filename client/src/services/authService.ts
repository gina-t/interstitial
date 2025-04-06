import axios from 'axios';
import { type RegisterResponse, LoginResponse } from '../interfaces/AuthInterfaces';

// register user
export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
}): Promise<RegisterResponse> => {
  const response = await axios.post('/api/user', userData);
  return response.data as RegisterResponse;
};

// login user
export const loginUser = async (userData: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await axios.post('/api/user/login', userData);
  return response.data as LoginResponse;
};
// request password reset
export const requestPasswordReset = async (email: string): Promise<{ message: string }> => {
  const response = await axios.post('/api/user/reset-password', { email });
  return response.data;
};

// process the reset with a token
export const resetPassword = async (token: string, newPassword: string): Promise<{ message: string }> => {
  const response = await axios.post('/api/user/reset-password/confirm', { token, newPassword });
  return response.data;
};
