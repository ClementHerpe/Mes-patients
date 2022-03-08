const mongoose = require('mongoose');
const Sceance = require('./sceance');
const yup = require('yup');
const { Schema } = mongoose;


//PATIENTS SCHEMA
const PatientSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 50
    },
    prenom:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 50
    },
    age:{
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    adresse:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 100
    },
    telephone:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 50
    },
    profession:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 50
    },
    activitePhysique:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 500
    },
    antecedents:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 500 
    },
    sceances: [{ type: Schema.Types.ObjectId, ref: 'Sceance' }]
    
});

const validatePatient = patient => {
    const schema = yup.object().shape({ 
        nom: yup.string().required().min(3).max(50),
        prenom: yup.string().required().min(3).max(50),
        //Pour message perso selon l'erreur
        age: yup.number().required().min(0, "Plus jeune que 0 ans ? Wow...").max(120),
        adresse:  yup.string().required().min(3).max(100),
        telephone:  yup.string().required().min(3).max(50),
        profession:  yup.string().required().min(3).max(50),
        activitePhysique:  yup.string().required().min(3).max(500),
        antecedents:  yup.string().required().min(3).max(500),
    });
    return schema.validate(patient).then(patient => patient).catch(error => {
        return {
            message: error.message
        }
    });
}

exports.Patient = new mongoose.model('Patient', PatientSchema);
exports.validatePatient = validatePatient;