import { UpploadService } from "../service";
import { HandlersParams } from "../helpers/interfaces";
import { translate } from "../helpers/i18n";

export default class URL extends UpploadService {
  name = "url";
  icon = `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M200 151l36-36a67 67 0 10-95-95L89 72a67 67 0 0012 105l28-28a31 31 0 01-14-51l52-52a31 31 0 0143 43l-15 15c6 15 8 31 5 47z"/><path d="M56 105l-36 36a67 67 0 1095 95l52-52a67 67 0 00-12-105l-28 28a31 31 0 0114 51l-52 52a31 31 0 01-43-43l15-15c-6-15-8-31-5-47z"/></g></svg>`;
  color = "#8e44ad";

  template = () => {
    return `
      <form class="${this.class("form")}">
        <input class="${this.class(
          "input"
        )}" type="search" placeholder="Enter a URL">
        <button type="submit" style="background: ${this.color}">${translate(
      "services.url.button"
    )}</button>
      </form>
    `;
  };

  handlers = ({ upload, handle }: HandlersParams) => {};

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
