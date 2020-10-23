import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from '../shared-data.service'


@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {
  employees;
  selectedEmployee;
  found;
  submitted = false;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private SharedDataService: SharedDataService) {
    this.employees = this.SharedDataService.employeeData
  }
  // check box
  selectAll = false;
  public allowCustom = true;
  public listItems: Array<string> = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'];
  // form
  ngOnInit() {
    this.myForm = this.fb.group({
      name: [, Validators.required],
      department: ['', [Validators.required]],
    });
  }
  // on search
  onSubmit(form: FormGroup) {
    this.submitted = true;
    var id;
    this.employees.forEach(element => {
      if (element.name == form.value.name && element.departement == form.value.department) {
        id = element.code
        this.selectedEmployee = element
      }
    });
    if (id) {
      this.found = true;
    } else {
      this.found = false;
    }
    var selected = document.getElementById(id)
    var allEmployees = document.getElementsByClassName("employees")
    var allEmployeesArr = Array.from(allEmployees)
    allEmployeesArr.forEach(ele => {
      ele.classList.remove("selected")
    })
    selected.classList.add("selected")
  }
}


