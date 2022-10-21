fetch("periodic_table_data.json")
  .then(response => response.json())
  .then(json => generate_periodic_table(json));
function generate_periodic_table(json_data){
    for(element in json_data){
        let periodic_table = document.querySelector("#periodic_table");
        let chem_data = json_data[element];
        let new_chem_el = document.createElement("div");
        new_chem_el.classList.add("chemical_button");
        if(chem_data.atomic_number == 0){
            new_chem_el.classList.add("empty");
        } else {
            new_chem_el.innerHTML=`<span><sub>${chem_data.atomic_number}</sub>${chem_data.symbol}</span><span>${chem_data.name}</span>`; 
            new_chem_el.classList.add("metallic")
            new_chem_el.addEventListener("click",evt => {
                document.querySelector(".display").innerHTML = chem_data.description;
            })
        }
        if(chem_data.non_metallic == "true"){
            new_chem_el.classList.add("non_metallic")
        } 
        periodic_table.appendChild(new_chem_el);
    }
}