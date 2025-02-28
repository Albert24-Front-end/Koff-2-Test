import { addContainer } from "../addContainer";
import logoImg from '/images/logo.svg';

export class Order {
    static instance = null;

    constructor() {
        if(!Order.instance) {
            Order.instance = this;
            this.element = document.createElement("section");
            this.element.classList.add("order");
            this.containerElement = addContainer(this.element, "order__container");
            this.isMounted = false;
        }
        return Order.instance;
    }
    mount() {
        if (this.isMounted) {
            return;
        }

        this.containerElement.insertAdjacentHTML('beforeend', this.getHTML());

        document.body.append(this.element);
        this.isMounted = true;
    }

    unmount() {
        this.element.remove();
        this.isMounted = false;
    }

    getHTML() {
        return `
        
        `;
    }
}