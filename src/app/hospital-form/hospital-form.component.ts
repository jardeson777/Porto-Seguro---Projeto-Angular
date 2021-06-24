import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
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
    form!: FormGroup;
    invalid: boolean = false;
    showSuccess: boolean = false;

    constructor(private fb: FormBuilder, private service: HospitaisService) {}

    ngOnInit(): void {
        this.form = this.fb.group({
            createdAt: [null, [Validators.required, Validators.minLength(3)]],
            name: [null, [Validators.required, Validators.minLength(3)]],
            image: [null, [Validators.required, Validators.minLength(3)]],
            detail: [null, [Validators.required, Validators.minLength(3)]],
            address: [null, [Validators.required, Validators.minLength(3)]],
            phone: [null, [Validators.required, Validators.minLength(3)]],
        });

    }

    hasError(field: string){
        return this.form.get(field)?.errors;
    }

    onClick() {
        this.service.remove("4");

        if (this.form.valid) {
            this.invalid = false;
            this.form.reset();

            this.service.postDate(this.form.value).subscribe(
                success =>
                    this.showSuccess = true
                ,
                error => console.error(error)
            );
        } else {
            this.invalid = true;
        }
    }

    close(){
        this.showSuccess = false;
    }
}
