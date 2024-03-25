import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'InputField',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inputfield.html',
  styleUrl: './inputfield.css'
})
export class Inputfield {
  @Input('label') label;
  @Input('name') name;
  @Input('placeholder') placeholder;
  @Input('error_msg') error_msg;

}
