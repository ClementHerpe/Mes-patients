const mongoose = require('mongoose');
const yup = require('yup');
const { Schema } = mongoose;

//SCENACE SCHEMA
const SceanceSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 20
    },
    motif:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 100
    },
    traitement:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 500
    },
    conseils:{
        type: String,
        required: true,
        minlenght: 3,
        maxlenght: 500
    },
    proprietaire: { type: Schema.Types.ObjectId, ref: 'Patient' },
});

const validateSceance = sceance => {
    const schema = yup.object().shape({
        date: yup.string().required().min(3).max(20),
        motif: yup.string().required().min(3).max(100),
        traitement:  yup.string().required().min(3).max(500),
        conseils:  yup.string().required().min(3).max(500),
    });
    return schema.validate(sceance).then(sceance => sceance).catch(error => {
        return {
            message: error.message
        }
    });
}

exports.Sceance = new mongoose.model('Sceance', SceanceSchema);
exports.validateSceance = validateSceance;