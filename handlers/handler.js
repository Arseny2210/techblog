document.querySelector(".blog-list").addEventListener("click", function (e) {
  if (e.target.matches(".add-favourite")) {
    e.preventDefault();
    const url = "handlers/handler.php";
    const postCategory = e.target.dataset.category;
    const postUrl = e.target.dataset.url;
    const data = {
      category: postCategory,
      url: postUrl,
      param: "addFavourite",
    };
    fetch(url, {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify(data),
    })
      .then(function (resp) {
        return resp.text();
      })
      .then(function (res) {
        if (res === "false") {
          alert("Ошибка добавления поста.");
        } else {
          e.target.classList.remove("btn-primary");
          e.target.classList.add("disabled");
          e.target.style.cssText = "background: green !important";
          e.target.textContent = "In favourite 😘";
          console.log(e.target);
        }
      });
  }
});
