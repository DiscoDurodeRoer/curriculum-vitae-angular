import { ContactForm } from './../../models/contact';
import { DdrSpinnerService, DdrConfigService, DdrToastService } from 'ddr-library';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { TranslateService } from '../../services/translate.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public dataForm: ContactForm;

  public location: any;
  public optionsMap: any;

  constructor(
    private emailService: EmailService,
    private router: Router,
    private ddrConfigurationService: DdrConfigService,
    private ddrSpinnerService: DdrSpinnerService,
    private ddrToast: DdrToastService,
    private translate: TranslateService
  ) { 
  }

  ngOnInit() {

    this.dataForm = new ContactForm();
    const showContact = this.ddrConfigurationService.getData("config.showContact");

    if (!showContact) {
      this.router.navigate(['/inicio']);
    }

    this.emailService.url = this.ddrConfigurationService.getData("config.urlPHPEmail");
    this.location = this.ddrConfigurationService.getData('data.location');
    this.optionsMap = {
      center: {
        lat: this.location.position.lat,
        lng: this.location.position.lng
      },
      zoom: 6
    };

  }

  sendEmail(form: NgForm) {


    this.ddrSpinnerService.showSpinner();

    this.emailService.sendEmail(this.dataForm).subscribe(res => {

      if (res === 1) {
        this.ddrToast.addSuccessMessage(
          this.translate.getTranslate("label.success"), 
          this.translate.getTranslate("label.send.success")
        );
        this.dataForm = new ContactForm();
      } else {
        this.ddrToast.addErrorMessage(
          this.translate.getTranslate("label.error"), 
          this.translate.getTranslate("label.send.error")  
        );
      }

      this.ddrSpinnerService.hideSpinner();
    }, error => {
      console.log('Err: ' , error);
      this.ddrSpinnerService.hideSpinner();
    });
  }



}
