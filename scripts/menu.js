const menuListMobile = document.getElementById("top_menu_list_mobile");
const topMenuList = document.querySelector(".top_menu_list");
const hamburguerIcon = menuListMobile?.querySelector(".hamburguer-icon");
const xIcon = menuListMobile?.querySelector(".x-icon");

if (menuListMobile && topMenuList && hamburguerIcon && xIcon) {
    menuListMobile.addEventListener("click", () => {
        const isClosed = topMenuList.classList.contains("top_menu_list_none");

        topMenuList.classList.toggle("top_menu_list_mobile", isClosed);
        topMenuList.classList.toggle("top_menu_list_none", !isClosed);

        hamburguerIcon.style.display = isClosed ? "none" : "block";
        xIcon.style.display = isClosed ? "block" : "none";
    });
}
