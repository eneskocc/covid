anasayfa()
  
function anasayfa(){
      document.getElementById("chart").innerHTML = "";
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

      xmlhttp.open("GET", "https://corona.lmao.ninja/v2/countries/", true);
      xmlhttp.send();
}
      
function myfun(event) {
            ulke=event.target.getAttribute("data-column")
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                  var myObj = JSON.parse(this.responseText);
                  let labels=[];
                  let data=[];
                  let labels2=[];
                  let data2=[];
                  let labels3=[];
                  let data3=[];
                  let div = `
                  <div class="col-md-12 d-flex justify-content-center pt-4 mb-3">
                        <button type="button" class="btn btn-outline-success btn-lg" onclick="anasayfa()">Go to Homepage</button>
                  </div>
                  <div class="col-md-6">
                        <canvas id="myChart"></canvas>
                  </div>
                  <div class="col-md-6">
                        <canvas id="myChart2"></canvas>
                  </div>
                  <div class="col-md-12 d-flex justify-content-center">
                        <div class="row">
                              <div class="col-md-6">
                                    <canvas id="myChart3"></canvas>
                              </div>
                        </div>
                        
                  </div>`;
                  document.getElementById("chart").innerHTML = div;
                  let cases=myObj.timeline.cases
                  let deaths=myObj.timeline.deaths
                  let recovereds=myObj.timeline.recovered
                  for (let [key, value] of Object.entries(cases)) {
                        labels.push(key)
                        data.push(value)
                  }
                  for (let [key, value] of Object.entries(deaths)) {
                        labels2.push(key)
                        data2.push(value)
                  }
                  for (let [key, value] of Object.entries(recovereds)) {
                        labels3.push(key)
                        data3.push(value)
                  }
                  var ctx = document.getElementById('myChart').getContext('2d');
                  var chart = new Chart(ctx, {
                  // The type of chart we want to create
                  type: 'line',
      
                  // The data for our dataset
                  data: {
                        labels:labels ,
                        datasets: [{
                              label: 'Cases',
                              backgroundColor: 'rgb(256,256,256,0)',
                              borderColor: 'rgb(255,165,0)',
                              data: data
                        }],
                       
                  },

                  // Configuration options go here
                  options: {}
                  });
                  var ctx2 = document.getElementById('myChart2').getContext('2d');
                  var chart2 = new Chart(ctx2, {
                  // The type of chart we want to create
                  type: 'line',
      
                  // The data for our dataset
                  data: {
                        labels:labels2 ,
                        datasets: [{
                              label: 'Deaths',
                              backgroundColor: 'rgb(256,256,256,0)',
                              borderColor: 'rgb(255, 99, 132)',
                              data: data2
                        }],
                       
                  },

                  // Configuration options go here
                  options: {}
                  });
                  var ctx2 = document.getElementById('myChart3').getContext('2d');
                  var chart2 = new Chart(ctx2, {
                  // The type of chart we want to create
                  type: 'line',
      
                  // The data for our dataset
                  data: {
                        labels:labels3 ,
                        datasets: [{
                              label: 'Recovered',
                              backgroundColor: 'rgb(256,256,256,0)',
                              borderColor: 'rgb(69,139,0)',
                              data: data3
                        }],
                       
                  },

                  // Configuration options go here
                  options: {}
                  });
                  document.getElementById("body").innerHTML = "";
                  document.getElementById("table").innerHTML = "";
            }
      
            };
      
            xmlhttp.open("GET", "https://corona.lmao.ninja/v2/historical/"+ulke, true);
            xmlhttp.send();
      }
