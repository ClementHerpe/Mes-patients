/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PatientsPart from '../../../containers/PatientsPart';

import './styles.scss';

const Patients = ({ fetchpatients }) => {
  useEffect(() => {
    fetchpatients();
  }, []);
  return (
    <section className="recipes__container">
      <h1>Bienvenue sur MesPatients.com</h1>
      <h2>Vos patients : </h2>
      <PatientsPart />
    </section>
  );
};

export default Patients;
