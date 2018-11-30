import { Component, OnInit } from '@angular/core';
import {TaskApiService} from "../task-api/task-api.service";

@Component({
  selector: 'wcu-plan-sheet',
  templateUrl: './plan-sheet.component.html',
  styleUrls: ['./plan-sheet.component.scss']
})
export class PlanSheetComponent implements OnInit {

  errorMessage: string = '';
  plan = {};

  constructor(private taskApi: TaskApiService) {
    console.log('PLAN:', this.plan);
  }

  ngOnInit() {
    this.taskApi.get().subscribe(
        task => this.plan = task,
        error => this.errorMessage = <any>error
    )
  }
}

/* {
    title: '2018',
    description: '2018-as karácsonyi nagytakarítás',
    done: false,
    subItems: [
      {
        title: 'Konyha',
        description: '',
        done: false,
        subItems: [
          {
            title: 'Ablakmosás',
            description: '',
            done: false,
            subItems: [

            ]
          },
          {
            title: 'Hűttőtakaríttás',
            description: '',
            done: false,
            subItems: [

            ]
          },
          {
            title: 'Szekrények',
            description: '',
            done: false,
            subItems: [
              {
                title: 'Kívül',
                description: '',
                done: false,
                subItems: [
                  {
                    title: 'Leporolás',
                    description: '',
                    done: false,
                    subItems: [

                    ]
                  },
                  {
                    title: 'Lemosás',
                    description: '',
                    done: false,
                    subItems: [

                    ]
                  }
                ]
              },
              {
                title: 'Belül',
                description: '',
                done: false,
                subItems: [
                  {
                    title: 'Rendberakás',
                    description: '',
                    done: false,
                    subItems: [

                    ]
                  },
                  {
                    title: 'Kitakaríttás',
                    description: '',
                    done: false,
                    subItems: [

                    ]
                  },
                ]
              }
            ]
          },
          {
            title: 'Ülőkék alatt mögött, stb',
            description: '',
            done: false,
            subItems: [

            ]
          },
          {
            title: 'Pókhálótlaníttás',
            description: '',
            done: false,
            subItems: [

            ]
          }
        ]
      },
      {
        title: 'Fürdőszoba',
        description: '',
        done: false,
        subItems: [
          {
            title: 'Ablakmosás',
            description: '',
            done: false,
            subItems: [

            ]
          },
          {
            title: 'Csempemosás',
            description: '',
            done: true,
            subItems: [

            ]
          },
          {
            title: 'Kád kihipózása',
            description: '',
            done: true,
            subItems: [

            ]
          },
          {
            title: 'Minden vízkövetlenítése (Citromsavazás)',
            description: '',
            done: true,
            subItems: [

            ]
          },
          {
            title: 'WC körül fullra kifertőtleníttés, vízkőmentesíttés',
            description: '',
            done: true,
            subItems: [

            ]
          },
          {
            title: 'Mosdó körül fullra kifertőtleníttés, vízkőmentesíttés',
            description: '',
            done: true,
            subItems: [

            ]
          },
          {
            title: 'Gépek takaríttása kívül-belül',
            description: '',
            done: true,
            subItems: [

            ]
          }
        ]
      },
      {
        title: 'Előszoba',
        description: '',
        done: false,
        subItems: [

        ]
      },
      {
        title: 'Szoba',
        description: '',
        done: false,
        subItems: [

        ]
      },
      {
        title: 'Egyebek',
        description: '',
        done: false,
        subItems: [

        ]
      }
    ]
  } */