import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { NgForm } from '@angular/forms';
import { DatosService } from '../../services/datos.service';
import { Router } from '@angular/router';

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
  public load = false;

  constructor(private emailService: EmailService,
    private dataService: DatosService,
    private router: Router) { }

  ngOnInit() {
    this.dataService.url = DatosService.DATOS;
    this.dataService.responseType = DatosService.JSON;
    this.dataService.getData().subscribe(data => {
      
      const showPage = data["showContact"];

      if (!showPage) {
        this.router.navigate(['/inicio']);
      }

      this.emailService.url = data["urlPHPEmail"];
      this.load = true;
    }, error => {
      console.log("Error: " + error);
      this.load = true;
    });
  }

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
