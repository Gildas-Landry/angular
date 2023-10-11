import { Supplier } from './../../Supplier';
import { createInjectableType } from '@angular/compiler';
import { Component, Inject, OnInit,NgZone, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { MasterService } from 'src/app/master.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { SuppliersComponent } from 'src/app/pages/suppliers/suppliers.component';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  supplierForm:FormGroup;
  constructor(@Inject (MAT_DIALOG_DATA) public data:any ,private ref:MatDialogRef<PopupComponent>
  ,private master:MasterService, private http:HttpClient,private router:Router,private builder:FormBuilder,
  private dialogRef:MatDialogRef<SuppliersComponent>)
  {

    this.supplierForm=this.builder.group(
  {

    name:'',
    address:'',
    phone_number:'',
    email:'',
    supplier_picture:''
  });
   }

  ngOnInit(): void {
    this.supplierForm.patchValue(this.data);
  }
  closePopup(){
    this.ref.close();
  }

  saveProduct(){
    if(this.supplierForm.valid){
      if(!this.data){
        console.log(this.supplierForm.value)
        this.master.addSupplier(this.supplierForm.value).subscribe(() =>
        {
          alert('Supplier added succesfully');
          this.dialogRef.close(true);
          console.log('successfully added data');
        })
      }
      else{
        this.master.updateSupplier(this.data.id,this.supplierForm.value).subscribe(() =>
        {
          alert('Supplier updated succesfully');
          this.dialogRef.close(true);
          console.log('successfully updated data');
        })

      }
    }

  }
}
