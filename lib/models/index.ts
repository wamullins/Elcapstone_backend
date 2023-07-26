import * as mongoose from 'mongoose';
import { ClimbSchema } from './climb';

export const Climb = mongoose.model('Climb', ClimbSchema)


