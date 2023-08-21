// the coupon apply and btn disable js starts=============================
let total = 0;

function handleClick(target) {
    // Added the list starts
    const getTheList = document.getElementById("products_list")
    const getTheH2 = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = getTheH2;
    // // console.log(getTheList);
    getTheList.appendChild(li);
    // Added the list ends

    // The first total value starts
    const getTheP_price = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    total = parseFloat(total) + parseFloat(getTheP_price);
    console.log(total);
    document.getElementById("theTotalValue").innerText = total.toFixed(2);
    // The first total value ends

    // The "Make Purchase"  Disable method starts
    const getThePurchaseBG = document.getElementById("finalPurchaseBTN");
    if (total >= 1) {
        document.getElementById("finalPurchaseBTN").removeAttribute("disabled");
        getThePurchaseBG.style.backgroundColor = "#E527B2";
    }
    // The "Make Purchase"  Disable method ends


    // the apply button disable js starts
    const getTheApply = document.getElementById("apply-btn");
    if (total >= 200) {
        document.getElementById("apply-btn").removeAttribute("disabled");
        document.getElementById("coupon-input").removeAttribute("disabled");
        // console.log("showed")
        getTheApply.style.backgroundColor = "#E527B2";
    }
    // the apply button disable js ends


    // The Final total js starts
    const previousTotal = document.getElementById("theTotalValue");
    const nextTotal = previousTotal.innerText;
    // console.log(typeof nextTotal);
    document.getElementById("theFinalValue").innerText = nextTotal;
    // The Final total js ends

    // Make Zero of the discount after Adding new product starts
    let newprob = document.getElementById("theTotalDiscount").innerText;
    console.log(newprob);
    if (newprob > 0 ) {
        document.getElementById("theTotalDiscount").innerText = '0.00';
        alert("If you add new product, your previous discount will be removed. You would need to provide the coupon again to get the discount")
    }
    // Make Zero of the discount after Adding new product ends
}
// the coupon apply and btn disable js ends================================



// the discount calculation js starts
let discount = 20;
document.getElementById("apply-btn").addEventListener("click", function () {
    // Take the apply button and the Input field from the html starts
    const getTheCouponBtn = document.getElementById("coupon-btn");
    const getTheCouponBtnValue = getTheCouponBtn.innerText;
    const getInputCoupon = document.getElementById("coupon-input");
    const getCouponValue = getInputCoupon.value;
    // console.log(getCouponValue);
    // Take the apply button and the Input field from the html ends

    // The discount calculation js starts
    if (getCouponValue === getTheCouponBtnValue) {

        // taking the total initial value starts
        const getTheTotal = document.getElementById("theTotalValue");
        getTheTotalValueA = getTheTotal.innerText;
        // console.log(typeof getTheTotalValueA)
        // taking the total initial value ends

        // calculating the discount factor from initial-total value starts
        calculateTheDiscount = parseFloat(getTheTotalValueA) * parseFloat(discount) / 100;
        document.getElementById("theTotalDiscount").innerText = calculateTheDiscount.toFixed(2);
        const finalTotal = document.getElementById("theFinalValue");
        finalTotalValueA = finalTotal.innerText;
        // console.log(finalTotalValueA);
        // calculating the discount factor from initial-total value ends

        // Minus the discount value from the initial-total value starts
        FinalCalculateTotal = parseFloat(finalTotalValueA) - calculateTheDiscount;
        // console.log(FinalCalculatTotal);
        // Minus the discount value from the initial-total value ends

        document.getElementById("theFinalValue").innerText = FinalCalculateTotal;
    }
    else {
        alert("OPPS! this is not the correct Coupon :(")
    }
    

    getInputCoupon.value = '';
    // The discount calculation js ends

});
// the discount calculation js ends


document.getElementById('go-home').addEventListener('click', function(){
    window.location.href = 'index.html';
})