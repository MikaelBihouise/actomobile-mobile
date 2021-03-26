var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var request = require('sync-request')
var uid2 = require("uid2");

var associationModel = require('../Models/associations')
var benevoleModel = require('../Models/benevoles')
var projetModel = require('../Models/projet');

/* GET home page. */

router.get('/preview-benevoles-bank/:islimited',async function(req, res, next) {
  
  let benevoleList;

  console.log(req.params.islimited)
  
  if(JSON.parse(req.params.islimited) == true){
    benevoleList = await benevoleModel.find({
      visibilite: "Public",
    }).limit(6);
  } else {
    benevoleList = await benevoleModel.find({
      visibilite: "Public",
    });
  }
  
  res.json({benevoleList})

});   /* maybe better /benevole-homepage as the condition result should appear there?*/
router.get('/preview-competence-bank/:islimited', async function(req, res, next) {

  let benevoleList = await benevoleModel.find();

  let finalList = [];

  for (let benevole of benevoleList){
    if (benevole.visibilite === 'Limité' || benevole.visibilite === 'Public'){
      finalList.push(benevole)
    }
  };

  // console.log(req.params.islimited)
  
  console.log(finalList);
  res.json({benevoleList: finalList})
}); /* maybe better /benevole-homepage as the condition result should appear there?*/

router.get('/preview-project-bank', async function(req, res, next) {

  let projectList = await projetModel.find();

  let projectLoaded = [];

  for(var i=0; i<projectList.length; i++){
    if(projectList[i].visibility === "Publique" || projectList[i].visibility === "Limitée"){
      projectLoaded.push(projectList[i]);
    }
  }

  console.log(projectLoaded)
  res.json({projectList: projectLoaded})
});

router.get('/preview-project-bank-bene', async function(req,res,next) {

  let projectLoad = await projetModel.find({
    visibility: "Publique"
  });

  res.json({projectList: projectLoad})

});

router.get('/manage-project', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); /* get the right element under the right category under the right project */

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); /* open the user's email client when clicked*/

router.post('/asso-edit-my-profil', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/filter', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); /* skill bank & project banks filters*/

router.get('/send-application', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); /* if postulez is clicked, send notif to asso and put the profile in the dashboard under "My Candidates"*/

router.get('/cancel-application', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); /*if Annulez is clicked, send notif to asso and remove the profile from the asso dashboard*/


router.get('/volunteer-leave-project ', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/charity-archive-project', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/volunteer-edit-profile', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/charity-edit-profile', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/validate-application', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/deny-application', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard-oeuvre', async (req, res) => {
  var dashboard = await associationModel.findOne({token: req.query.token})
  .populate('projets')
  .exec()

  res.json(dashboard)
})

router.post('/create-project', async function(req, res, next) {

console.log(req.body)

  var error = []
  var result = false

  const dataProject = await projetModel.findOne({
    title: req.body.titleFromFront
  })

  if(dataProject !=null){
    error.push('Projet déjà existant')
  }

  if(error.length == 0){
    var createProject = new projetModel( 
      { 
        title: req.body.titleFromFront,
        startDate: req.body.startDateFromFront,
        endDate: req.body.endDateFromFront,
        city: req.body.cityFromFront,
        competence: JSON.parse(req.body.comprecFromFront),
        desc: req.body.descFromFront,
        image: req.body.imageFromFront,
        category: req.body.categoryFromFront,
        projectToken: uid2(32),
        visibility: req.body.visibilityFromFront,
      }
  );

  var saveProject = await createProject.save()
  
    
  }

  if (saveProject) {
    
  result=true

  var assoToken = await associationModel.findOne({token: req.body.token})
  
  projectToken = saveProject.projectToken
  assoToken.projets.push(saveProject._id)

  await assoToken.save()

  res.json({result, saveProject, error, projectToken}) 
  }
}

);

router.get('/editproject', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.post('/editproject', async function(req, res, next) {
  console.log(req.body)
  var error = []
  var result = false
  var updateProject = await projetModel.updateOne(
    { token: req.body.token },
      {title: req.body.titleFromFront,
      startDate: req.body.startDateFromFront,
      endDate: req.body.endDateFromFront,
      city: req.body.cityFromFront,
      competence: JSON.parse(req.body.comprecFromFront),
      desc: req.body.descFromFront,
      image: req.body.imageFromFront,
      category: req.body.categoryFromFront,
      token: req.body.token,
      visibility: req.body.visibilityFromFront,
    }
  )
    if (updateProject) {
    result=true
  res.json({result, updateProject, error, token: req.body.token});
    }
});*/


module.exports = router;
