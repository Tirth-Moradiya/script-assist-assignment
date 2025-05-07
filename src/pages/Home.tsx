import { Container, Title, Text, Button, Group, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      style={{ minHeight: '80vh' }}
    >
      <Container size="md" py="xl">
        <Title order={1} ta="center" mt="xl">
          Welcome to SpaceX Explorer
        </Title>

        <Text size="xl" ta="center" mt="md" mb="xl">
          Explore SpaceX launch data with our interactive dashboard
        </Text>

        <Group position="center">
          <Button component={Link} to="/login" size="lg">
            Get Started
          </Button>
          <Button
            component="a"
            href="https://github.com/r-spacex/SpaceX-API"
            target="_blank"
            variant="outline"
            size="lg"
          >
            API Documentation
          </Button>
        </Group>
      </Container>
    </Flex>
  );
};

export default Home;
