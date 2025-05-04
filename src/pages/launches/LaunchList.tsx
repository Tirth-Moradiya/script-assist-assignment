import { useEffect, useState } from "react";
import { Loader, Title, TextInput, Paper, Grid, Container } from "@mantine/core";
import LaunchCard from "../../components/Launches/LaunchCard";

export default function LaunchList() {
  const [launches, setLaunches] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches")
      .then((res) => res.json())
      .then(setLaunches);
  }, []);

  const filtered = launches.filter((l: any) =>
    l.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080/cccccc/000000')", // Replace with your preferred background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "3rem",
      }}
    >
      <Container size="lg">
        <Paper
          shadow="xs"
          p="lg"
          radius="md"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Soft background
            padding: "2rem",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <Title order={2} style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Launches
          </Title>
          <TextInput
            placeholder="Search launches"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            mb="md"
            style={{
              maxWidth: "400px",
              margin: "0 auto 1.5rem auto",
              fontSize: "1rem",
            }}
          />
          {!launches.length ? (
            <Loader />
          ) : (
            <Grid gutter="lg" style={{ display: "flex", flexWrap: "wrap" }}>
              {filtered.map((launch: any) => (
                <Grid.Col
                  key={launch.id}
                  sm={6}
                  md={4}
                  lg={3}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "stretch",
                  }}
                >
                  <Paper
                    shadow="xs"
                    p="lg"
                    radius="md"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%", // Ensures card height is consistent
                      justifyContent: "space-between", // Align content evenly within the card
                      backgroundColor: "white",
                    }}
                  >
                    <LaunchCard
                      id={launch.id}
                      name={launch.name}
                      date={launch.date_utc}
                    />
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
          )}
        </Paper>
      </Container>
    </div>
  );
}
