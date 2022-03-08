import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = (state) => ({
  loading: state.patients.loading,
});

const mapDispatchToProps = {};

// Container
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// == Export
export default MainContainer;
