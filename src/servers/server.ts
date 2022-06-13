import express, { Application } from "express";
import cors from 'cors';

class Server {

    private port : string;
    private app  : Application;

    constructor() {
        this.port = process.env.PORT || '';
        this.app = express();
    }

    middlewares() : void {
        // Cors
        this.app.use(cors());

        // Json
        this.app.use(express.json());

        // Public folder
        this.app.use(express.static('public'));
    }

    listen() : void {
        // Listening server
        this.app.listen(this.port, () => {
            console.log(`Server listening in port ${ this.port } ✅`);
        });
    }
}

export default Server;