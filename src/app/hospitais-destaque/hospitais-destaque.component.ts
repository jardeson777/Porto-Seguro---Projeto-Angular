import { HospitaisService } from './../../services/hospitais.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hospitais-destaque',
    templateUrl: './hospitais-destaque.component.html',
    styleUrls: ['./hospitais-destaque.component.scss'],
})
export class HospitaisDestaqueComponent implements OnInit {
    date: any;
    erro: any;
    display: string = '';
    verifica: any = [];
    verifica2: any;
    hospital: any;

    constructor(private hospitais: HospitaisService) {
        this.getter();
    }

    ngOnInit(): void {}

    getter() {
        this.hospitais.getDate().subscribe(
            (data: any) => {
                this.date = data;
            },
            (error: any) => {
                this.erro = error;
            }
        );
    }

    openInfo3(id:number){
        if(this.verifica2){
            this.hospital = null;
            this.verifica2 = false;
        } else {
            this.hospital = this.date[id-1];
            this.verifica2 = true;
        }
    }


    openInfo2(id: number) {
        this.openInfo3(id);

        if (this.verifica[id-1]) {
            this.verifica[id-1] = false;
        } else {
            this.verifica[id-1] = true;
        }
    }
}
