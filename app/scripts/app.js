"use strict";

const searchButton = document.querySelector(".search__icon"),
      closeSearchButton = document.querySelector(".search-button-close"),
      form = document.querySelector('.form'),
      buttonMenu = document.querySelector(".mobile-menu__button"),
      mobile = document.querySelector(".header__right");

    searchButton.addEventListener("click", () => { 
        form.classList.add("open");
        searchButton.style.display = "none";
        closeSearchButton.style.display = "block";
    });

    function openForm() {
        form.classList.remove("open");
        searchButton.style.display = "block";
        closeSearchButton.style.display = "none";
    }

    document.addEventListener('click', (e) => !form.contains(e.target) && !searchButton.contains(e.target) ?  openForm() : false)

    buttonMenu.addEventListener("click", () => {
        buttonMenu.classList.toggle("is-active");
        mobile.classList.toggle("mobile");
    });

    
    