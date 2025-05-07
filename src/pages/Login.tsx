import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Button,
  Card,
  Title,
  Text,
} from '@mantine/core';
import { useAuthStore } from '../store/authStore';
import { login } from '../api/auth';

const Login = () => {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login: storeLogin } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { user, token } = await login({ email, password });
      storeLogin(user, token);
      navigate('/dashboard');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', paddingTop: 100 }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={2} align="center" mb="md">
          Login
        </Title>

        {error && (
          <Text color="red" size="sm" mb="md">
            {error}
          </Text>
        )}

        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
            mb="md"
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
            mb="md"
          />

          <Button type="submit" fullWidth loading={loading}>
            Sign in
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
