import { TextInput, Select, Group } from '@mantine/core';
import { Filters } from '../../pages/Resources';

interface SearchFiltersProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string | boolean | null) => void;
}

const SearchFilters = ({ filters, onFilterChange }: SearchFiltersProps) => {
  return (
    <Group mb="md" grow>
      <TextInput
        placeholder="Search by mission name"
        value={filters.name || ''}
        onChange={(e) => onFilterChange('name', e.target.value)}
      />
      
      <Select
        placeholder="Filter by status"
        data={[
          { value: 'success', label: 'Success' },
          { value: 'failure', label: 'Failure' },
        ]}
        value={filters.success === true ? 'success' : filters.success === false ? 'failure' : ''}
        onChange={(value) => onFilterChange('success', value === 'success')}
        clearable
      />
    </Group>
  );
};

export default SearchFilters;