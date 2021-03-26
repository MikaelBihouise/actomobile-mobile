var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var request = require('sync-request');
var uid2 = require("uid2");

var associationModel = require('../Models/associations')
var benevoleModel = require('../Models/benevoles')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/sign-up', async function(req, res, next) {
  console.log(req.body)
  var error = []
  var result = false
  var saveBenevole = null
  var saveAssociation = null
  var token = null
  var type = null


  const dataBenevole = await benevoleModel.findOne({
    email: req.body.emailFromFront
  })

  if(dataBenevole != null){
    error.push('utilisateur déjà présent')
  }

  const dataAsso = await associationModel.findOne({
    email: req.body.emailFromFront
  })

  if(dataAsso != null){
    error.push('utilisateur déjà présent')
  }

  if(req.body.emailFromFront == ''
  & req.body.passwordFromFront == ''
  ){
    error.push('champs vides')
  }

  var hash = bcrypt.hashSync(req.body.passwordFromFront, 10);


  if(error.length == 0){

    if (req.body.typeFromFront == 1){

      var newBenevole = new benevoleModel ({
        email: req.body.emailFromFront,
        password: hash,
        token: uid2(32)
      })

      var saveBenevole = await newBenevole.save()
      
      if (saveBenevole) {
      result=true
      type="Bénévoles"
      token = saveBenevole.token
      }

      res.json({result, saveBenevole, error, token, type}) 

    } else if(req.body.typeFromFront == 2) {

      var newAssociation = new associationModel ({
        email: req.body.emailFromFront,
        password: hash,
        token: uid2(32)
      })

      var saveAssociation = await newAssociation.save()
      
      if (saveAssociation) {
        result=true
        type="Oeuvres caritatives"
        token= saveAssociation.token   
  }

  console.log(type)
  res.json({result, saveAssociation, error, token, type}) 

} else {
  res.json({error})
}
}})




router.post('/sign-in', async function (req, res, next) {


  var result = false
  var error = []

  if (req.body.emailFromFront == ''
    || req.body.passwordFromFront == ''
  ) {
    error.push('champs vides')
  }

  if (error.length == 0) {
    const userBenevole = await benevoleModel.findOne({
      email: req.body.emailFromFront,
    });
    if (error.length == 0) {
    const userAssociation = await associationModel.findOne({
    email: req.body.emailFromFront,
    });

    var password = req.body.passwordFromFront

    if (userBenevole && bcrypt.compareSync(password, userBenevole.password) || userAssociation && bcrypt.compareSync(password, userAssociation.password)) {

      result = true

      res.json({ login: true, result, userBenevole, userAssociation, error });
    } else {
      error.push('email incorrect ou mdp incorrect')
      res.json({ login: false, error });
    }

  }

}})

router.post('/charity-sign-up-form', async function(req, res, next) {
  console.log(req.body)
  var error = []
  var result = false

var updateAsso  = await associationModel.updateOne (
      {token: req.body.token}, {nom: req.body.nameFromFront,
      prenom:req.body.firstNameFromFront,
      nomEntite: req.body.entiteFromFront,
      ape:req.body.apeFromFront,
      ville: req.body.villeFromFront,
      visibilite: req.body.visibiliteFromFront,
      desc: req.body.descFromFront}
  )

  if (updateAsso) {
    console.log("yes")
    result=true
  
    res.json({result, updateAsso, error, token: req.body.token}) 
    }
  })


router.post('/volunteer-sign-up-form', async function(req, res, next) {

  var error = []
  var result = false

  var updateBenevole = await benevoleModel.updateOne( 
    { token: req.body.token },
    {
      nom: req.body.nameFromFront,
      prenom: req.body.firstNameFromFront,
      ville: req.body.villeFromFront,
      competences: JSON.parse(req.body.skillFromFront),
      expPro: req.body.expProFromFront,
      disponibilites: req.body.dispoFromFront,
      visibilite: req.body.visibiliteFromFront,
      desc: req.body.descFromFront,
      cv: req.body.cvFromFront
    }
  );

  if (updateBenevole) {
  console.log("formulaire en bdd ok")
  result=true

  res.json({result, updateBenevole, error, token: req.body.token}) 
  }

});

router.post('/volunteer-sign-up-form-mobile', async function(req, res, next) {

  var error = []
  var result = false

  let skill = req.body.skillFromFront.split(',');

  let skillList = [];
  for(var i=0; i<skill.length; i++) {
    skillList.push({
      value: skill[i],
      label: null
    })
  }

  var updateBenevole = await benevoleModel.updateOne( 
    { token: req.body.token },
    {
      nom: req.body.nameFromFront,
      prenom: req.body.firstNameFromFront,
      ville: req.body.villeFromFront,
      competences: skillList,
      expPro: req.body.expProFromFront,
      disponibilites: req.body.dispoFromFront,
      visibilite: req.body.visibiliteFromFront,
      desc: req.body.descFromFront,
      cv: req.body.cvFromFront
    }
  );

  if (updateBenevole) {
  console.log("formulaire en bdd ok")
  result=true

  res.json({result, updateBenevole, error, token: req.body.token}) 
  }

});


module.exports = router;

