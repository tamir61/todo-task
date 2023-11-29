import { CircularProgress, Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';

import WidgetContainer from '../components/WidgetContainer/WidgetContainer';
import useGetUserGeoLocation from './useGetUserGeoLocation';
import { MEDIA_QUERY_MOBILE_DOWN } from '../utils/constants';

const MOCKED_TEMPERATURE_VALUE = '19';
export const WIDGET_HEIGHT_MOBILE_VIEW = '80px';

const Container = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 4,
  height: '100%',
  [MEDIA_QUERY_MOBILE_DOWN]: {
    width: '100%',
    maxHeight: WIDGET_HEIGHT_MOBILE_VIEW
  }
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
    <Container>
      <WidgetContainer>
        <WeatherDisplayedData>
          {isLoading !== false && !hasError ? (
            <CircularProgress />
          ) : (
            <>
              {hasError ? (
                <Typography>Something went wrong, could not display the weather in your location :(</Typography>
              ) : (
                <>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        xs: '1.5rem',
                        sm: '2.25rem'
                      }
                    }}
                  >
                    {MOCKED_TEMPERATURE_VALUE}°C, Clear
                  </Typography>
                  <Typography>
                    {(city || town || village) && `${city || town || village} `}
                    {country && `${country}`}
                  </Typography>
                </>
              )}
            </>
          )}
        </WeatherDisplayedData>
      </WidgetContainer>
    </Container>
  );
}

export default WeatherWidget;
