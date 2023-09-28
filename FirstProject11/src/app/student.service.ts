import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient){}
 getAllStudent():Observable<any>
  { 
   return this.httpClient.get<any>("https://localhost:44334/api/Student");
    
  }

  SaveStudent(newStudent:Student):Observable<Student>
  {
   return this.httpClient.post<Student>("https://localhost:44334/api/Student",newStudent);
  }

  UpdateStudent(editStudent:Student):Observable<Student>
  {
    return this.httpClient.put<Student>("https://localhost:44334/api/Student",editStudent);
  }

  DeleteStudent(id:Number):Observable<any>
  {
    return this.httpClient.delete<any>("https://localhost:44334/api/Student/"+id);
  }
}

