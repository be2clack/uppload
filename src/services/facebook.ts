import { UpploadService } from "../service";
import { HandlersParams } from "../helpers/interfaces";
import { translate } from "../helpers/i18n";

export default class Facebook extends UpploadService {
  name = "facebook";
  icon = `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 0c71 0 128 58 128 129 0 64-47 117-108 127v-89h30l6-38h-36v-24c0-10 5-20 21-20h16V53s-15-3-29-3c-29 0-48 18-48 50v29H75v37h1v1h32v89C47 246 1 194 0 131v-2C0 58 57 0 128 0z" fill="#000" fill-rule="nonzero"/></svg>`;
  color = "#1b69f6";

  template = () => {
    return `
      <form class="${this.class("form")}">
        <input class="${this.class(
          "input"
        )}" type="search" placeholder="Enter a URL">
        <button type="submit" style="background: ${this.color}">${translate(
      "services.facebook.button"
    )}</button>
      </form>
    `;
  };

  handlers = ({ next }: HandlersParams) => {};

  fetch(url: string) {
    return new Promise((resolve, reject) => {
      window
        .fetch("")
        .then(response => response.blob())
        .then(blob => resolve(blob))
        .catch(error => reject(error));
    });
  }
}
