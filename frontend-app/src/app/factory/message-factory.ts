import {Injectable} from "@angular/core";
import {Message} from "../model/message.model";

@Injectable()
export class MessageFactory {

  private createStandardErrorMessage(message: string): Message {
    return new Message("error", "Error", message);
  }

  private createStandardSuccessMessage(message: string): Message {
    return new Message("success", "Success", message);
  }

  private createStandardDefaultMessage(message: string): Message {
    return new Message("default", "Done", message);
  }
}
