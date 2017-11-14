import {Injectable} from "@angular/core";
import {SignupDtoCreator} from "../model/creator/signup-dto-creator";
import {SignupDTO} from "../model/dto/signup-dto.model";
import {LoginDtoCreator} from "../model/creator/login-dto-creator";
import {LoginDTO} from "../model/dto/login-dto.model";

@Injectable()
export class DtoFactory {

  public createSignupDTO(creator: SignupDtoCreator): SignupDTO {
    let dto = new SignupDTO();
    dto.username = creator.username;
    dto.email = creator.email;
    dto.password = creator.password;
    return dto;
  }

  public createLoginDTO(creator: LoginDtoCreator): LoginDTO {
    let dto = new LoginDTO();
    dto.credential = creator.credential;
    dto.password = creator.password;
    return dto;
  }

}
