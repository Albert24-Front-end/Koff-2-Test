export class Header {
    static instance = null;

    constructor() {
        if(!Header.instance) {
            Header.instance = this;
            this.element = document.createElement("header");
            this.element.classList.add("header");
            this.container = addContainer(this.element, "header__container");
            this.isMounted = false;
        }
        return Header.instance;
    }
    mount() {
        id (this.isMounted) {
            return;
        }

        // this.containerElement.append()
    }
}