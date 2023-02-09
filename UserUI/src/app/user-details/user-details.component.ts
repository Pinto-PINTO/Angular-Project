import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/shared/user-detail.model';
import { UserDetailService } from 'src/app/shared/user-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit{

  // injecting sevice from user-detail.service
  constructor(public service:UserDetailService, private toastr:ToastrService) {}

  // refreshList is call inside the below function
  // because this function is invoked when the user-detail-component is completely rendered
  ngOnInit(): void {
    this.service.refreshList()
  }


  // Populating the form, paramater has format UserDetail
  populateForm(selectedRecord: UserDetail) {

    // update the service.formData in service class in the form fields
    this.service.formData = Object.assign({}, selectedRecord);   // first make copy of selectedRecord object then assign to formData 
  }


  // parameter is the id therefore number
  onDelete(id:number) {
    
    this.service.deleteUserDetail(id)
    .subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error("User Details Deleted Successfully")  // success message
      },
      err => { console.log(err) }
    )
    
    
  }

}
