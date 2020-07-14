import { StateNames } from 'src/app/enums/StateNames';


export interface IActivity {
    state: StateNames;
    region: number;
    district: number;
    scoutGroup: number;
}