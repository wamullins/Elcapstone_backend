import { Request, Response } from 'express';
import { Climb } from '../models';

export class ClimbController {

    public addClimb = async (req: Request, res: Response) => {  
        try {
            const newClimb =  new Climb(req.body);
            newClimb.save();
            return res.json(newClimb)
        } catch (e: any) {
            console.log(e);
            return res.send(e.message);
        }
    }
    public getClimbs = async (req: Request, res: Response) => {   
        try {
            const climbs = await Climb.find({});
            res.json(climbs)
        } catch (e: any) {
            console.log(e)
            res.send(e.message)
        }     
    }
    public getClimbByID = async (req: Request, res: Response) => {          
        try {
            const climb = await Climb.findById(req.params.climbId)
            if (!climb) throw Error('Climb not found');
            return res.json(climb);
        } catch (e:any) {
            console.log(e)
            return res.send(e.message)
        }
    }
    public deleteClimbByID = async (req: Request, res: Response) => {  
        try {
            const deletedClimb = await Climb.findByIdAndDelete(req.params.climbId)
            if (deletedClimb) {
                return res.json(deletedClimb);
            }
            return res.send("Climb ID Not Found");
        } catch (e:any) {
            console.log(e);
            res.send(e.message);
        }
    }
    public updateClimbByID = async (req: Request, res: Response) => {         
        try {
            const updatedClimb = await Climb.findByIdAndUpdate(req.params.climbId, req.body, { new: true})
            if (updatedClimb) {
                return res.json(updatedClimb);
            }
            return res.send("Climb ID Not Found");
        } catch (e:any) {
            console.log(e);
            res.send(e.message);
        }
    }


    // public getClimbByID (req: Request, res: Response) {           
    //     Climb.findById(req.params.climbId, (err:any, climb:any) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(climb);
    //     });
    // }
   
   
}