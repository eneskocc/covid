
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            let div = `
            <table class="table table-hover">
                  <thead>
                        <tr>
                              <th scope="col">Country</th>
                              <th scope="col">cases</th>
                              <th scope="col">Today Cases</th>
                              <th scope="col">deaths</th>
                              <th scope="col">today Deaths</th>
                              <th scope="col">recovered</th>
                        </tr>
                  </thead>
                  <tbody id="body">
                  
                  </tbody>
            </table>`;
            document.getElementById("table").innerHTML = div;
            div="";
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
                              
                              <th scope="row">
                                    <img src="${covid.countryInfo.flag}" alt="..." class="img-fluid wh">${"  "}${covid.country}
                              </th>
                              <td>${covid.cases}</td>
                              <td class="${dg1}">${a1}</td>
                              <td>${covid.deaths}</td>
                              <td class="${dg2}">${a2}</td>
                              <td>${covid.recovered}</td>
                        </tr>
                  `;
                  
            });
            document.getElementById("body").innerHTML = div;
      }

      };

      xmlhttp.open("GET", "https://corona.lmao.ninja/countries/", true);
      xmlhttp.send();

      
function myfun(params) {
     console.log(params)
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                  var myObj = JSON.parse(this.responseText);
                  let labels=["12"];
                  let data=[];
                  myObj.map(covid => {
                        console.log(covid.timeline)
                  });
                  console.log(labels)
      
                  var ctx = document.getElementById('myChart').getContext('2d');
                  var chart = new Chart(ctx, {
                  // The type of chart we want to create
                  type: 'line',
      
                  // The data for our dataset
                  data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [{
                              label: 'My First dataset',
                              backgroundColor: 'rgb(255, 99, 132)',
                              borderColor: 'rgb(255, 99, 132)',
                              data: [0, 10, 5, 2, 20, 30, 45]
                        }]
                  },
      
                  // Configuration options go here
                  options: {}
                  });
            }
      
            };
      
            xmlhttp.open("GET", "https://corona.lmao.ninja/v2/historical/"+params, true);
            xmlhttp.send();
      }