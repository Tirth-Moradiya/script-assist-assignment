import { Card, Text, Group, Badge, Image, Stack, Title, Divider } from '@mantine/core';

interface Launch {
  id: string;
  name: string;
  success: boolean;
  flight_number: number;
  date_utc: string;
  details?: string; // Make it `string | undefined`
  links: {
    patch: {
      large?: string;
    };
  };
}

interface Rocket {
  name: string;
  type: string;
  active: boolean;
  cost_per_launch: number;
  success_rate_pct: number;
}

interface ResourceCardProps {
  launch: Launch;
  rocket?: Rocket;  // Rocket is optional
}

const ResourceCard = ({ launch, rocket }: ResourceCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={launch.links.patch.large || 'https://via.placeholder.com/400x200'}
          height={200}
          alt={launch.name}
        />
      </Card.Section>

      <Stack mt="md" spacing="sm"> {/* Corrected gap to spacing */}
        <Title order={2}>{launch.name}</Title>
        
        <Group>
          <Badge color={launch.success ? 'teal' : 'red'}>
            {launch.success ? 'Success' : 'Failed'}
          </Badge>
          <Text>Flight Number: {launch.flight_number}</Text>
        </Group>
        
        <Text>{new Date(launch.date_utc).toLocaleString()}</Text>
        
        {launch.details && (
          <>
            <Divider my="sm" />
            <Text>{launch.details}</Text>
          </>
        )}
        
        {rocket && rocket !== null && (
          <>
            <Divider my="sm" />
            <Title order={3}>Rocket Details</Title>
            <Text>Name: {rocket.name}</Text>
            <Text>Type: {rocket.type}</Text>
            <Text>Active: {rocket.active ? 'Yes' : 'No'}</Text>
            <Text>Cost per launch: ${rocket.cost_per_launch.toLocaleString()}</Text>
            <Text>Success rate: {rocket.success_rate_pct}%</Text>
          </>
        )}
      </Stack>
    </Card>
  );
};

export default ResourceCard;
