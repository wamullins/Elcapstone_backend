import { Request, Response } from "express";
import { ClimbController } from "../controllers/climbController"

export class Routes {      
    
    public climbController: ClimbController = new ClimbController();

    public routes(app: any): void {     // i added the : any here to keep it from having an error line       
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'Welcome to the home page of the el capstone project'
            })
        }) 

        // climb routes
        app.route('/climbs') 
            // GET endpoint 
            .get(this.climbController.getClimbs)      
            // POST endpoint
            .post(this.climbController.addClimb);

        // climb detail
        app.route('/climbs/:climbId')
            // specific climb
            .get(this.climbController.getClimbByID)
            .put(this.climbController.updateClimbByID)
            .delete(this.climbController.deleteClimbByID)             
    }
}