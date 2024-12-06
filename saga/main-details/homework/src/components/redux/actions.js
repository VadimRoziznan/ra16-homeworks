// Action Types
export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';
export const FETCH_SERVICE_DETAILS_REQUEST = 'FETCH_SERVICE_DETAILS_REQUEST';

// Action Creators
export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesSuccess = (services) => ({
  type: FETCH_SERVICES_SUCCESS,
  services,
});

export const fetchServicesFailure = (error) => ({
  type: FETCH_SERVICES_FAILURE,
  error,
});

export const fetchServiceDetailsRequest = (id) => ({
  type: FETCH_SERVICE_DETAILS_REQUEST,
  id,
});