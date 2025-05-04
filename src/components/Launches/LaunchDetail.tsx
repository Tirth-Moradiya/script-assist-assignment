// components/Launches/LaunchDetail.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title, Text, Loader, Paper, Group } from "@mantine/core";

interface Launch {
  name: string;
  date_utc: string;
  details: string;
  rocket: string;
}

interface Rocket {
  name: string;
  description: string;
}

const LaunchDetail = () => {
  const { id } = useParams();
  const [launch, setLaunch] = useState<Launch | null>(null);
  const [rocket, setRocket] = useState<Rocket | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const launchRes = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
        const launchData = await launchRes.json();
        setLaunch(launchData);

        const rocketRes = await fetch(`https://api.spacexdata.com/v4/rockets/${launchData.rocket}`);
        const rocketData = await rocketRes.json();
        setRocket(rocketData);
      } catch (err) {
        console.error("Failed to load launch details:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading || !launch) return <Loader />;
  
  return (
    <Paper shadow="md" p="lg" radius="md">
      <Title order={2}>{launch.name}</Title>
      <Text size="sm" color="dimmed" mb="sm">
        {new Date(launch.date_utc).toLocaleString()}
      </Text>
      <Text mb="md">{launch.details || "No description available."}</Text>

      {rocket && (
        <>
          <Title order={4} mt="md">Rocket: {rocket.name}</Title>
          <Text>{rocket.description}</Text>
        </>
      )}
    </Paper>
  );
};

export default LaunchDetail;
