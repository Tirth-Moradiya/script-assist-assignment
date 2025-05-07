import { Group, Title, Button, Text } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to Home page after logout
  };

  return (
    <Group position="apart" p="md" bg="dark.7">
      <Group>
        <Title order={3} style={{ color: 'white' }}>
          <Link to="/">SpaceX Explorer</Link>
        </Title>

        {isAuthenticated && (
          <Group ml="xl">
            <Button
              component={Link}
              to="/dashboard"
              variant="subtle"
              color="gray.2"
              sx={{
                '&:hover': {
                  color: 'blue',
                },
              }}
            >
              Dashboard
            </Button>
            <Button
              component={Link}
              to="/resources"
              variant="subtle"
              color="gray.2"
              sx={{
                '&:hover': {
                  color: 'blue',
                },
              }}
            >
              Launches
            </Button>
          </Group>
        )}
      </Group>

      {isAuthenticated ? (
        <Group>
          <Text style={{ color: 'white' }}>Welcome, {user?.name}</Text>
          <Button
            variant="outline"
            color="red"
            onClick={handleLogout}
            sx={{
              '&:hover': {
                color: 'darkred',
              },
            }}
          >
            Logout
          </Button>
        </Group>
      ) : (
        <Button
          component={Link}
          to="/login"
          variant="outline"
          sx={{
            '&:hover': {
              color: 'blue',
            },
          }}
        >
          Login
        </Button>
      )}
    </Group>
  );
};

export default Header;
