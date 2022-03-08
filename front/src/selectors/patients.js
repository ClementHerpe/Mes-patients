import slugify from 'slugify';

export const getSlugFromName = (title = '') => {
  // replace remplace la 1e occurence qu'il trouve si on lui donne en 1e argument
  // une chaine de caractère, pour remplacer dans l'ensemble de la string il faut passer
  // une regex
  const modifiedTitle = title.replace(/&/g, '').replace(/_/g, '-');

  return slugify(modifiedTitle, {
    lower: true,
  });
};

export const getUrlFromTitle = (title) => `/patient/${getSlugFromName(title)}`;

// objectif : récupérer dans le state,
// la recette qui contient le titre slugifié qui correspond à la valeur de ownProps.slug
export const getPatientBySlug = (patients, slug) => {
  console.log('patients', patients);

  return patients.find((patient) => {
    const slugifiedTitle = getSlugFromName(patient.nom + patient.prenom);

    return slugifiedTitle === slug;
  });
};
