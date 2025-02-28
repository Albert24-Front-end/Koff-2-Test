export const addContainer = (parent, className) => {
    const container = document.createElement("div");
    container.classList.add("container");
    parent.append(container);

    return container;
};