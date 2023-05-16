window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = "https://func-azureresume-prod.azurewebsites.net/api/GetResourceCounter?code=3oe2Qofxpp_r_s70p-KwV6yTths7oaoi1lF9bfSTuKBoAzFuaIA_CA==";
const localFunctionApi = 'http://localhost:7071/api/GetResourceCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error)
    });
    return count;
}