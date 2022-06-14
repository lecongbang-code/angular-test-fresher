import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Student } from 'src/app/models/Students';
// import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    // public serverHttp: ServiceService,
    ) { }

  public pipe = new DatePipe('en-US');

  public birthday: Date = new Date("06/07/1990 10:30");
  public minDate: Date = new Date("06/07/1900 09:00");
  public maxDate: Date = new Date("06/07/2222 09:00");

  public listClass = ['Class 1','Class 2','Class 3','Class 4','Class 5'];

  public listStudent: Student[] = [];

  addNewStudentForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    birthday: new FormControl(this.birthday),
    studentcode: new FormControl('', [Validators.required]),
    classcode: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.getStudent();
  }

  get f()
  {
    return this.addNewStudentForm.controls;
  }

  submitAddNewStudent()
  {
    if(this.addNewStudentForm.valid)
    {
      this.openDialog();
    }
    else console.log("Error: add new student");
  }

  openDialog()
  {
    let dialogRef = this.dialog.open(DialogComponent, {data:this.addNewStudentForm.value});
    dialogRef.afterClosed().subscribe(result => {
      if(result == 'true')
      {
        this.addNewStudent(this.addNewStudentForm.value);
      }
    })
  }

  addNewStudent(student:Student)
  {
    this.listStudent.push(student);
    localStorage.setItem('listStudent', JSON.stringify(this.listStudent));
    console.log("Push Student", this.listStudent);
  }

  getStudent()
  {
    if(JSON.parse(localStorage.getItem('listStudent')!))
    {
      this.listStudent = JSON.parse(localStorage.getItem('listStudent')!);
      console.log("Get Student", this.listStudent);
    }
  }

  // --------- Demo -----------
  // getStudent()
  // {
  //   this.serverHttp.getStudent().subscribe((data) => {
  //     if(data)
  //     {
  //       console.log(data);
  //     }
  //   })
  // }
  // --------- Demo -----------
}