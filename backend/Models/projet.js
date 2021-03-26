var mongoose = require('mongoose')

var competenceSchema = mongoose.Schema({
       value: String,
       label: String
   })

var projetSchema = mongoose.Schema({

       title: String,
       image: String,
       desc: String,
       categorie: String,
       disponibilité: String, 
       competence: [competenceSchema],
       startDate: Date,
       endDate: Date,
       ville: String,
       visibility: String,
       projectToken: String,
       benevoles: [{ type: mongoose.Schema.Types.ObjectId, ref:'benevoles' }],
       associations: [{type: mongoose.Schema.Types.ObjectId, ref: 'associations'}]
})

var projetModel = mongoose.model('projet', projetSchema)

module.exports = projetModel;