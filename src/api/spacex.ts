import { Launch, Rocket, LaunchesResponse } from './types';

const API_BASE = 'https://api.spacexdata.com/v4';

export const getLaunches = async (query: object = {}): Promise<LaunchesResponse> => {
  const response = await fetch(`${API_BASE}/launches/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      options: {
        sort: {
          date_utc: 'desc',
        },
        limit: 30,
      },
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch launches');
  }
  
  return response.json();
};

export const getLaunchById = async (id: string): Promise<Launch> => {
  const response = await fetch(`${API_BASE}/launches/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch launch details');
  }
  
  return response.json();
};

export const getRocketById = async (id: string): Promise<Rocket> => {
  const response = await fetch(`${API_BASE}/rockets/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch rocket details');
  }
  
  return response.json();
};