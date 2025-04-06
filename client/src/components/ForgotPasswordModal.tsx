// This component is a modal for requesting a password reset.
import { useState } from 'react';
import { requestPasswordReset } from '../services/authService';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ForgotPasswordModal({ isOpen, onClose }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setStatus('loading');
      const response = await requestPasswordReset(email);
      setStatus('success');
      setMessage(response.message || 'Password reset email sent. Please check your inbox.');
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send reset email. Please try again.');
      console.error('Error requesting password reset:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Reset Password</h2>
        
        {status === 'success' ? (
          <div className="text-green-600 mb-4">
            <p>{message}</p>
            <button 
              onClick={onClose}
              className="mt-4 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="mb-4 text-gray-600">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600"
              />
            </div>
            
            {status === 'error' && (
              <p className="text-red-600 mb-4">{message}</p>
            )}
            
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:bg-indigo-300"
              >
                {status === 'loading' ? 'Sending...' : 'Send Reset Link'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}