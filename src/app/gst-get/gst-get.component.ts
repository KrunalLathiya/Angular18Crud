import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-get',
  standalone: true,
  imports: [CommonModule, RouterLink, MatTableModule, MatButtonModule],
  templateUrl: './gst-get.component.html',
  styleUrl: './gst-get.component.css',
})
export class GstGetComponent implements OnInit {
  businesses: any[] = [];
  displayedColumns: string[] = [
    'person_name',
    'business_name',
    'business_gst_number',
    'actions',
  ];

  constructor(private businessService: BusinessService) {}

  ngOnInit() {
    this.businessService.getBusinesses().subscribe((data: any[]) => {
      this.businesses = data;
    });
  }

  deleteBusiness(id: string) {
    this.businessService.deleteBusiness(id).subscribe((res) => {
      console.log('Deleted');
      this.businesses = this.businesses.filter(
        (business) => business._id !== id
      );
    });
  }
}
