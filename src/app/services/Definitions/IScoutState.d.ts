import { IGrouping } from './IGrouping';
import { IScoutRegion } from './IScoutRegion';
import { StateNames } from 'src/app/enums/StateNames';

export interface IScoutState extends IGrouping {
    code: StateNames;
    regions: IScoutRegion[];
}