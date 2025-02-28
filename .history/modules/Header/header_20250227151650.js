import { addContainer } from "../addContainer";
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

    getLogo() {

    }
    getSearchForm() {

    }
    getNavigation() {

    }
}