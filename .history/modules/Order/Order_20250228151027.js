import { addContainer } from "../addContainer";
import { Main } from "../Main/MAin";

export class Order {
    static instance = null;

    constructor() {
        if(!Order.instance) {
            Order.instance = Main;
            Main.element = document.createElement("section");
            Main.element.classList.add("order");
            Main.containerElement = addContainer(Main.element, "order__container");
            Main.isMounted = false;
        }
        return Order.instance;
    }
    mount() {
        if (Ma.isMounted) {
            return;
        }

        Ma.containerElement.insertAdjacentHTML('beforeend', Ma.getHTML());

        document.body.append(Ma.element);
        Ma.isMounted = true;
    }

    unmount() {
        Ma.element.remove();
        Ma.isMounted = false;
    }

    getHTML() {
        return `
            <div class="order__title">
                <div class="order__title-message">Заказ успешно размещен</div>
                <div class="order__title-price">20&nbsp;000&nbsp;₽</div>
            </div>
            <p class="order__number">№43435</p>
            <div class="order__features">
                <h3 class="order__features-title">Данные доставки</h3>
                <table class="order__features-table table">
                    <tr class="table__row">
                    <td class="table__field">Получатель</td>
                    <td class="table__value">Иванов Петр Александрович</td>
                    </tr>
                    <tr class="table__row">
                    <td class="table__field">Телефон</td>
                    <td class="table__value">+7 (737) 346 23 00</td>
                    </tr>
                    <tr class="table__row">
                    <td class="table__field">E-mail</td>
                    <td class="table__value">Ivanov84@gmail.com</td>
                    </tr>
                    <tr class="table__row">
                    <td class="table__field">Адрес доставки</td>
                    <td class="table__value">Москва, ул. Ленина, 21, кв. 33</td>
                    </tr>
                    <tr class="table__row">
                    <td class="table__field">Способ оплаты</td>
                    <td class="table__value">Картой при получении</td>
                    </tr>
                    <tr class="table__row">
                    <td class="table__field">Способ получения</td>
                    <td class="table__value">Доставка</td>
                    </tr>
                </table>
                <button class="order__btn" type="button">На главную</button>
            </div>
        `;
    }
}