import { Injectable } from '@angular/core';
import { Validators, FormBuilder, Form, FormGroup } from '@angular/forms';

@Injectable()
export class MainFormService {
  public projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.projectForm = this.formBuilder.group(
      { 
          data : this.formBuilder.group(
              {
                  id: this.formBuilder.control({ value: ''}),
                  identifier: this.formBuilder.control('', Validators.compose([
                      Validators.required,
                      Validators.minLength(6),
                      Validators.maxLength(6)
                  ])),
                  name: this.formBuilder.control('', Validators.compose([
                      Validators.required
                  ])),
                  owner: this.formBuilder.control('', Validators.compose([
                      Validators.required
                  ])),
                  description: this.formBuilder.control(''),
                  date_created: this.formBuilder.control('', Validators.compose([
                    Validators.required
                  ]))
              }
          )
      }
  );
  }

}
