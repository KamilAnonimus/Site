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
    'HIPERVRMax' : 0,
    'CrucialCT240BX500SSD1' : 0,
    'SiliconPowerSP128GBSS3A5' : 0,
    'KingstonNV1SNVS500G500ГБ' : 0,
};

let name_product = 0;
let sideBar = 0;
document.onclick = event => {
    if (event.target.classList.contains('tab')) {
        plusFunction(event.target.dataset.id);
        name_product = event.target.dataset.id;
        sideBar = localStorage.setItem(name_product, name_product);
        document.querySelector('.sum').innerHTML = localStorage.length;
    }
}

const currency_fullprice = document.getElementById('currency_fullprice');
window.onload = function() {
    document.querySelector('#empty').style.display = 'none';
    currency_fullprice.style.display = 'block';
if (localStorage.length < 1) {
    fullprice_elem.style.display = 'none';
    currency_fullprice.style.display = 'none';
    document.querySelector('#empty').style.display = 'block';}
    render();
};

const plusFunction = id => {cart[id]++;}

var fullprice = 0;
var intermediatePrice = 0;
function render() {
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
    const render_getItem = localStorage.getItem(`${localStorage.getItem(key)}`);
    if("vivoy53s" == render_getItem) {
        document.querySelector('.vivoy53s').style.display = 'block';
        let price_one = document.querySelector("#vivoy53s").textContent;
        fullprice += Number(price_one);}
    if("HuaweiMateBookD15" == render_getItem) {
        document.querySelector('.HuaweiMateBookD15').style.display = 'block';
        let price_three = document.querySelector("#HuaweiMateBookD15").textContent;
        fullprice += Number(price_three);}
    if("HIPERVRNeo" == render_getItem){
        document.querySelector('.HIPERVRNeo').style.display = 'block';
        let price_four = document.querySelector("#HIPERVRNeo").textContent;
        fullprice += Number(price_four);}
    if("SamsungGalaxyS20FE" == render_getItem){
        document.querySelector('.SamsungGalaxyS20FE').style.display = 'block';
        let price_five = document.querySelector("#SamsungGalaxyS20FE").textContent;
        fullprice += Number(price_five);}
    if("KingstonSA400S37240G" == render_getItem){
        document.querySelector('.KingstonSA400S37240G').style.display = 'block';
        let price_two = document.querySelector("#KingstonSA400S37240G").textContent;
        fullprice += Number(price_two);}
    if("IntelCorei310100F" == render_getItem){
        document.querySelector('.IntelCorei310100F').style.display = 'block';
        let price_seven = document.querySelector("#IntelCorei310100F").textContent;
        fullprice += Number(price_seven);}
    if("XiaomiRedmiNote10Pro" == render_getItem){
        document.querySelector('.XiaomiRedmiNote10Pro').style.display = 'block';
        let price_eight = document.querySelector("#XiaomiRedmiNote10Pro").textContent;
        fullprice += Number(price_eight);}
    if("AppleiPhone11" == render_getItem){
        document.querySelector('.AppleiPhone11').style.display = 'block';
        let price_nine = document.querySelector("#AppleiPhone11").textContent;
        fullprice += Number(price_nine);}
    if("AppleiPhone13ProMax" == render_getItem){
        document.querySelector('.AppleiPhone13ProMax').style.display = 'block';
        let price_ten = document.querySelector("#AppleiPhone13ProMax").textContent;
        fullprice += Number(price_ten);}
    if("HuaweiMateBookD16" == render_getItem){
        document.querySelector('.HuaweiMateBookD16').style.display = 'block';
        let price_eleven = document.querySelector("#HuaweiMateBookD16").textContent;
        fullprice += Number(price_eleven);}
    if("HuaweiMateBookD14" == render_getItem){
        document.querySelector('.HuaweiMateBookD14').style.display = 'block';
        let price_twelve = document.querySelector("#HuaweiMateBookD14").textContent;
        fullprice += Number(price_twelve);}
    if("LenovoIPGaming315ACH6" == render_getItem){
        document.querySelector('.LenovoIPGaming315ACH6').style.display = 'block';
        let price_thirteen = document.querySelector("#LenovoIPGaming315ACH6").textContent;
        fullprice += Number(price_thirteen);}
    if("HonorMagicBookX15" == render_getItem){
        document.querySelector('.HonorMagicBookX15').style.display = 'block';
        let price_fourteen = document.querySelector("#HonorMagicBookX15").textContent;
        fullprice += Number(price_fourteen);}
    if("HIPERVRQ+" == render_getItem){
        document.querySelector('.HIPERVRQ+').style.display = 'block';
        let price_sixteen = document.querySelector("#HIPERVRQ+").textContent;
        fullprice += Number(price_sixteen);}
    if("HIPERVRR" == render_getItem){
        document.querySelector('.HIPERVRR').style.display = 'block';
        let price_seventeen = document.querySelector("#HIPERVRR").textContent;
        fullprice += Number(price_seventeen);}
    if("HIPERVRVRW" == render_getItem){
        document.querySelector('.HIPERVRVRW').style.display = 'block';
        let price_eighteen = document.querySelector("#HIPERVRVRW").textContent;
        fullprice += Number(price_eighteen);}
    if("CrucialCT240BX500SSD1" == render_getItem){
        document.querySelector('.CrucialCT240BX500SSD1').style.display = 'block';
        let price_twenty = document.querySelector("#CrucialCT240BX500SSD1").textContent;
        fullprice += Number(price_twenty);}
    if("SiliconPowerSP128GBSS3A5" == render_getItem){
        document.querySelector('.SiliconPowerSP128GBSS3A5').style.display = 'block';
        let price_fifteen = document.querySelector("#SiliconPowerSP128GBSS3A5").textContent;
        fullprice += Number(price_fifteen);}
    if("KingstonNV1SNVS500G500ГБ" == render_getItem){
        document.querySelector('.KingstonNV1SNVS500G500ГБ').style.display = 'block';
        let price_six = document.querySelector("#KingstonNV1SNVS500G500ГБ").textContent;
        fullprice += Number(price_six);}
    if("HIPERVRMax" == render_getItem){
        document.querySelector('.HIPERVRMax').style.display = 'block';
        let price_nineteen = document.querySelector("#HIPERVRMax").textContent;
        fullprice += Number(price_nineteen);}
    document.querySelector('.price').innerHTML = fullprice;
    }
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