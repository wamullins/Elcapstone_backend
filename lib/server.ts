// https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-1-2-195bdaf129cf
// this cite helped me build this starting boilerplate
import express from "express"; // need to import the defualt import, not the namespace import 
import mongoose from "mongoose";
import bodyParser from "body-parser"; 
import { Routes } from "./routes/appRouter";
import cors from "cors"

class App { 
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/ElCapDB';

    constructor() {
        this.app = express();
        this.config(); 
        this.routePrv.routes(this.app);    
        this.mongoSetup();   
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }
}

const app = new App().app

app.use(cors())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
