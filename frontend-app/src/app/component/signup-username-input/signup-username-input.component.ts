import {Component, OnInit} from '@angular/core';
import {SignupStatus} from "../../status/signup-status";
import {CheckUsernameParams} from "../../model/params/check-username-params.model";
import {CheckResponse} from "../../model/dto/check-response.model";
import {SignupService} from "../../service/signup.service";

@Component({
  selector: 'signup-username-input',
  templateUrl: './signup-username-input.component.html',
  styleUrls: ['./signup-username-input.component.css']
})
export class SignupUsernameInputComponent implements OnInit {

  constructor(
    private service: SignupService,
    protected status: SignupStatus
  ) { }

  ngOnInit() {
  }

  protected checkUsername(): void {
    if (!this.status.usernameIsValid()){ return; }
    this.service.checkUsername(new CheckUsernameParams(this.status.creator.username))
      .subscribe((response: CheckResponse) => this.handleResponse(response));
  }

  private handleResponse(response: CheckResponse): void {
    this.status.setUsernameAvailability(response.available);
  }

}
