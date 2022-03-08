const express = require('express');
// const { requiresAuth } = require('express-openid-connect');
const router = express.Router();
const {Patient,validatePatient} = require('../models/patients');
const { Sceance, validateSceance } = require('../models/sceance');

//POST: CREATE A NEW PATIENT
router.post('/', async (req,res) => {
    const error = await validatePatient(req.body);
    if(error.message) res.status(400).send(error.message);
    patient = new Patient({
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        adresse:  req.body.adresse,
        telephone:  req.body.telephone,
        profession:  req.body.profession,
        activitePhysique:  req.body.activitePhysique,
        antecedents:  req.body.antecedents,
    });

    patient.save().then(patient => {
        res.send(patient);
    }).catch(error => {
        res.status(500).send("Opps, le patient n'a pas été crée"+error);
    })
});

//GET ALL PATIENT
router.get("/", (req, res) => {
    Patient.find().then(patient => res.send(patient)).catch((error) => {
        res.status(500).send("Je n'ai pas pu récupérer ce patient");
    })
})

//GET THE PATIENT BY ID
router.get("/:patientId", async (req,res) => {
    const patient = await Patient.findById(req.params.patientId);
    if(!patient) res.status(404).send("Patient non trouvé");
    res.send(patient);
});

//UPDATE PATIENT BASED ON ID
router.put('/:patientId', async(req,res) => {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.patientId, {
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        adresse:  req.body.adresse,
        telephone:  req.body.telephone,
        profession:  req.body.profession,
        activitePhysique:  req.body.activitePhysique,
        antecedents:  req.body.antecedents,
    }, {new: true});
    if(!updatedPatient) res.status(404).send("Patient non mis à jour");
    res.send(updatedPatient); 
});

//DELETE A PATIENT BASED ON ID
router.delete('/:patientId', async(req,res) => {
    const patient = await Patient.findByIdAndRemove(req.params.patientId);
    if(!patient) res.status(404).send("PAtient non trouvé et non supprimé");
    res.send(patient);
});

//POST: CREATE UNE SCEANCE SUR UN PATIENT
router.post('/sceances', async (req,res) => {
    const error = await validateSceance(req.body);
    if(error.message) res.status(400).send(error.message);
    sceance = new Sceance({
        date: req.body.date,
        motif: req.body.motif,
        traitement: req.body.traitement,
        conseils: req.body.conseils,
        proprietaire: req.body.proprietaire
    });
    const patient = await Patient.findById(req.body.proprietaire);
        if(!patient) res.status(404).send("Patient non trouvé");
        sceance.save().then(sceance => {
            patient.sceances.push(sceance);
            patient.save().then(patient => {
                res.send(patient);
            }).catch(error => {
                res.status(500).send("Opps, la scéance n'a pas été associée"+error);
            });
        }).catch(error => {
            res.status(500).send("Opps, la scéance n'a pas été crée"+error);
        });
});

//GET THE SCEANCE BY ID 
router.get("/sceances/:sceanceId", async (req,res) => {
    const sceance = await Sceance.findById(req.params.sceanceId);
    if(!sceance) res.status(404).send("sceance non trouvée");
    res.send(sceance);
});

//GET ALL SCEANCE BY PATIENT ID
router.get("/:patientId/sceances", async (req,res) => {
    const sceances = await Sceance.find({proprietaire: req.params.patientId});
    if(!sceances) res.status(404).send("sceance non trouvée");
    res.send(sceances);
});

//UPDATE SCEANCE BASED ON ID
router.put('/sceances/:sceanceId', async(req,res) => {
    const updatedSceance = await Sceance.findByIdAndUpdate(req.params.sceanceId, {
        date: req.body.date,
        motif: req.body.motif,
        traitement: req.body.traitement,
        conseils: req.body.conseils,
        proprietaire: req.body.proprietaire,
    }, {new: true});
    if(!updatedSceance) res.status(404).send("Sceance non mise à jour");
    res.send(updatedSceance); 
});

//DELETE A SCEANCE BASED ON ID 
router.delete('/sceances/:sceanceId', async(req,res) => {
    const sceance = await Sceance.findByIdAndRemove(req.params.sceanceId);
    if(!sceance) res.status(404).send("Sceance non trouvé et non supprimé");
    res.send(sceance);
});


module.exports = router;