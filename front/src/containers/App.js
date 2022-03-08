import { connect } from 'react-redux';
import { fetchPatients } from '../actions/patients';
import App from '../components/App';

const mapStateToProps = (state) => ({
  loading: state.patients.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchpatients: () => {
    dispatch(fetchPatients());
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
