import { Grid, Typography } from '@mui/material';
import * as React from 'react';

import WidgetContainer from '../components/WidgetContainer/WidgetContainer';

function WeatherWidget() {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <WidgetContainer>
        <Typography variant="h5" component="h2" gutterBottom>
          Weather
        </Typography>
      </WidgetContainer>
    </Grid>
  );
}

export default WeatherWidget;
