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
    deleteBool: boolean = false;
    idRemove: string = '';

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
