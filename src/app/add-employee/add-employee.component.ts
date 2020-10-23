import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { from } from 'rxjs';
import {SharedDataService} from '../shared-data.service'


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  // stingDate
  submited;
  myForm: FormGroup;
  constructor(private fb: FormBuilder , private SharedDataService:SharedDataService) { 

  }
  // date
   public dateOfBirth: Date ;
  public format = 'MM/dd/yyyy';

  //departement 
  public allowCustom = true;
  public listItems: Array<string> = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'];

  // form
  ngOnInit() {
    this.myForm = this.fb.group({
      name: [, Validators.required],
      department:['', [Validators.required]],
      code:['', [Validators.required]],
      gender:['', [Validators.required]],
      // dateOfBirth:[Validators.required],


    });
  }

    onSubmit(form: FormGroup) {
      this.submited=true;
      // this.stingDate = JSON.stringify(this.dateOfBirth);
      console.log(this.dateOfBirth)
    var date = this.dateOfBirth.toDateString()
      var obj ={
        name:form.value.name,
        code:form.value.code,
        gender:form.value.gender,
        departement:form.value.department,
        checkEmployee:false,
        date:date
      }
      this.SharedDataService.employeeData.push(obj)
      setTimeout(() => {
        this.submited = false
      }, 2000);
      this.myForm.reset();

    }

}
