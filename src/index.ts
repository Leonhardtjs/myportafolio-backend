import dotenv from 'dotenv';
dotenv.config();

// Paths
import 'module-alias/register';

// Servers
import Server from '@servers/server';

const server = new Server();
server.listen();