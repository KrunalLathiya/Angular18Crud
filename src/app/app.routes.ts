import { Routes } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';

export const routes: Routes = [
  { path: 'business/create', component: GstAddComponent },
  { path: 'business/edit/:id', component: GstEditComponent },
  { path: 'business', component: GstGetComponent },
];
