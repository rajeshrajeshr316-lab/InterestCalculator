let principalAmountValue = document.getElementById("principalAmount");
let rateofInterestAmountValue = document.getElementById("rateOfInterest");
let timeTakenValue = document.getElementById("timeTaken");
let interestAmountValue = document.getElementById("InterestAmount");
let totalAmountValue = document.getElementById("totalAmount");
let ErrorMessageValue = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Invaild Input ";

function calculateInterestAmount() {
    let principalAmountInputValue = principalAmountValue.value;
    let rateofInterestInputValue = rateofInterestAmountValue.value;
    let timeInputValue = timeTakenValue.value;
    if (principalAmountInputValue === "") {
        ErrorMessageValue.textContent = errorMessage;
    } else if (rateofInterestInputValue === "") {
        ErrorMessageValue.textContent = errorMessage;
    } else if (timeInputValue === "") {
        ErrorMessageValue.textContent = errorMessage;
    } else {
        ErrorMessageValue.textContent = "";
        let principal = parseInt(principalAmountInputValue);
        let rateofinterest = parseInt(rateofInterestInputValue);
        let time = parseInt(timeInputValue);
        let interesamount = (principal * rateofinterest * time) / 100;
        let totalamount = principal + interesamount;
        totalAmountValue.value = totalamount;
        interestAmountValue.value = interesamount;
    }
}