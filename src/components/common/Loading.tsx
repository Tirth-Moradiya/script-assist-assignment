import { Loader, Center, Text } from '@mantine/core';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

const Loading = ({ message = 'Loading...', fullScreen = false }: LoadingProps) => {
  const content = (
    <div style={{ textAlign: 'center' }}>
      <Loader size="xl" variant="dots" />
      <Text mt="md" size="lg">{message}</Text>
    </div>
  );

  return fullScreen ? (
    <Center style={{ height: '100vh' }}>
      {content}
    </Center>
  ) : content;
};

export default Loading;