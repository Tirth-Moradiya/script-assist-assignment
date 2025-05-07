import { Table, Text, Badge, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Launch } from '../../api/types';

interface ResourceTableProps {
  launches: Launch[];
}

const ResourceTable = ({ launches }: ResourceTableProps) => {
  const rows = launches.map((launch) => (
    <tr key={launch.id}>
      <td>
        <Anchor component={Link} to={`/resources/${launch.id}`}>
          {launch.name}
        </Anchor>
      </td>
      <td>{new Date(launch.date_utc).toLocaleDateString()}</td>
      <td>
        <Badge color={launch.success ? 'teal' : 'red'}>
          {launch.success ? 'Success' : 'Failed'}
        </Badge>
      </td>
      <td>
        <Text lineClamp={1}>{launch.details || 'No details available'}</Text>
      </td>
    </tr>
  ));

  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Date</th>
          <th>Status</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default ResourceTable;
