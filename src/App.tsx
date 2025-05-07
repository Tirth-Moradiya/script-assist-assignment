 

import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '../src/components/common/Header';
import PrivateRoute from '../src/components/auth/PrivateRoute';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import Resources from '../src/pages/Resources';
import ResourceDetail from '../src/pages/ResourceDetail';

const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications />
      <QueryClientProvider client={queryClient}>
        { }
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:id" element={<ResourceDetail />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
