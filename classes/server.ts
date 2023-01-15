import express from 'express';
import socketIO from 'socket.io';
import http from 'http';

import * as socket from '../sockets/sockets';

import { SERVER_PORT } from '../global/enviroment';

import rolesRoutes from '../routes/rol';
import { dbConnection } from '../database/config';

export default class Server {


    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.app.use(express.static('public'));
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = new socketIO.Server(this.httpServer, { cors: { origin: true, credentials: true } });
        this.conectarDB();
        this.escucharSockets();
    }


    async conectarDB() {
        await dbConnection();
    }


    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private escucharSockets() {

        console.log('Escuchando conexiones - sockets');

        this.io.on('connection', cliente => {

            console.log('Cliente conectado.');

            socket.mensaje(cliente, this.io);

            // Desconectar
            socket.desconectar(cliente);

        });

    }

    start(callback: (() => void)) {
        this.httpServer.listen(this.port, callback);
    }
}