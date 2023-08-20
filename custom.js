function handleClick(target){
    const getTheList = document.getElementById("products_list")
    const getTheH2 = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = getTheH2;
    // console.log(getTheList);
    getTheList.appendChild(li);

    // console.log(target.childNodes[3].childNodes[3].innerText);
}