import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public dataForm = {
    "name": "",
    "email": "",
    "mensaje": ""
  }

  public enviado = false;
  public correcto = true;
  public load = true;

  constructor(private emailService: EmailService) { }

  ngOnInit() { }

  sendEmail(form: NgForm) {

    this.load = false;

    this.emailService.sendEmail(this.dataForm).subscribe(res => {

      if (res === 1) {
        this.correcto = true;
      } else {
        this.correcto = false;
      }
      this.enviado = true;
      this.load = true;

    }, error => {
      this.correcto = false;
      this.enviado = true;
      this.load = true;
      console.log('Err: ' + error);
    });
  }



}
