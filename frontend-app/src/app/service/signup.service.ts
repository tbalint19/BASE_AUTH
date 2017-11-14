import { Injectable } from '@angular/core';
import {HttpClient} from '../http/http.client';
import {SuccessResponse} from '../model/dto/success-response.model';
import {Observable} from 'rxjs/Observable';
import {SignupDTO} from '../model/dto/signup-dto.model';
import {RequestFactory} from "../factory/request-factory";
import {CheckUsernameParams} from "../model/params/check-username-params.model";
import {CheckResponse} from "../model/dto/check-response.model";
import {CheckEmailParams} from "../model/params/check-email-params.model";
import {DtoFactory} from "../factory/dto-factory";
import {SignupDtoCreator} from "../model/creator/signup-dto-creator";

@Injectable()
export class SignupService {

  constructor(
    private client: HttpClient,
    private requestFactory: RequestFactory,
    protected dtoFactory: DtoFactory
  ) { }

  public checkUsername(params: CheckUsernameParams): Observable<CheckResponse> {
    return this.client.transfer(
      this.requestFactory.createUsernameCheckRequest(params));
  }

  public checkEmail(params: CheckEmailParams): Observable<CheckResponse> {
    return this.client.transfer(
      this.requestFactory.createEmailCheckRequest(params));
  }

  public attemptSignup(creator: SignupDtoCreator): Observable<SuccessResponse> {
    return this.client.transfer(
      this.requestFactory.createSignupRequest(
        this.dtoFactory.createSignupDTO(creator)));
  }

}
