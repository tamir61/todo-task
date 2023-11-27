import * as React from 'react';
import { Container, Grid, Typography, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import TodosWidget from '../TodosWidget/TodosWidget';
import WeatherWidget from '../WeatherWidget/WeatherWidget';

const MainContainer = styled(Container)(() => ({
  padding: '24px',
  paddingBottom: '64px'
}));

const FullHeightContainer = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '100%'
});

const Content = styled('main')({
  flex: 1
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
        <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
          © 2023 My Weather & Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default function PageLayout() {
  return (
    <FullHeightContainer>
      <Header />
      <Content>
        <MainContainer maxWidth="lg">
          <Grid container spacing={3}>
            <TodosWidget />
            <WeatherWidget />
          </Grid>
        </MainContainer>
      </Content>
      <Footer />
    </FullHeightContainer>
  );
}
