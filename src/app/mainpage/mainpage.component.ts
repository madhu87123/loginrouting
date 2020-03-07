import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MainpageComponent implements OnInit {
  constructor(private builder: FormBuilder, private router: Router) { }
  registerForm: FormGroup;
  submitted = false;
user : any={firstName: '',
           surName: '',
            email: '',
          };
  ngOnInit() {
    this.registerForm = this.builder.group({
      firstName: ['', Validators.required],
      surName: [''],
      Email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get val() {
    return this.registerForm.controls;
  }

  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else{
    // console.log(this.registerForm.value);
   
    console.log('SUCCESS!! \n\n' + JSON.stringify(this.registerForm.value, null, 5));
    // console.log(this.user);
    this.router.navigate(['/dashboard']);
    }
  }
  
}
