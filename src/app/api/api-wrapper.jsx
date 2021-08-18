import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { element } from 'prop-types';

import { AxiosProvider } from './axios';

const queryClient = new QueryClient();

function ApiWrapper({ children }) {
  return (
    <AxiosProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AxiosProvider>
  );
}

export default ApiWrapper;

ApiWrapper.propTypes = {
  children: element.isRequired,
};
