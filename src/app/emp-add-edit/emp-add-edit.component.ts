import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm :FormGroup;
 


  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ]

  constructor(private _fb:FormBuilder, private _empService: EmployeeService,
        private _dialogRf:DialogRef<EmpAddEditComponent>
    ){
    this.empForm = this._fb.group({
      firstName:['',Validators.required],
      lastName:[''],
      email:[''],
      date:[''],
      gender:[''],
      education:[''],
      company:[''],
      experience:[''],
      package:[''],

    })
  }
  onFormSubmit(){
    
    if(this.empForm.valid){
      this._empService.postEmployee(this.empForm.value).subscribe({
        next:(val:any)=>{
          alert("Employee add success!");
          this._dialogRf.close();
          console.log(val);
        },
        error:()=>{
          alert("error")
        }
      })
    }
  }
}


