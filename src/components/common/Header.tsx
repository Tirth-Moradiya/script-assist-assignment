import { Group, Title, Button, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

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
                  color: 'blue', // Change text color on hover (example: blue)
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
                  color: 'blue', // Change text color on hover (example: blue)
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
            onClick={logout}
            sx={{
              '&:hover': {
                color: 'darkred', // Change text color on hover (example: dark red)
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
              color: 'blue', // Change text color on hover (example: blue)
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
