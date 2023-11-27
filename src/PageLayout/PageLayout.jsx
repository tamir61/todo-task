import * as React from 'react';
import { Container, Grid, Paper, Typography, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const MainContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(8)
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
}));

const FullHeightContainer = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  minHeight: '100vh'
});

const Content = styled('main')({
  flex: 1
});

function PageLayout() {
  return (
    <FullHeightContainer>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Weather & Todo App
          </Typography>
        </Toolbar>
      </AppBar>
      <Content>
        <MainContainer maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <StyledPaper>
                <Typography variant="h5" component="h2" gutterBottom>
                  Todo List
                </Typography>
                {/* Placeholder for todo list items */}
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <StyledPaper>
                <Typography variant="h5" component="h2" gutterBottom>
                  Weather
                </Typography>
                {/* Placeholder for weather data */}
              </StyledPaper>
            </Grid>
          </Grid>
        </MainContainer>
      </Content>
      <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
            © 2023 My Weather & Todo App
          </Typography>
        </Toolbar>
      </AppBar>
    </FullHeightContainer>
  );
}

export default PageLayout;
