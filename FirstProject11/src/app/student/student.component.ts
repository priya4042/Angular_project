import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  StudenList:Student[]=[];
  newStudent:Student=new Student();
  editStudent:Student=new Student();

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll()
{
  this.studentService.getAllStudent().subscribe(
    (response)=>{
      this.StudenList=response;
      console.log(response);
    },
    (error)=>{
      console.log(error);
    }
  );
}
SaveClick()
{
   this.newStudent.id=0;
  this.studentService.SaveStudent(this.newStudent).subscribe(
    (response)=>{
      this.getAll();
      this.newStudent.name="";
      this.newStudent.age="";
      this.newStudent.email="";
    },
    (error)=>{
      console.log(error);
    }
  );
} 

 editClick(e:any, i:number)
{
  this.editStudent=this.StudenList[i];
  //alert(this.editStudent.name);
}
updateClick()
{
// alert(this.editStudent.name)
this.studentService.UpdateStudent(this.editStudent).subscribe(
  (Response)=>{
    this.getAll();
  },
  (error)=>{
    console.log(error)
  }
)
}
deleteClick(e:any,i:number)
{
  let ans=confirm('want to delete data?')
  //alert(this.StudenList[i].id)
  this.studentService.DeleteStudent(this.StudenList[i].id).subscribe(
    (Response)=>{
      this.getAll();
    },
  (error)=>{
    console.log(error);
  }
  )
}
}

