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
    // verifica2: any = false;
    hospital: any;
    deleteBool: boolean = false;
    idRemove: string = '';
    indiceHospital : number = 0;

    constructor(private hospitais: HospitaisService) {
        this.getter();
    }

    ngOnInit(): void {
    }

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

    openInfo(hospital: any) {
        this.indiceHospital = this.date.indexOf(hospital);

        if (this.verifica[this.indiceHospital]) { //Informações está aberta
            this.verifica[this.indiceHospital] = false;
            this.hospital = null;

        } else { //Informações está fechada
            this.verifica[this.indiceHospital] = true;
            this.hospital = hospital;
        }
    }

    confirmDelete(id:string){
        if(this.deleteBool){
            this.deleteBool = false;
        } else {
            this.idRemove = id;
            this.deleteBool = true;
            document.body.style.overflow = 'hidden';
        }
    }

    deleteFunc(check : boolean){
        if(!check){
            this.deleteBool = false;
            document.body.style.overflow = 'auto';
        } else {
            this.hospitais.remove(this.idRemove).subscribe(
                success => console.log('Removido'),
                error => console.error(error)
            );
            document.body.style.overflow = 'auto';
        }
    }
}
