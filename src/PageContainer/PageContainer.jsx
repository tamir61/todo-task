import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

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

PageContainer.propTypes = {
  children: PropTypes.node.isRequired
};
