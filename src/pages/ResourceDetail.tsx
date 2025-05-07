import { useParams } from 'react-router-dom';
import { Container, LoadingOverlay, Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import ResourceCard from '../components/resources/ResourceCard';
import { getLaunchById, getRocketById } from '../api/spacex';

const ResourceDetail = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <Container size="md">
        <Text color="red">Error: Missing launch ID in URL.</Text>
      </Container>
    );
  }

  const {
    data: launch,
    isLoading: isLoadingLaunch,
    isError: isErrorLaunch,
    error: launchError,
  } = useQuery({
    queryKey: ['launch', id],
    queryFn: () => getLaunchById(id),
  });

  const {
    data: rocket,
    isLoading: isLoadingRocket,
    isError: isErrorRocket,
    error: rocketError,
  } = useQuery({
    queryKey: ['rocket', launch?.rocket],
    queryFn: () => launch?.rocket ? getRocketById(launch.rocket) : Promise.resolve(null),
    enabled: !!launch?.rocket,
  });

  if (isErrorLaunch) {
    return (
      <Container size="md">
        <Text color="red">
          Error loading launch: {(launchError as Error).message}
        </Text>
      </Container>
    );
  }

  if (isErrorRocket) {
    return (
      <Container size="md">
        <Text color="red">
          Error loading rocket details: {(rocketError as Error).message}
        </Text>
      </Container>
    );
  }

  return (
    <Container size="md">
      <div style={{ position: 'relative' }}>
        <LoadingOverlay
          visible={isLoadingLaunch || isLoadingRocket}
          overlayBlur={2}
        />
        {launch && <ResourceCard launch={launch} rocket={rocket || undefined} />} {/* Handle undefined for rocket */}
      </div>
    </Container>
  );
};

export default ResourceDetail;
