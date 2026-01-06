document.querySelectorAll(".faq_list_item__item").forEach(item => {
    const question = item.querySelector(".__item-container-question");

    question.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});
