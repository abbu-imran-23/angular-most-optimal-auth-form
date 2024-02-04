import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() type: string;
  @Input() formControlValue: string;
  @Input() authForm: FormGroup;

  ngOnInit(): void {
    
  }


}
