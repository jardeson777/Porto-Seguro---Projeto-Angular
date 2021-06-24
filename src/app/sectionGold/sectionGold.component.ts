import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectionGold',
  templateUrl: './sectionGold.component.html',
  styleUrls: ['./sectionGold.component.scss']
})
export class SectionGoldComponent implements OnInit {
    contentG:any = [];
    contentP:any = [];
    display:string = '';
    open:boolean = false;

    constructor() {
        this.contentG[0] = 'Acupuntura';
        this.contentG[1] = 'Atendimento ambulatorial e hospitalar com obstetrícia';
        this.contentG[2] = 'Cirurgias de miopia e astigmatismo';
        this.contentG[3] = 'Escleroterapia';
        this.contentG[4] = 'Fisioterapia';
        this.contentG[5] = 'Quimioterapia';
        this.contentG[6] = 'Próteses e órteses';
        this.contentG[7] = 'Transplantes de rim, medula, córnea, coração e pâncreas';
        this.contentG[8] = 'Reeducação Postura Global (RPG)';
        this.contentG[9] = 'Transtornos mentais';

        this.contentP[0] = 'conforme Rol de Procedimentos da Agência Nacional de Saúde Suplementar (ANS)';
        this.contentP[1] = '(ligadas ao ato cirúrgico e sem finalidade estética)';
        this.contentP[2] = '(conforme estabelecido pela ANS)';
        this.contentP[3] = '(coberturas adicionais ao Rol de procedimentos da ANS somente em prestadores designados)';
    }

    showPlus(){
        if(this.open){
            this.display = "none";
            this.open = false;
        } else {
            this.display = "block";
            this.open = true;
        }
    }

  ngOnInit() { }
}
