var mongoose = require('mongoose')

var associationSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    nomEntite: String,
    ape: String,
    ville: String,
    visibilite: String,
    desc: String,
    password: String,
    email: String,
    token: String,
    projets: [{ type: mongoose.Schema.Types.ObjectId, ref:'projet' }],
    
})

var associationModel = mongoose.model('associations', associationSchema)
module.exports = associationModel;