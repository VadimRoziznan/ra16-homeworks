import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
} from '../pages/actions';

const initialState = {
  services: [],
  isLoading: false,
  error: null,
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...state, isLoading: true, error: null };
      case FETCH_SERVICES_SUCCESS:
        return { ...state, services: action.services, isLoading: false, error: null };
    case FETCH_SERVICES_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};



export default servicesReducer;