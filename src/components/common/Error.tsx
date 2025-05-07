import { Alert, Text, Title, Button } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

interface ErrorProps {
  error: Error | string;
  reset?: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  const errorMessage = typeof error === 'string' ? error : error.message;

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: '2rem' }}>
      <Alert 
        icon={<IconAlertCircle size="1rem" />} 
        title={<Title order={3}>Something went wrong!</Title>}
        color="red"
        variant="outline"
        mb="md"
      >
        <Text>{errorMessage}</Text>
      </Alert>

      {reset && (
        <Button 
          variant="light" 
          color="blue" 
          onClick={reset}
          fullWidth
        >
          Try again
        </Button>
      )}
    </div>
  );
};

export default Error;