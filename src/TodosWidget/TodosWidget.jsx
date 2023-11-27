import { Grid, Typography } from '@mui/material';
import * as React from 'react';

import WidgetContainer from '../components/WidgetContainer/WidgetContainer';

function TodosWidget() {
  return (
    <Grid item xs={12} md={6} lg={8}>
      <WidgetContainer>
        <Typography variant="h5" component="h2" gutterBottom>
          Todo List
        </Typography>
      </WidgetContainer>
    </Grid>
  );
}

export default TodosWidget;
