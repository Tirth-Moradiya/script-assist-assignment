 
export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export interface Launch {
    id: string;
    name: string;
    success: boolean;
    flight_number: number;
    date_utc: string;
    details?: string;   
    links: {
      patch: {
        large?: string;
      };
    };
    rocket?: string;  
  }
  
  export interface Rocket {
    name: string;
    type: string;
    active: boolean;
    cost_per_launch: number;
    success_rate_pct: number;
  }
  
  export interface LaunchesResponse {
    docs: Launch[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
  }