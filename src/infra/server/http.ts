import express from "express"
import { HttpServer } from "../../interfaces/IServer"

export class ExpressHttpServer implements HttpServer {
    app
    constructor () {
        this.app = express()
        this.app.use(express.json())
    }


    register(method: string, url: string, callBack: Function): void {
        throw new Error("Method not implemented.")
    }
    listen(port: number): void {
        throw new Error("Method not implemented.")
    }


}