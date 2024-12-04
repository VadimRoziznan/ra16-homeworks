import { fetchServices, fetchServiceDetails } from '../api';

// Action Types
export const FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';

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

// Thunk Action Creators
export const getServices = () => async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const services = await fetchServices();
    dispatch(fetchServicesSuccess(services));
  } catch (error) {
    dispatch(fetchServicesFailure(error));
  }
};

export const getServiceDetails = (id) => async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const service = await fetchServiceDetails(id);
    dispatch(fetchServicesSuccess([service]));
  } catch (error) {
    dispatch(fetchServicesFailure(error));
  }
};