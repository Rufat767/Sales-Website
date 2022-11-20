fetch("https://fakestoreapi.com/products").then((response) => {
  response.json().then((products) => {
    let data = "";
    for (let i = 0; i < products.length; i++) {
      data += `<div class="col">
            <p>${products[i].id}</p>
            <div class="card shadow-sm">
            <img width="350px" height="400px" src="${products[i].image}" />
              <div class="card-body">
                <p class="card-text"> ${products[i].title}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button onclick="dataGetir(${products[i].id})" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">${products[i].price} Azn</small>
                </div>
              </div>
            </div>
          </div>`;
    }

    document.querySelector("#mehsul").innerHTML = data;
  });
});


async function dataGetir(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) =>
      response
        .json()
        .then((data) => {
          document.querySelector("#modal").innerHTML = `
    <div>
    <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">${data.title}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div  class="modal-body">
  <p> ${data.description} </p>
  <p> ${data.category} </p>
  <p> ${data.rating.count} </p>
  <p id='starts'></p>
        </div>

    </div>
    `;

          let rate_length = Math.round(data.rating.rate);

          let start = "";
          for (let i = 0; i < rate_length; i++) {
            start += `<i class="fa-solid fa-star"></i>`;
          }

          document.querySelector("#starts").innerHTML = start;
        })
        .catch((err) => console.log(err))
    )
    .catch((err) => console.log(err));
}

navbar999.addEventListener("click", () => {
  fetch(`https://fakestoreapi.com/products/categories`).then((response) => {
    response.json().then((data) => {
      let data_al = "";
      for (let i = 0; i < data.length; i++) {
        data_al += `
        <li><a class="dropdown-item" href="#"> ${data[i]} </a></li>
      `;
      }
      document.querySelector("#ul_list").innerHTML = data_al;
    });
  });
});
