const menu_list_mobile = document.getElementById("top_menu_list_mobile");
const top_menu_list = document.querySelector(".top_menu_list");

menu_list_mobile.addEventListener("click", () => {
    if (top_menu_list.classList.contains("top_menu_list_none")) {
        top_menu_list.classList.remove("top_menu_list_none");
        top_menu_list.classList.add('top_menu_list_mobile');
    } else {
        top_menu_list.classList.remove('top_menu_list_mobile');
        top_menu_list.classList.add("top_menu_list_none");
    }
});