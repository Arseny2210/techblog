document.querySelector(".blog-list").addEventListener("click", function (e) {
  if (e.target.matches(".add-favourite")) {
    e.preventDefault();
    const url = "handlers/favourites.php";
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
        return resp.json();
      })
      .then(function (res) {
        console.log(res);
      });
  }
});
