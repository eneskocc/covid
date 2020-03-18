
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            let div = "";

            console.log(myObj[0])
            myObj.map(covid => {
                  let dg1,dg2;
                  if (covid.todayCases===0) {
                        dg1="";
                        a1="";
                  }else{
                        dg1="bg-danger";
                        a1=covid.todayCases;
                  }
                  if (covid.todayDeaths===0) {
                        dg2="";
                        a2="";
                  }else{
                        dg2="bg-danger";
                        a2=covid.todayDeaths;
                  }
                  div += `
                        <tr>
                              <th scope="row">${covid.country}</th>
                              <td>${covid.cases}</td>
                              <td class="${dg1}">${a1}</td>
                              <td>${covid.deaths}</td>
                              <td class="${dg2}">${a2}</td>
                              <td>${covid.recovered}</td>
                              <td>${covid.critical}</td>
                        </tr>
                  `;
                  
            });
            document.getElementById("body").innerHTML = div;
      }

      };

      xmlhttp.open("GET", "https://corona.lmao.ninja/countries/", true);
      xmlhttp.send();