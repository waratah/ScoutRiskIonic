import { IGrouping } from './IGrouping';
import { IScoutGroup } from './IScoutGroup';

export interface IScoutDistrict extends IGrouping {
    code: number;
    groups: IScoutGroup[];
}