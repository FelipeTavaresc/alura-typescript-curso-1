import { View } from "./view";
export class MensagemView extends View {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    upate(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
