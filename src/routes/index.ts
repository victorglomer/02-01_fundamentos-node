import { Router } from 'express';
import transactionRouter from './transaction.routes';

const routes = Router();

routes.get('/teste', (request, response) => {
  return response.send('jjj');
});

routes.use('/transactions', transactionRouter);

export default routes;
