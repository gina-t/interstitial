import axios from 'axios';
import { type RegisterResponse, LoginResponse } from '../interfaces/AuthInterfaces';

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
}): Promise<RegisterResponse> => {
  const response = await axios.post('/api/user', userData);
  return response.data as RegisterResponse;
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await axios.post('/api/user/login', userData);
  return response.data as LoginResponse;
};
