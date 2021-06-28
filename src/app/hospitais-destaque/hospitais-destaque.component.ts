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
    hospital1 : any;
    deleteBool: boolean = false;
    idRemove: string = '';
    indiceHospital : number = 0;
    closeSuccess : boolean = false;
    verifica2 : boolean = false;

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

        if (this.verifica[this.indiceHospital]) { //Informações fecha
            this.verifica[this.indiceHospital] = false;
            this.hospital1 = null;
        } else { //Informaçoes abre
            this.verifica[this.indiceHospital] = true;
            this.hospital1 = hospital;
        }
    }

    verificaDisplay(hospital : any){
        this.indiceHospital = this.date.indexOf(hospital);
        return this.verifica[this.indiceHospital];
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
            this.hospitais.removeDate(this.idRemove).subscribe(
                success => {
                    this.deleteBool = false;
                    this.closeSuccess = true;
                    document.body.style.overflow = 'hidden';
                    this.getter();
                },
                error => console.error(error)
            );
            document.body.style.overflow = 'auto';
        }
    }

    close(){
        if(this.closeSuccess){
            document.body.style.overflow = 'auto';
            this.closeSuccess = false;
        }
    }
}
