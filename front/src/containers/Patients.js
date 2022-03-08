import { connect } from 'react-redux';
import Patients from '../components/Main/Patients';
import { fetchPatients } from '../actions/patients';

const mapStateToProps = (state) => (
  {
    patients: state.patients.patients,
  });

const mapDispatchToProps = (dispatch) => ({
  fetchpatients: () => {
    dispatch(fetchPatients());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Patients);
