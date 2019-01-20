import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private service: LogicService) {
    this.form = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit() {}
  submitHandler() {
    this.service.addTask(this.form.value.text);
    this.form.reset();
  }
}
