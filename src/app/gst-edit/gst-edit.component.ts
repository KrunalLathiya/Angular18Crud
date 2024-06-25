import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BusinessService } from '../business.service';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gst-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './gst-edit.component.html',
  styleUrl: './gst-edit.component.css',
})
export class GstEditComponent implements OnInit {
  angForm!: FormGroup;
  business: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_gst_number: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.bs.getBusinessById(params['id']).subscribe((res) => {
        this.business = res;
        this.angForm.patchValue({
          person_name: this.business.person_name,
          business_name: this.business.business_name,
          business_gst_number: this.business.business_gst_number,
        });
      });
    });
  }

  updateBusiness() {
    this.route.params.subscribe((params) => {
      this.bs
        .updateBusiness(params['id'], this.angForm.value)
        .subscribe((res) => {
          console.log('Business updated successfully');
          this.router.navigate(['/business']);
        });
    });
  }
}
