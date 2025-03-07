export interface AuthResponse {
  token: string;
  user?: {
    _id?: string;
    username?: string;
    email: string;
  };
}

export interface RegisterResponse extends AuthResponse {
  // Add any additional fields specific to registration
  success?: boolean;
  message?: string;
}

export interface LoginResponse extends AuthResponse {
  // Add any additional fields specific to login
  success?: boolean;
  message?: string;
}