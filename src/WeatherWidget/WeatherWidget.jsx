import { CircularProgress, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';

import WidgetContainer from '../components/WidgetContainer/WidgetContainer';
import useGetUserGeoLocation from './useGetUserGeoLocation';

const MOCKED_TEMPERATURE_VALUE = '19';

const Container = styled('div')(() => ({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
}));

const WeatherDisplayedData = styled('div')(() => ({
  display: 'flex',
  flex: 1,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}));

function WeatherWidget() {
  const { isLoading, data, hasError } = useGetUserGeoLocation();

  const { city, town, village, country } = data?.address || {};

  return (
    <Grid item xs={12} md={6} lg={4}>
      <WidgetContainer>
        <Container>
          {isLoading !== false && !hasError ? (
            <CircularProgress />
          ) : (
            <WeatherDisplayedData>
              {hasError ? (
                <Typography>Something went wrong, could not display the weather in your location :(</Typography>
              ) : (
                <>
                  <Typography variant="h3">{MOCKED_TEMPERATURE_VALUE}°C</Typography>
                  <Typography>
                    {(city || town || village) && `${city || town || village} `}
                    {country && `${country}`}
                  </Typography>
                </>
              )}
            </WeatherDisplayedData>
          )}
        </Container>
      </WidgetContainer>
    </Grid>
  );
}

export default WeatherWidget;
