import { Center, Title } from "@mantine/core";
import LoginForm from "../../components/Auth/LoginForm";

export default function Landing() {
  return (
    <Center style={{ height: '100vh', flexDirection: 'column' }}>
      <Title >Welcome to SpaceX Portal</Title>
      <LoginForm />
    </Center>
  );
}
