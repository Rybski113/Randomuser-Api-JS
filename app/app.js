

   window.onload = function() {
       fetch("https://randomuser.me/api")
       .then(response => response.json())
       .then(data => dataReady(data))
   }

   function dataReady(data) {
          console.log(data);
          const result = data.results[0];
          const fullname = result.name.title + " "
          + result.name.first + " "
          + result.name.last;
          document.getElementById("full-name").innerHTML = fullname

          const img = result.picture.large;
          document.getElementById("avatar-img").src = img;

          const userName = result.login.username;
          document.getElementById("user-name").innerHTML = userName;

          const email = result.email;
          document.getElementById("email").innerHTML = email;

          const country = result.location.country;
          document.getElementById("country").innerHTML = country;
   }



