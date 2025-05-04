import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Title, Text, Loader, Paper, Divider } from "@mantine/core";

export default function LaunchPage() {
  const { id } = useParams();
  const [launch, setLaunch] = useState<any>(null);
  const [rocket, setRocket] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLaunch(data);
        if (data.rocket) {
          fetch(`https://api.spacexdata.com/v4/rockets/${data.rocket}`)
            .then((res) => res.json())
            .then(setRocket);
        }
      });
  }, [id]);

  if (!launch) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: "url('https://via.placeholder.com/1920x1080/cccccc/000000')", // Replace with your background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Loader size="xl" />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('https://via.placeholder.com/1920x1080/cccccc/000000')", // Replace with your background image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Paper shadow="xs" p="lg" radius="md" style={{ maxWidth: "800px", width: "100%", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
        <Title order={2} style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1rem" }}>
          {launch.name}
        </Title>
        <Text size="sm" color="dimmed" mb="sm" style={{ fontStyle: "italic" }}>
          {new Date(launch.date_utc).toLocaleString()}
        </Text>
        <Text mb="md" style={{ lineHeight: 1.6, fontSize: "1rem", color: "#555" }}>
          {launch.details || "No description available."}
        </Text>
        <Divider my="sm" style={{ borderTop: "2px solid #e0e0e0" }} />

        {rocket && (
          <>
            <Title order={4} mt="md" style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "0.5rem" }}>
              Rocket: {rocket.name}
            </Title>
            <Text style={{ lineHeight: 1.6, color: "#444" }}>{rocket.description}</Text>
          </>
        )}
      </Paper>
    </div>
  );
}
