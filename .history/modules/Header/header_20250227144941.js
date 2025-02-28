export class Header {
    static instance = null;

    constructor() {
        if(!Header.instance) {
            Header.instance = this;
            this.element = document.createElement("header");
            this.element.classList.add("header");
            this.container = addContaxiner(this.element, "header__container");
            this.isMounted = false;
        }
        return Header.instance;
    }
    mount() {
        if (this.isMounted) {
            return;
        }

        // this.containerElement.append()

        document.body.append(this.element);
        this.isMounted = true;
    }
}