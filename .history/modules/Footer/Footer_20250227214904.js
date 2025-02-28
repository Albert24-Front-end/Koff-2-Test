export class Footer {
    static instance = null;

    constructor() {
        if(!Footer.instance) {
            Footer.instance = this;
            this.element = document.createElement("footer");
            this.isMounted = false;
        }
        return Footer.instance;
    }
    mount() {
        if (this.isMounted) {
            return;
        }

        document.body.append(this.element);
        this.isMounted = true;
    }

    unmount() {
        this.element.remove();
        this.isMounted = false;
    }
}