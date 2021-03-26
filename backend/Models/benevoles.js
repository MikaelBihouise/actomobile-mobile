var mongoose = require('mongoose')

var competenceSchema = mongoose.Schema({
    value: String,
    label: String
})

var benevoleSchema = mongoose.Schema({

    nom: String,
    prenom: String,
    ville: String,
    email: String,
    competences: [competenceSchema],
    expPro: String,
    convictions: String,
    disponibilites: String,
    visibilite: String,
    desc: String,
    password: String,
    token: String,
    cv: Buffer,
    image: String,
    projets: [{ type: mongoose.Schema.Types.ObjectId, ref:'projet' }],

})

var benevoleModel = mongoose.model('benevoles', benevoleSchema)

module.exports = benevoleModel;