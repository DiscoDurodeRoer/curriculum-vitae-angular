import { DdrSpinnerService } from 'ddr-spinner';
import { DdrConfigurationService } from 'ddr-configuration';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { NgForm } from '@angular/forms';
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

  constructor(
    private emailService: EmailService,
    private router: Router,
    private ddrConfigurationService: DdrConfigurationService,
    private ddrSpinnerService: DdrSpinnerService
  ) { }

  ngOnInit() {

    this.ddrSpinnerService.showSpinner();
    const config = this.ddrConfigurationService.getData("config");

    if (!config.showContact) {
      this.router.navigate(['/inicio']);
    }

    this.emailService.url = config.urlPHPEmail;
    this.ddrSpinnerService.hideSpinner();

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
      console.log('Err: ' , error);
    });
  }



}
