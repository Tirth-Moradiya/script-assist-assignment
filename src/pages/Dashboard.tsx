import { Container, Title, SimpleGrid, Card, Text, Button, Flex } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

const Dashboard = () => {
  const quickLinks = [
    {
      title: 'Recent Launches',
      description: 'View the latest SpaceX launches',
      link: '/resources?success=true',
    },
    {
      title: 'Failed Launches',
      description: 'View failed SpaceX launches',
      link: '/resources?success=false',
    },
    {
      title: 'Falcon 9 Launches',
      description: 'View Falcon 9 rocket launches',
      link: '/resources?name=Falcon 9',
    },
  ];

   
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(max-width: 900px)');

   
  const columns = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ minHeight: '80vh' }}  
    >
      <Container size="xl" style={{ textAlign: 'center' }}>
        <Title order={1} mb="md">Dashboard</Title>

        <SimpleGrid cols={columns} spacing="md">
          {quickLinks.map((item) => (
            <Card
              key={item.title}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              component={Link}
              to={item.link}
            >
              <Title order={3} mb="sm">
                {item.title}
              </Title>
              <Text>{item.description}</Text>
            </Card>
          ))}
        </SimpleGrid>

        <Button component={Link} to="/resources" variant="outline" mt="md">
          View More Launches
        </Button>
      </Container>
    </Flex>
  );
};

export default Dashboard;
