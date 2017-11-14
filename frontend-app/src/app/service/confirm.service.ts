import { Injectable } from '@angular/core';
import {HttpClient} from '../http/http.client';
import {ConfirmationDTO} from "../model/dto/confirmationDTO.model";
import {Observable} from "rxjs/Observable";
import {TokenResponse} from "../model/dto/token-response";
import {RequestFactory} from "../factory/request-factory";
import {HttpRequest} from "../model/http/http-request.model";
import {SuccessResponse} from "../model/dto/success-response.model";
import {ConfirmEmailParams} from "../model/params/confirm-email-params.model";


@Injectable()
export class ConfirmService {

  constructor(private client: HttpClient, private _factory: RequestFactory) {}

  public requestConfirm(confirmEmailParams: ConfirmEmailParams): Observable<SuccessResponse> {
    return this.client.transfer(this._factory.createConfirmEmailRequest(confirmEmailParams));
  }

  public attemptConfirm(confirmation: ConfirmationDTO): Observable<TokenResponse> {
    return this.client.transfer(this._factory.createConfirmRequest(confirmation));
  }

}
