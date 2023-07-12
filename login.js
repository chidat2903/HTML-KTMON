const forms = document.querySelector(".forms"),
      links = document.querySelectorAll(".link");
console.log(forms,links);
links.forEach(link =>{
    link.addEventListener("click", e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
})