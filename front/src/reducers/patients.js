import { SAVE_PATIENTS, ONE_PATIENT } from '../actions/patients';

export const initialState = {
  patients: [],
  loading: true,
  searchedPatients: [],
};

const patients = (state = initialState, action = {}) => {
  switch (action.type) {
    // Action to get a direct import of all our patients
    case SAVE_PATIENTS:
      return {
        ...state,
        patients: action.patients,
        searchedPatients: action.patients,
        loading: false,
      };
    case ONE_PATIENT:
      return {
        ...state,
        patient: action.patient,
        loading: false,
      };
    default:
      return state;
  }
};

export default patients;
