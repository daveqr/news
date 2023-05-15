import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import TemplatePage from './components/layouts/TemplatePage';
import './App.css';


const queryClient = new QueryClient();

function App() {
  const [customName, setCustomName] = useState("general");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <TemplatePage setCustomName={setCustomName} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
