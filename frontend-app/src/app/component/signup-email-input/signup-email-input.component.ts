import {Component, OnInit} from '@angular/core';
import {SignupStatus} from "../../status/signup-status";
import {CheckEmailParams} from "../../model/params/check-email-params.model";
import {CheckResponse} from "../../model/dto/check-response.model";
import {SignupService} from "../../service/signup.service";

@Component({
  selector: 'signup-email-input',
  templateUrl: './signup-email-input.component.html',
  styleUrls: ['./signup-email-input.component.css']
})
export class SignupEmailInputComponent implements OnInit {

  constructor(
    private service: SignupService,
    protected status: SignupStatus
  ) { }

  ngOnInit() {
  }

  protected checkEmail(): void {
    if (!this.status.emailIsValid()){ return; }
    this.service.checkEmail(new CheckEmailParams(this.status.creator.email))
      .subscribe((response: CheckResponse) => this.handleResponse(response));
  }

  public handleResponse(response: CheckResponse): void {
    this.status.setEmailAvailability(response.available);
  }

}
