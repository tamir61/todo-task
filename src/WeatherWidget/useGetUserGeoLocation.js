import { useCallback, useEffect, useState } from 'react';

import useFetch from '../utils/useFetch';

const OPEN_STREET_MAP_SERVICE_API_URL = 'https://nominatim.openstreetmap.org/reverse';

function useGetUserGeoLocation() {
  const [hasError, setHasError] = useState(false);
  const { data, isLoading, fetchData } = useFetch();

  const onError = useCallback(() => {
    setHasError(true);
  }, []);

  const onSuccess = useCallback(
    locationData => {
      const { latitude, longitude } = locationData.coords;
      fetchData({
        url: `${OPEN_STREET_MAP_SERVICE_API_URL}?format=json&lat=${latitude}&lon=${longitude}`,
        onError
      });
    },
    [fetchData, onError]
  );

  useEffect(() => {
    const isBrowserSupportsGeoLocation = Boolean(navigator.geolocation);
    if (!isBrowserSupportsGeoLocation) {
      setHasError(true);
      console.error('Geolocation not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, [onError, onSuccess]);

  return { hasError, data, isLoading };
}

export default useGetUserGeoLocation;
