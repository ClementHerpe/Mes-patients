// == Import npm
import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Patients from '../../containers/Patients';
import Patient from '../../containers/Patient';

// == Import
import './styles.scss';

// == Composant

const Main = () => (
  <div className="main">
    <Routes>
      <Route path="/" exact element={<Patients />} />
      <Route
        path="/patient/:slug"
        render={({ match }) => (
          <Patient slug={match.params.slug} />
        )}
      />
    </Routes>
  </div>
);

export default Main;
