import { connect } from 'react-redux';
import PatientsPart from '../components/Main/PatientsPart';

const mapStateToProps = (state) => (
  {
    searchedPatients: state.patients.searchedPatients,
  });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PatientsPart);
