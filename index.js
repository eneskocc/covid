
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            let div = `
            <table class="table table-hover" onclick="myfun(event)">
                  <thead>
                        <tr>
                              <th scope="col">Country</th>
                              <th>cases</th>
                              <th>deaths</th>
                              <th>recovered</th>
                        </tr>
                  </thead>
                  <tbody id="body">
                  
                  </tbody>
            </table>`;
            document.getElementById("table").innerHTML = div;
            div="";
            console.log(myObj[0])
            myObj.map(covid => {
                  div += `
                        <tr data-column="${covid.country}">
                              
                              <th scope="row" data-column="${covid.country}">
                                    <img src="${covid.countryInfo.flag}" alt="..." class="img-fluid wh">${"  "}${covid.country}
                              </th>
                              <td data-column="${covid.country}">${covid.cases}</td>
                              <td data-column="${covid.country}">${covid.deaths}</td>
                              <td data-column="${covid.country}">${covid.recovered}</td>
                        </tr>
                  `;
                  
            });
            document.getElementById("body").innerHTML = div;
      }

      };

      xmlhttp.open("GET", "https://corona.lmao.ninja/countries/", true);
      xmlhttp.send();

      
function myfun(event) {
            ulke=event.target.getAttribute("data-column")
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                  var myObj = JSON.parse(this.responseText);
                  let labels=['1/22/20', '1/23/20', '1/24/20', '1/22/20', '1/22/20', '1/22/20', 'July','1/22/20', '1/23/20', '1/24/20', '1/22/20', '1/22/20', '1/22/20', 'July','1/22/20', '1/23/20', '1/24/20', '1/22/20', '1/22/20', '1/22/20', 'July','1/22/20', '1/23/20', '1/24/20', '1/22/20', '1/22/20', '1/22/20', 'July'];
                  let data=[0, 10, 5, 2, 10, 20, 15,0, 10, 5, 2, 20, 30, 4,0, 10, 5, 2, 10, 20, 15,0, 10, 5, 2, 20, 30, 4];
                  let cases=myObj.timeline
                  console.log(cases)
                  let deaths=myObj.timeline.deaths

                  var ctx = document.getElementById('myChart').getContext('2d');
                  var chart = new Chart(ctx, {
                  // The type of chart we want to create
                  type: 'line',
      
                  // The data for our dataset
                  data: {
                        labels:labels ,
                        datasets: [{
                              label: 'My First dataset',
                              backgroundColor: 'rgb(256,256,256,0)',
                              borderColor: 'rgb(255, 99, 132)',
                              data: data,data
                        }],
                       
                  },

                  // Configuration options go here
                  options: {}
                  });
            }
      
            };
      
            xmlhttp.open("GET", "https://corona.lmao.ninja/v2/historical/"+ulke, true);
            xmlhttp.send();
      }