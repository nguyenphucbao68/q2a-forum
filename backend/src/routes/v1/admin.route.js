const express = require('express');
const validate = require('../../middlewares/validate');
const adminValidation = require('../../validations/admin.validation');
const adminController = require('../../controllers/admin.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/metrics').get(auth('getMetrics'), adminController.getMetrics);

router.route('/ban-user/:userId').post(auth('banUser'), validate(adminValidation.banUser), adminController.banUser);

router
  .route('/manage-questions')
  .post(
    auth('approveDeclineQuestion'),
    validate(adminValidation.approveDeclineQuestion),
    adminController.approveDeclineQuestion
  );

router
  .route('/manage-questions/:page/:limit')
  .get(auth('getPendingQuestions'), validate(adminValidation.getPendingQuestions), adminController.getPendingQuestions);

module.exports = router;
