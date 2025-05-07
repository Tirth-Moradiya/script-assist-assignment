import { User } from './types';

export const login = async (credentials: { email: string; password: string }): Promise<{ user: User; token: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (credentials.email === 'user@example.com' && credentials.password === 'password') {
        resolve({
          user: {
            id: 1,
            name: 'Test User',
            email: 'user@example.com',
          },
          token: 'mock-jwt-token',
        });
      } else {
        throw new Error('Invalid credentials');
      }
    }, 1000);
  });
};

export const logout = async (): Promise<void> => {
  return Promise.resolve();
};