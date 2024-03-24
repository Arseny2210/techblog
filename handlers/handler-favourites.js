document.querySelector("#sort").addEventListener("change", function (e) {
  fetch("handlers/handler.php", {
    method: "POST",
    body: JSON.stringify({ param: "getFavourites" }),
  })
    .then(resp => resp.json())
    .then(res => {
      if (res == false) {
        alert("Ошибка получения постов");
      } else {
        res.sort((a, b) => {
          const aDate = new Date(a.publishedAt);
          const bDate = new Date(b.publishedAt);
          if (e.target.value === "des") {
            return bDate - aDate;
          } else {
            return aDate - bDate;
          }
        });

        // function isImage(url) {
        //   fetch(url).then(resp => {
        //     if (resp.ok === true) {
        //       return true;
        //     } else {
        //       return false;
        //     }
        //   });
        // }

        document.querySelector(".blog-list").innerHTML = "";
        let out = "";
        res.forEach(post => {
          // const imageExists = await isImage(post.urlToImage);
          // const url = imageExists ? post.urlToImage : "../images/no.jpg";
          const postOutput = `
          <div class="blog-box row">
            <div class="col-md-4">
                <div class="post-media">
                    <a href="${post.url}" title="">
                        <img src="${post.urlToImage}" alt="" class="img-fluid">
                        <div class="hovereffect"></div>
                    </a>
                </div><!-- end media -->
            </div><!-- end col -->

            <div class="blog-meta big-meta col-md-8">
                <h4><a href="${post.url}" title="">
                              ${post.title}
                    </a></h4>
                <p>
                ${post.description}
                </p>
                <small><a href="tech-single.html" title="">
                        ${new Date(post.publishedAt).toUTCString}
                    </a></small>
                    ${
                      post.author
                        ? `<small><a href="tech-author.html"  title=""> ${post.author} </a></small>`
                        : ""
                    }
            </div>
          </div>
          `;
          out += post;
        });
        document
          .querySelector(".blog-list")
          .insertAdjacentHTML("afterbegin", out);
      }
    });
});
