import { addContainer } from "../addContainer";
import logoImg from '/images/logo.svg';

export class Main {
    static instance = null;

    constructor() {
        if(!Main.instance) {
            Main.instance = this;
            this.element = document.createElement("header");
            this.element.classList.add("header");
            this.containerElement = addContainer(this.element, "header__container");
            this.isMounted = false;
        }
        return Main.instance;
    }
    mount() {
        if (this.isMounted) {
            return;
        }

        const logo = this.getLogo();
        const searchForm = this.getSearchForm();
        const navigation = this.getNavigation();


        this.containerElement.append(logo, searchForm, navigation);

        document.body.append(this.element);
        this.isMounted = true;
    }

    unmount() {
        this.element.remove();
        this.isMounted = false;
    }

   
}