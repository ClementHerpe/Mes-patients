/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import {
  Segment, Dimmer, Loader, Image,
} from 'semantic-ui-react';
import { getSlugFromName } from '../../../selectors/patients';

// import Tags from './Tags';

const PatientsPart = ({ searchedPatients, loading }) => (
  <div className="body__patients">
    <>
      {loading && (
        <Segment>
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      )}
    </>
    {!loading && (
    <div className="container__patients">
      {searchedPatients.map((patient) => (
        <div key={patient._id}>
          <h3 className="patients__name">{patient.nom} {patient.prenom}</h3>
          <Link to={`/patient/${getSlugFromName(patient.prenom + patient.nom)}`} className="recipes__button" id={patient._id} title={patient.nom}>Editer</Link>
        </div>
      ))}
    </div>
    )}
  </div>
);

export default PatientsPart;
