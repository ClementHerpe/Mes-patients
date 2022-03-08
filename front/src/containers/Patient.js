import { connect } from 'react-redux';
import Patient from '../components/Main/Patient';
import { getPatient } from '../actions/patients';
import { getPatientBySlug } from '../selectors/patients';

const mapStateToProps = (state, ownProps) => ({
  patient: getPatientBySlug(state.patients.patients, ownProps.slug),
});

const mapDispatchToProps = (dispatch) => ({
  getOnePatient: () => {
    dispatch(getPatient());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Patient);
