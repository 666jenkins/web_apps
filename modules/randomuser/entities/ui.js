function displayUsers(usersArray) {
  $.each(usersArray, function (i) {
      let name = usersArray[i].name.first.charAt(0).toUpperCase() + usersArray[i].name.first.slice(1);
      let surname = usersArray[i].name.last.charAt(0).toUpperCase() + usersArray[i].name.last.slice(1);
      $('main').append(
          `<div class="card mb-3" style="max-height: 130px;">
          <div class="row no-gutters">
            <div class="col-md-2">
              <img src="${usersArray[i].picture.large}" class="card-img ml-5 mt-4"
              style="
              height: 80px;
              width: 80px;
              border-radius: 50%;
              border:1px solid black;
              "
              alt="...">
            </div>
            <div >
              <div class="card-body">
                <h5 class="card-title">${name} ${surname}</h5>
                <p class="card-text"><i class="fas fa-envelope"></i> ${usersArray[i].email}</p>
                <p class="card-text"><small class="text-muted"><i class="fas fa-birthday-cake"></i> ${usersArray[i].dob.date.slice(0, 10)}</small></p>
              </div>
            </div>
          </div>
        </div>`
      )
  })
}
export { displayUsers };