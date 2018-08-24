import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '../../../node_modules/@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signupForm:FormGroup;
  constructor(
    public formbuider:FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams) 
    {
      this.signupForm = this.formbuider.group({
        name:['',[Validators.required,Validators.minLength(3)]],
        username:['',[Validators.required,Validators.minLength(3)]],
        email:['',Validators.compose([Validators.required,Validators.email])],
        password:['',[Validators.required,Validators.minLength(6)]]
      });

    }

  onSubmit():void{
    console.log("deu certo");
  }

}
