import { Router } from 'express';
import {User} from '../models';
const router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.create({firstName: "Zachary", lastName: "Freed", email: "a@a.com"});
  res.send('respond with a resource');
});

export default router;
