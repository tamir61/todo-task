import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')(() => ({
  display: 'flex',
  flex: '1',
  height: '100vh',
  backgroundColor: 'light-gray'
}));

function PageContainer({ children }) {
  return (
    <CssBaseline>
      <StyledContainer>{children}</StyledContainer>
    </CssBaseline>
  );
}

export default PageContainer;
