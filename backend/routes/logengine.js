const router = require('express').Router();
let LogEngine = require('../models/logEngine.model');

router.route('/').get((req, res) => {
    LogEngine.find()
    .then(logengines => res.json(logengines))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const userId = req.body.userId;
    const username= req.body.username;
    const name = req.body.name;
    const action = req.body.action;
    const detailedData = req.body.detailedData;
    const actionVal = req.body.actionVal;

    const newLog = new LogEngine({
       userId,
       username,
       name,
       action,
       detailedData,
       actionVal
    });

    newLog.save()
    .then(() => res.json('New log added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    LogEngine.findById(req.params.id)
      .then(logengines => {
        logengines.userId = req.body.userId;
        logengines.username= req.body.username;
        logengines.name = req.body.name;
        logengines.action = req.body.action;
        logengines.detailedData = req.body.detailedData;
        logengines.actionVal = req.body.actionVal;

        logengines.save()
          .then(() => res.json('LogEngine details updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    LogEngine.findByIdAndDelete(req.params.id)
      .then(() => res.json('LogEngine details deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;