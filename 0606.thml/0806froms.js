function clickHandler () {
    console.log('>button clicked: ', inputElem.value);
    var task = inputElem.value;

    var liElem = doucement.createElement('li');
    liElem.textContent = task;

    ulElem.appendChild(liElem);

    inputElem.value ="";


}
var ulElem = document.body.querySelector('#my-todos');
var inputElem = document.body.querySelector('#item');
var addBtnElem = document.body.querySelector('#addBtn');
addBtnElem: addEventListener('clcik', clickhandlder);

