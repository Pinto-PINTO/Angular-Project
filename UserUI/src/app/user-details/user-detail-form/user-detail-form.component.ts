import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from 'src/app/shared/user-detail.model';
import { UserDetailService } from 'src/app/shared/user-detail.service';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styles: [
  ]
})
export class UserDetailFormComponent {   // Whenever instace of UserDetailForm component is created the instance of service will be passed

    // injecting sevice from user-detail.service
    constructor(public service:UserDetailService, private toastr:ToastrService) {}

    onSubmit(form: NgForm){  // the parameter form is of type NgForm
      
      // based on id checks whether its an insert or update
      if(this.service.formData.userId == 0) { // userId is zero for insertion records
        this.insertRecord(form);
      } 
      else 
        this.updateRecord(form);
    }


    // Insert Record
    insertRecord(form: NgForm) {
      // uses postUserDetail() method created in service class
      this.service.postUserDetail().subscribe(  // subscribing to the observarable returned in the postUserDetail method


      // if request is successful
      res => {
        this.reset(form); // if success -> reset form fields
        this.service.refreshList();
        this.toastr.success("User Details Submitted Successfully")  // success message
      },

      // handling errors
      err => { console.log(err); }
      );

    }


    // Update Record
    updateRecord(form: NgForm) {
        // call the put method from web ui
        this.service.putUserDetail().subscribe(  // subscribing to the observarable

          res => {
            this.reset(form); // if success -> reset form fields
            this.service.refreshList();  // refresh page after update
            this.toastr.info("User Details Updated Successfully")  // update message
          },

          err => { console.log(err); }
        );
    }

    // resetting form fields
    reset(form: NgForm) {
      form.form.reset();
      this.service.formData = new UserDetail();  // fresh instance
    }


}
