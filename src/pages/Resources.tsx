import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Title, LoadingOverlay } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import ResourceTable from '../components/resources/ResourceTable';
import SearchFilters from '../components/resources/SearchFilters';
import { getLaunches } from '../api/spacex';

export interface Filters {
  name?: string;
  success?: boolean | null;
}

const Resources = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<Filters>(() => {
    const params = Object.fromEntries(searchParams.entries());
    const initialFilters: Filters = {};
    
    if (params.name) initialFilters.name = params.name;
    if (params.success) initialFilters.success = params.success === 'true';
    
    return initialFilters;
  });

  const buildQuery = (filters: Filters): object => {
    const query: Record<string, unknown> = {};
    
    if (filters.name) {
      query.name = { $regex: filters.name, $options: 'i' };
    }
    
    if (typeof filters.success === 'boolean') {
      query.success = filters.success;
    }
    
    return query;
  };

  useEffect(() => {
    const params: Record<string, string> = {};
    if (filters.name) params.name = filters.name;
    if (typeof filters.success === 'boolean') params.success = filters.success.toString();
    
    setSearchParams(params);
  }, [filters, setSearchParams]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['launches', filters],
    queryFn: () => getLaunches(buildQuery(filters)),
  });

  const handleFilterChange = (key: keyof Filters, value: string | boolean | null) => {
    setFilters((prev) => {
      if (value === '' || value === null) {
        const newFilters = { ...prev };
        delete newFilters[key];
        return newFilters;
      }
      return { ...prev, [key]: value };
    });
  };

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <Container size="xl">
      <Title order={1} mb="md">SpaceX Launches</Title>
      
      <SearchFilters
  filters={filters}
  onFilterChange={handleFilterChange as (key: string | number | symbol, value: string | boolean | null) => void}
/>      
      <div style={{ position: 'relative' }}>
        <LoadingOverlay visible={isLoading} overlayBlur={2} />
        {data && <ResourceTable launches={data.docs} />}
      </div>
    </Container>
  );
};

export default Resources;
