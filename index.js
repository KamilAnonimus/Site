let cart = {
    'vivoy53s' : 0,
    'HuaweiMateBookD15' : 0,
    'HIPERVRNeo' : 0,
    'SamsungGalaxyS20FE' : 0,
    'KingstonSA400S37240G' : 0,
    'IntelCorei310100F' : 0,
    'XiaomiRedmiNote10Pro' : 0,
    'AppleiPhone11' : 0,
    'AppleiPhone13ProMax' : 0,
    'HuaweiMateBookD16' : 0,
    'HuaweiMateBookD14' : 0,
    'LenovoIPGaming315ACH6' : 0,
    'HonorMagicBookX15' : 0,
    'HIPERVRQ+' : 0,
    'HIPERVRR' : 0,
    'HIPERVRVRW' : 0,
    'reality_helmet5' : 0,
    'CrucialCT240BX500SSD1' : 0,
    'SiliconPowerSP128GBSS3A5' : 0,
    'KingstonNV1SNVS500G500ГБ' : 0,
};

let marker = 0;
function Sum() {
    document.querySelector('.sum').innerHTML = marker;
}

let name_product = 0;
let sideBar = 0;
document.onclick = event => {
    if (event.target.classList.contains('tab')) {
        plusFunction(event.target.dataset.id);
        name_product = event.target.dataset.id;
        marker += 1;
        Sum();
        sideBar = localStorage.setItem(name_product, name_product);
        localStorage.setItem('1', '1' );
    }
}

const currency_fullprice = document.getElementById('currency_fullprice');
window.onload = function(empty) {
    if (localStorage.getItem('1') !== null) {
        document.querySelector('#empty').style.display = 'none';
        render();
        currency_fullprice.style.display = 'block';
    }
};

const plusFunction = id => {
    cart[id]++;
}

var fullprice = 0;
var intermediatePrice = 0;
function render() {
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
    const render_getItem = localStorage.getItem(`${localStorage.getItem(key)}`);
    if("vivoy53s" == render_getItem) {
        document.querySelector('.vivoy53s').style.display = 'block';
        let price_one = document.querySelector("#price_one").textContent;
        fullprice += Number(price_one);}
    if("HuaweiMateBookD15" == render_getItem) {
        document.querySelector('.HuaweiMateBookD15').style.display = 'block';
        let price_three = document.querySelector("#price_three").textContent;
        fullprice += Number(price_three);}
    if("HIPERVRNeo" == render_getItem){
        document.querySelector('.HIPERVRNeo').style.display = 'block';
        let price_four = document.querySelector("#price_four").textContent;
        fullprice += Number(price_four);}
    if("SamsungGalaxyS20FE" == render_getItem){
        document.querySelector('.SamsungGalaxyS20FE').style.display = 'block';
        let price_five = document.querySelector("#price_five").textContent;
        fullprice += Number(price_five);}
    if("KingstonSA400S37240G" == render_getItem){
        document.querySelector('.KingstonSA400S37240G').style.display = 'block';
        let price_two = document.querySelector("#price_two").textContent;
        fullprice += Number(price_two);}
    if("IntelCorei310100F" == render_getItem){
        document.querySelector('.IntelCorei310100F').style.display = 'block';
        let price_seven = document.querySelector("#price_seven").textContent;
        fullprice += Number(price_seven);}
    if("XiaomiRedmiNote10Pro" == render_getItem){
        document.querySelector('.XiaomiRedmiNote10Pro').style.display = 'block';
        let price_eight = document.querySelector("#price_eight").textContent;
        fullprice += Number(price_eight);}
    if("AppleiPhone11" == render_getItem){
        document.querySelector('.AppleiPhone11').style.display = 'block';
        let price_nine = document.querySelector("#price_nine").textContent;
        fullprice += Number(price_nine);}
    if("AppleiPhone13ProMax" == render_getItem){
        document.querySelector('.AppleiPhone13ProMax').style.display = 'block';
        let price_ten = document.querySelector("#price_ten").textContent;
        fullprice += Number(price_ten);}
    if("HuaweiMateBookD16" == render_getItem){
        document.querySelector('.HuaweiMateBookD16').style.display = 'block';
        let price_eleven = document.querySelector("#price_eleven").textContent;
        fullprice += Number(price_eleven);}
    if("HuaweiMateBookD14" == render_getItem){
        document.querySelector('.HuaweiMateBookD14').style.display = 'block';
        let price_twelve = document.querySelector("#price_twelve").textContent;
        fullprice += Number(price_twelve);}
    if("LenovoIPGaming315ACH6" == render_getItem){
        document.querySelector('.LenovoIPGaming315ACH6').style.display = 'block';
        let price_thirteen = document.querySelector("#price_thirteen").textContent;
        fullprice += Number(price_thirteen);}
    if("HonorMagicBookX15" == render_getItem){
        document.querySelector('.HonorMagicBookX15').style.display = 'block';
        let price_fourteen = document.querySelector("#price_fourteen").textContent;
        fullprice += Number(price_fourteen);}
    if("HIPERVRQ+" == render_getItem){
        document.querySelector('.HIPERVRQ+').style.display = 'block';
        let price_sixteen = document.querySelector("#price_sixteen").textContent;
        fullprice += Number(price_sixteen);}
    if("HIPERVRR" == render_getItem){
        document.querySelector('.HIPERVRR').style.display = 'block';
        let price_seventeen = document.querySelector("#price_seventeen").textContent;
        fullprice += Number(price_seventeen);}
    if("HIPERVRVRW" == render_getItem){
        document.querySelector('.HIPERVRVRW').style.display = 'block';
        let price_eighteen = document.querySelector("#price_eighteen").textContent;
        fullprice += Number(price_eighteen);}
    if("CrucialCT240BX500SSD1" == render_getItem){
        document.querySelector('.CrucialCT240BX500SSD1').style.display = 'block';
        let price_twenty = document.querySelector("#price_twenty").textContent;
        fullprice += Number(price_twenty);}
    if("SiliconPowerSP128GBSS3A5" == render_getItem){
        document.querySelector('.SiliconPowerSP128GBSS3A5').style.display = 'block';
        let price_fifteen = document.querySelector("#price_fifteen").textContent;
        fullprice += Number(price_fifteen);}
    if("KingstonNV1SNVS500G500ГБ" == render_getItem){
        document.querySelector('.KingstonNV1SNVS500G500ГБ').style.display = 'block';
        let price_six = document.querySelector("#price_six").textContent;
        fullprice += Number(price_six);}
    }
    document.querySelector('.price').innerHTML = fullprice;
}

var border = document.getElementById('borders_basket');
const empty_trash = document.querySelector('#empty_trash');
const fullprice_elem = document.getElementById('fullprice-number');
empty_trash.onclick = function () {
    localStorage.clear();
    document.querySelector('#empty').style.display = 'block';
    border.style.display='none';
    fullprice_elem.style.display = 'none';
    currency_fullprice.style.display = 'none';
}