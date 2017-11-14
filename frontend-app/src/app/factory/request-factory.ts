import {HttpRequest} from "../model/http/http-request.model";
import {Injectable} from "@angular/core";
import {SignupDTO} from "../model/dto/signup-dto.model";
import {LoginDTO} from "../model/dto/login-dto.model";
import {ConfirmationDTO} from "../model/dto/confirmationDTO.model";
import {Reset} from "../model/dto/reset.model";
import {ResetEmailParams} from "../model/params/reset-email-params.model";
import {ConfirmEmailParams} from "../model/params/confirm-email-params.model";
import {CheckUsernameParams} from "../model/params/check-username-params.model";
import {CheckEmailParams} from "../model/params/check-email-params.model";

@Injectable()
export class RequestFactory {

  public createUsernameCheckRequest(params: CheckUsernameParams): HttpRequest {
    return new HttpRequest("/api/check/username", "GET", params);
  }

  public createEmailCheckRequest(params: CheckEmailParams): HttpRequest {
    return new HttpRequest("/api/check/email", "GET", params);
  }

  public createSignupRequest(user: SignupDTO): HttpRequest {
    return new HttpRequest("/api/auth/signup", "POST", user);
  }

  public createLoginRequest(user: LoginDTO): HttpRequest {
    return new HttpRequest("/api/auth/login", "POST", user);
  }

  public createConfirmEmailRequest(params: ConfirmEmailParams): HttpRequest {
    return new HttpRequest("/api/confirm/start", "GET", params);
  }

  public createConfirmRequest(confirmation: ConfirmationDTO): HttpRequest {
    return new HttpRequest("/api/confirm/finish", "POST", confirmation);
  }

  public createResetEmailRequest(params: ResetEmailParams): HttpRequest{
    return new HttpRequest("/api/reset/start", "GET", params);
  }

  public createResetRequest(reset: Reset): HttpRequest{
    return new HttpRequest("/api/reset/finish", "POST", reset);
  }
}
