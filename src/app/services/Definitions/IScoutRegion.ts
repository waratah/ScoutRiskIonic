import { IGrouping } from './IGrouping';
import { IScoutDistrict } from './IScoutDistrict';

export interface IScoutRegion extends IGrouping {
    code: number;
    districts: IScoutDistrict[];
}