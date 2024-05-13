let zipCodeInput = document.getElementById('zip-code')
let showCityInput = document.getElementById('show-city')

function showOutput(value){
    showCityInput.value = value

}

function showCity (){
    let value = zipCodeInput.value
    switch (value) {
        case '4000':
            showOutput("Karachi")
            break;
        
        case '4200':
            showOutput("Faisalabad")
            break;
        
        case '5000':
            showOutput("Islamabad")
            break;
        
        case '3000':
            showOutput("Peshawer")
        
        default:
            showOutput("");
    }
}