import * as React from 'react';
import { Container, Typography, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import TodosWidget from '../TodosWidget/TodosWidget';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import { MEDIA_QUERY_MOBILE_DOWN } from '../utils/constants';

export const CONTAINER_GAP_VALUE = '8px';
const HEADER_FOOTER_HEIGHT = 64;
const HEADER_FOOTER_MOBILE_HEIGHT = 56;

const MainContainer = styled(Container)(() => ({
  padding: '24px',
  height: `calc(100% - ${HEADER_FOOTER_HEIGHT * 2}px)`,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  gap: CONTAINER_GAP_VALUE,
  [MEDIA_QUERY_MOBILE_DOWN]: {
    flexDirection: 'column-reverse',
    padding: 0,
    height: `calc(100% - ${HEADER_FOOTER_MOBILE_HEIGHT * 2}px)`
  }
}));

const FullHeightContainer = styled('div')({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 0
});

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Weather & Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

function Footer() {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="caption">© 2023 My Weather & Todo App</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default function PageLayout() {
  return (
    <FullHeightContainer>
      <Header />
      <MainContainer maxWidth="lg">
        <TodosWidget />
        <WeatherWidget />
      </MainContainer>
      <Footer />
    </FullHeightContainer>
  );
}
