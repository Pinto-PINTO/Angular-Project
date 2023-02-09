import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient) { }

  formData: UserDetail = new UserDetail();   // creating new object UserDetail with the default values
  
  
  readonly baseURL = "https://localhost:44342/api/userdetails";

  // 1. POST REQUEST (to make http requests from angular app to the web api)
  postUserDetail() {
    return this.http.post(this.baseURL, this.formData)  // returns an observarable
  }


  // 2. GET REQUEST (retrieve all users from web api)
  list: UserDetail[];  // save all records in the list

  refreshList() {
    this.http.get(this.baseURL).toPromise().then(res => this.list = res as UserDetail[])  // callback function to get the response from the server and put into the UserDetail list.
  }


  // 3. PUT REQUEST (updating record of a user)
  putUserDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.userId}`, this.formData)  // we need to pass the id for the url in put request
  } // returns an observarable


  // 4. DELETE REQUEST (delete a record)
  deleteUserDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`)
  } // returns an observarable

}
