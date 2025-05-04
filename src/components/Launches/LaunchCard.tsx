// components/Launches/LaunchCard.tsx
import { Card, Text, Group, Button } from "@mantine/core";
import { Link } from "react-router-dom";

interface LaunchCardProps {
  id: string;
  name: string;
  date: string;
}

const LaunchCard = ({ id, name, date }: LaunchCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder mb="md">
      <Group position="apart">
        <div>
          <Text weight={500}>{name}</Text>
          <Text size="sm" color="dimmed">
            {new Date(date).toLocaleDateString()}
          </Text>
        </div>
        <Button variant="light" component={Link} to={`/launches/${id}`}>
          View Details
        </Button>
      </Group>
    </Card>
  );
};

export default LaunchCard;
