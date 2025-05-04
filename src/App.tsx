import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { MantineProvider } from "@mantine/core";

export default function App() {
  const content = useRoutes(routes);
  return <MantineProvider withNormalizeCSS withGlobalStyles>{content}</MantineProvider>;
}
