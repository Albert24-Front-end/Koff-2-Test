import { addContainer } from "../addContainer";
import logoImg from '/images/logo.svg';

export class Header {
    static instance = null;

    constructor() {
        if(!Header.instance) {
            Header.instance = this;
            this.element = document.createElement("header");
            this.element.classList.add("header");
            this.containerElement = addContainer(this.element, "header__container");
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
        const logo = document.createElement("a");
        logo.classList.add("header__link-logo");
        logo.href = "/";

        const imgLogo = new Image;
        imgLogo.classList.add("header__logo");
        imgLogo.src = logoImg;
        imgLogo.alt = "Logo Koff";
        logo.append(imgLogo);

        return logo;
    }
    getSearchForm() {
        const searchForm = document.createElement("form");
        searchForm.classList.add("header__search");
        searchForm.method = "get";

        const input = document.createElement("input");
        input.classList.add("header__input");
    }
    getNavigation() {

    }
}