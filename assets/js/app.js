// all daclarations
const countriesInfo =document.getElementById('countries-info');
const search = document.getElementById('search');
const contriesname = document.getElementById('name');
const contriescapital = document.getElementById('capital');
const contriespopulation = document.getElementById('population');
let flag = true;


//templating function
const templating =(arr) =>{
    let result ='';
    arr.forEach(ele => {
        result +=`
        <div class="col-md-3 mt-4">
        <div class="card">
            <div class="card-body">
                <figure>
                    <img src="${ele.flag}" alt="flag" class="flag">
                    <figcaption class="figcaption">
                        <h1>${ele.name}</h1>
                    </figcaption>
                    <h2><strong>capital</strong>  : ${oncapital(ele.capital)}</h2>
                    <h3><strong>languages</strong> : <span>${ele.languages}</span></h3>
                    <h4><strong>Population</strong> : ${ele.population}</h4>
                </figure>
            </div>
        </div>
    </div>
        `
    });
    countriesInfo.innerHTML =result;
}

templating(countries)

//function for capital of country
function oncapital(element){
    if(element){
        return element
    }else{
        return 'NA'
    }
}

//callback functions for click event

function onNameClick(ele){
   let sortarr= countries.sort(function(a, b){
        let x = a.name.toLowerCase();
        let y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
        // return a.name.toLowerCase() - b.name.toLowerCase();
      });
    if(flag === true){
        templating(sortarr)
        flag = false;
    }else{
        templating(sortarr.reverse())
        flag = true;
    }
}

function oncontriescapital(){
    let sortcapital= countries.sort(function(a, b){
        let x = a.capital;
        let y = b.capital;
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
        // return a.capital.toLowerCase() - b.name.toLowerCase();
      });
    if(flag === true){
        templating(sortcapital)
        flag = false;
    }else{
        templating(sortcapital.reverse())
        flag = true;
    }
}

function onpopulation(ele){
    let sortpopulation =countries.sort((x,y)=>{
        return x.population - y.population
    })
    if(flag === true){
        templating(sortpopulation)
        flag = false;
    }else{
        templating(sortpopulation.reverse())
        flag = true;
    } 
}

//callback function for keyup event
const onsearch = (e) =>{
    let name = e.target.value.toLowerCase().trim();
    // console.log(name)
    let getarr = countries.filter((ele) => ele.name.toLowerCase().trim().includes(name))
    templating(getarr)
}
 
// all events
search.addEventListener('keyup',onsearch)
contriesname.addEventListener('click', onNameClick)
contriespopulation.addEventListener('click',onpopulation)
contriescapital.addEventListener('click',oncontriescapital)