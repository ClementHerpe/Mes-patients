export const FETCH_PATIENTS = 'FETCH_PATIENTS';
export const SAVE_PATIENTS = 'SAVE_PATIENTS';
export const GET_PATIENT = 'GET_PATIENT';
export const ONE_PATIENT = 'ONE_PATIENT';

export const fetchPatients = () => ({
  type: FETCH_PATIENTS,
});

export const savePatients = (patients, searchedPatients) => ({
  type: SAVE_PATIENTS,
  patients,
  searchedPatients,
});

export const getPatient = (text) => ({
  type: GET_PATIENT,
  text,
});

export const onePatient = (patient, text) => ({
  type: ONE_PATIENT,
  patient,
  text,
});
