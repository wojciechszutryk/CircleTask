import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import {CircleList, AddCircleButton, DeleteCircleButton} from "./components";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <AddCircleButton/>
          <DeleteCircleButton/>
          <CircleList/>
      </QueryClientProvider>
  );
}

export default App;
