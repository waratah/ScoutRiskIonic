import { Injectable } from '@angular/core';
import { find } from 'lodash';

import { StateNames } from 'src/app/enums/StateNames';
import { IScoutState } from '../Definitions/IScoutState';
import { IScoutRegion } from '../Definitions/IScoutRegion';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  private StatesList: IScoutState[];

  constructor() {
    this.StatesList = [
      {
        code: StateNames.NSW,
        abbreviation: 'NSW',
        name: 'New South Wales',
        regions: [
          {
            code: 100,
            abbreviation: 'SM',
            name: 'South Met',
            districts: [
              {
                code: 100,
                abbreviation: 'RNP',
                name: 'Royal National Park',
                groups: [
                  {
                    code: 1000,
                    abbreviation: 'Heathcote',
                    name: 'Ist Heathcote'
                  },
                  {
                    code: 1001,
                    abbreviation: 'Loftus',
                    name: 'Ist Loftus'
                  },
                  {
                    code: 1002,
                    abbreviation: '3rds',
                    name: '3rd Engadine (Bosco)'
                  },
                  {
                    code: 1003,
                    abbreviation: 'Engadine',
                    name: '1st Engadine'
                  }
                ],
              },
              {
                code: 102,
                abbreviation: 'PH',
                name: 'Port Hacking',
                groups: [
                  {
                    code: 2000,
                    abbreviation: 'Car',
                    name: 'Caringbah'
                  }
                ],
              },
              {
                code: 103,
                abbreviation: 'Ban',
                name: 'Banberra',
                groups: [],
              },
              {
                code: 104,
                abbreviation: 'CV',
                name: 'Canterbury Vale',
                groups: [],
              },
              {
                code: 105,
                abbreviation: 'CV',
                name: 'Canterbury Vale',
                groups: [],
              },
              {
                code: 106,
                abbreviation: 'Yar',
                name: 'Yaroona',
                groups: [],
              },
              {
                code: 107,
                abbreviation: 'IC',
                name: 'Iron Cove',
                groups: [],
              },
              {
                code: 108,
                abbreviation: 'EH',
                name: 'East Hills\Georges River',
                groups: [],
              },
              {
                code: 109,
                abbreviation: 'FKS',
                name: 'Fairfax\Kingsford Smith',
                groups: [],
              },
              {
                code: 109,
                abbreviation: 'FKS',
                name: 'Fairfax\Kingsford Smith',
                groups: [],
              },
              {
                code: 109,
                abbreviation: 'Ban',
                name: 'Bankstown',
                groups: [],
              },
            ],
          },
          {
            code: 101,
            abbreviation: 'Hume',
            name: 'Hume',
            districts: [],
          },
          {
            code: 102,
            abbreviation: 'SCT',
            name: 'South Coast and Tablelands',
            districts: [],
          },
          {
            code: 103,
            abbreviation: 'GW',
            name: 'Greater Western',
            districts: [],
          },
          {
            code: 104,
            abbreviation: 'SN',
            name: 'Sydney North',
            districts: [],
          },
          {
            code: 105,
            abbreviation: 'NW',
            name: 'North West',
            districts: [],
          },
          {
            code: 106,
            abbreviation: 'NC',
            name: 'North Coast',
            districts: [],
          },
          {
            code: 107,
            abbreviation: 'Riv',
            name: 'Riverina',
            districts: [],
          },
        ],
      },
      {
        code: StateNames.Victoria,
        abbreviation: 'VIC',
        name: 'Victoria',
        regions: [],
      },
      {
        code: StateNames.QLD,
        abbreviation: 'Qld',
        name: 'Queensland',
        regions: [],
      },
      {
        code: StateNames.NT,
        abbreviation: 'NT',
        name: 'Northern Territory',
        regions: [],
      },
      {
        code: StateNames.SA,
        abbreviation: 'SA',
        name: 'South Australia',
        regions: [],
      },
      {
        code: StateNames.Tasmania,
        abbreviation: 'Tas',
        name: 'Tasmania',
        regions: [],
      },
      {
        code: StateNames.WA,
        abbreviation: 'WA',
        name: 'Western Australia',
        regions: [
          {
            code: 500,
            abbreviation: 'Beeliar',
            name: 'Beeliar',
            districts: []
          },
          {
            code: 501,
            abbreviation: 'Beeloo',
            name: 'Beeloo',
            districts: []
          },
          {
            code: 502,
            abbreviation: 'Canning',
            name: 'Canning River',
            districts: []
          },
          {
            code: 503,
            abbreviation: 'Melville',
            name: 'Melville',
            districts: []
          },
          {
            code: 504,
            abbreviation: 'Minderup',
            name: 'Minderup',
            districts: []
          },
          {
            code: 505,
            abbreviation: 'Minnawarra',
            name: 'Minnawarra',
            districts: []
          },
          {
            code: 506,
            abbreviation: 'Peel',
            name: 'Peel',
            districts: []
          },
          {
            code: 507,
            abbreviation: 'River Ranges',
            name: 'River Ranges',
            districts: []
          },
          {
            code: 508,
            abbreviation: 'Bilgoman',
            name: 'Bilgoman',
            districts: []
          },
          {
            code: 509,
            abbreviation: 'Central Swan',
            name: 'Central Swan',
            districts: []
          },
          {
            code: 510,
            abbreviation: 'Joondalup',
            name: 'Joondalup',
            districts: []
          },
          {
            code: 511,
            abbreviation: 'Kalamunda',
            name: 'Kalamunda',
            districts: []
          },
          {
            code: 512,
            abbreviation: 'Kambarang',
            name: 'Kambarang',
            districts: []
          },
          {
            code: 513,
            abbreviation: 'Sunset Coast',
            name: 'Sunset Coast',
            districts: []
          },
          {
            code: 514,
            abbreviation: 'Swan Valley',
            name: 'Swan Valley',
            districts: []
          },
          {
            code: 515,
            abbreviation: 'Wanneroo',
            name: 'Wanneroo',
            districts: []
          },
          {
            code: 516,
            abbreviation: 'Kimberley',
            name: 'Kimberley',
            districts: []
          },
          {
            code: 517,
            abbreviation: 'Midwest',
            name: 'Midwest',
            districts: []
          },
          {
            code: 518,
            abbreviation: 'Pilbara',
            name: 'Pilbara',
            districts: []
          },
          {
            code: 519,
            abbreviation: 'Avon',
            name: 'Avon',
            districts: []
          },
          {
            code: 520,
            abbreviation: 'Goldfields',
            name: 'Goldfields',
            districts: []
          },
          {
            code: 521,
            abbreviation: 'South West Coastal',
            name: 'South West Coastal',
            districts: []
          },
          {
            code: 522,
            abbreviation: 'Southern Forest',
            name: 'Southern Forest',
            districts: []
          },
          {
            code: 523,
            abbreviation: 'Stirling',
            name: 'Stirling',
            districts: []
          },
        ],
      },
    ];
  }

  States() {
    return this.StatesList;
  }

  public Regions(state: StateNames): IScoutRegion[] {

    return find(this.StatesList, (x => x.code === state)).regions;
  }
}

