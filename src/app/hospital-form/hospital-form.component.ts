import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    MinLengthValidator,
    Validators,
} from '@angular/forms';
import { HospitaisService } from 'src/services/hospitais.service';



@Component({
    selector: 'app-hospital-form',
    templateUrl: './hospital-form.component.html',
    styleUrls: ['./hospital-form.component.scss'],
})


export class HospitalFormComponent implements OnInit {
    @ViewChild('img') img !: ElementRef;

    form !: FormGroup;
    invalid : boolean = false;
    showSuccess : boolean = false;
    validaImgBool : boolean = false;
    errorImg : boolean = false;
    i : number = 0;

    constructor(private fb: FormBuilder, private service: HospitaisService) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            createdAt: [null, [Validators.required, Validators.minLength(3)]],
            name: [null, [Validators.required, Validators.minLength(3)]],
            image: [null, [Validators.required]],
            detail: [null, [Validators.required, Validators.minLength(3)]],
            address: [null, [Validators.required, Validators.minLength(3)]],
            phone: [null, [Validators.required, Validators.minLength(3)]],
        });


    }

    validaImg(){
        var img = new Image();
        img.src = this.img.nativeElement.value;

        if(img.naturalHeight > 0){
            this.errorImg = false;
            return true;
        } else {
            this.errorImg = true;
            return false;
        }

    }

    hasError(field: string){
        return this.form.get(field)?.errors;
    }

    onClick() {
        this.validaImg();
        if (this.form.valid && !this.errorImg) {
            this.invalid = false;

            this.service.postDate(this.form.value).subscribe(
                success =>{
                    this.showSuccess = true
                    this.form.reset() }
                ,
                error => this.hasError(error)
            );
        } else {
            this.invalid = true;
        }
    }

    close(){
        this.showSuccess = false;
    }
}
