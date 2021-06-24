import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
    left : string = ''; //Modificar o estilo do menu
    menu : boolean = false; //Controlador do menu, diz se ele precisa abrir ou fechar

    openMenu(){
        if(!this.menu){
            this.left = '0';
            document.body.style.overflow = 'hidden';
            this.menu = true;
        } else {
            this.left = '-8000px';
            document.body.style.overflow = 'auto';
            this.menu = false;
        }
    }

    constructor() {}

    ngOnInit() {}
}
