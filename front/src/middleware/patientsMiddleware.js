import axios from 'axios';
import {
  FETCH_PATIENTS,
  savePatients,
  GET_PATIENT,
  onePatient,
} from '../actions/patients';

const patientsMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const { patient } = state.patients;
  switch (action.type) {
    case FETCH_PATIENTS:
      axios.get('http://localhost:3000/patients')
        .then((response) => {
          store.dispatch(savePatients(response.data));
        })
        .catch((error) => console.log(error));
      break;
    case GET_PATIENT:
      axios.get(`http://localhost:3000/patients/${patient}`)
        .then((response) => {
          store.dispatch(onePatient(response.data));
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default patientsMiddleware;
