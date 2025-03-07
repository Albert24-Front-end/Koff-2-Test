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
        input.type="search";
        input.name="search";
        input.placeholder="Введите запрос";

        const button = document.createElement("button");
        button.classList.add("header__btn");
        button.type="submit";
        button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.66665 13.9999C11.1644 13.9999 14 11.1644 14 7.66659C14 4.16878 11.1644 1.33325 7.66665 1.33325C4.16884 1.33325 1.33331 4.16878 1.33331 7.66659C1.33331 11.1644 4.16884 13.9999 7.66665 13.9999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.6666 14.6666L13.3333 13.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `;
        searchForm.append(input, button);
        return searchForm;
    }
    getNavigation() {
        const navigation = document.createElement("nav");
        navigation.classList.add("header__control");

        const favouriteLink = document.createElement("a");
        favouriteLink.classList.add("header__link");
        favouriteLink.href
    }
}