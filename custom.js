
// the coupon apply and btn disable js starts
let total = 0;

function handleClick(target) {
    const getTheList = document.getElementById("products_list")
    const getTheH2 = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = getTheH2;
    // // console.log(getTheList);
    getTheList.appendChild(li);
    const getTheP_price = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    total = parseFloat(total) + parseFloat(getTheP_price);
    console.log(total);
    document.getElementById("theTotalValue").innerText = total.toFixed(2);

    const getThePurchaseBG = document.getElementById("finalPurchaseBTN");
    if (total >= 1) {
        document.getElementById("finalPurchaseBTN").removeAttribute("disabled");
        getThePurchaseBG.style.backgroundColor = "#E527B2";
    }

    const getTheApply = document.getElementById("apply-btn");
    if (total >= 200) {
        document.getElementById("apply-btn").removeAttribute("disabled");
        document.getElementById("coupon-input").removeAttribute("disabled");
        // console.log("showed")
        getTheApply.style.backgroundColor = "#E527B2";
    }
    const previousTotal = document.getElementById("theTotalValue");
    const nextTotal = previousTotal.innerText;
    // console.log(typeof nextTotal);
    document.getElementById("theFinalValue").innerText = nextTotal;


    
    let newprob = document.getElementById("theTotalDiscount").innerText;
    console.log(newprob);
    if (newprob > 0 ) {
        document.getElementById("theTotalDiscount").innerText = '0.00';
    }
}
// the coupon apply and btn disable js ends

// the discount calculation js starts
let discount = 20;
document.getElementById("apply-btn").addEventListener("click", function () {
    const getTheCouponBtn = document.getElementById("coupon-btn");
    const getTheCouponBtnValue = getTheCouponBtn.innerText;
    const getInputCoupon = document.getElementById("coupon-input");
    const getCouponValue = getInputCoupon.value;
    // console.log(getCouponValue);
    if (getCouponValue === getTheCouponBtnValue) {
        const getTheTotal = document.getElementById("theTotalValue");
        getTheTotalValueA = getTheTotal.innerText;
        // console.log(typeof getTheTotalValueA)
        calculateTheDiscount = parseFloat(getTheTotalValueA) * parseFloat(discount) / 100;
        document.getElementById("theTotalDiscount").innerText = calculateTheDiscount.toFixed(2);
        const finalTotal = document.getElementById("theFinalValue");
        finalTotalValueA = finalTotal.innerText;
        // console.log(finalTotalValueA);
        FinalCalculateTotal = parseFloat(finalTotalValueA) - calculateTheDiscount;
        // console.log(FinalCalculatTotal);
        document.getElementById("theFinalValue").innerText = FinalCalculateTotal;

    }
    else {
        alert("OPPS! this is not the correct Coupon :(")
    }
    getInputCoupon.value = '';
});


// the discount calculation js ends


// const discountPrice = document.getElementById("theTotalDiscount").innerText;
// console.log(discountPrice);