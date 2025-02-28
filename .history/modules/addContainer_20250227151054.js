export const addContainer = (parent, className) => {
    const container = document.createElement("div");
    container.classList.add("container");
    if(className) {
        container.classList.ad
    }
    parent.append(container);

    return container;
};