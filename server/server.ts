import 'dotenv/config';
import express from 'express';
import { routes } from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const SERVER_PORT = process.env.SERVER_PORT || 5550;
const SERVER_PREFIX = process.env.SERVER_PREFIX || '[# Server]';

const server = express();

server.use(cors({origin: [`http://localhost:${SERVER_PORT}`, 'http://127.0.0.1:5500']}));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(routes.confRoutes);
server.use(routes.passRoutes);

server.listen(SERVER_PORT, () => {
  console.log(`${SERVER_PREFIX} Running on port: ${SERVER_PORT}`);
});