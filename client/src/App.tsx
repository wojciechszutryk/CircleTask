import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import {CircleList} from "./components";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <CircleList/>
      </QueryClientProvider>
  );
}

export default App;
