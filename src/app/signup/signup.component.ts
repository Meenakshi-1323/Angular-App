import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  onSubmit(formValues:any){

    console.log(formValues.value)
  }
  onClick(){
    alert("Sign up Successful")
  }

}
