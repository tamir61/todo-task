import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import PageContainer from './PageContainer/PageContainer';
import PageLayout from './PageLayout/PageLayout';

function App() {
  return (
    <div className="App">
      <PageContainer>
        <PageLayout />
      </PageContainer>
    </div>
  );
}

export default App;
