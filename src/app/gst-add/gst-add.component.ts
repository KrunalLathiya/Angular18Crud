import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-add',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css'],
})
export class GstAddComponent {
  angForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private businessService: BusinessService
  ) {
    this.angForm = this.fb.group({
      person_name: ['', [Validators.required, Validators.minLength(3)]],
      business_name: ['', [Validators.required, Validators.minLength(3)]],
      business_gst_number: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{15}$/)],
      ],
    });
  }

  onSubmit() {
    if (this.angForm.valid) {
      const { person_name, business_name, business_gst_number } =
        this.angForm.value;
      this.businessService
        .addBusiness(person_name, business_name, business_gst_number)
        .subscribe({
          next: (response) =>
            console.log('Business added successfully', response),
          error: (err) => console.error('Error adding business', err),
        });
    }
  }
}
