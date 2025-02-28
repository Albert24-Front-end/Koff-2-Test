import logoImg from '/images/logo.svg';

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
}