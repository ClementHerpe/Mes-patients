/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Patient = ({
  getOnePatient,
  patient,
}) => {
  useEffect(() => {
    getOnePatient();
  }, []);
  return (
    <section className="one__recipe">
      <h1>{patient.nom}</h1>
      <Link className="one__recipe__button" to="/"> Retourner à mes patients </Link>
    </section>
  );
};

export default Patient;
