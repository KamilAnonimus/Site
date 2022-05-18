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
    'reality_helmet2' : 0,
    'HIPERVRR' : 0,
    'HIPERVRVRW' : 0,
    'reality_helmet5' : 0,
    'CrucialCT240BX500SSD1' : 0,
    'iliconPowerSP128GBSS3A5' : 0,
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

window.onload = function(empty) {
    if (localStorage.getItem('1') !== null) {
        document.querySelector('#empty').style.display = 'none';
        render();
    }
};

const plusFunction = id => {
    cart[id]++;
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}

renderCart();

var fullprice = 0;
var intermediatePrice = 0;
let bordersName = document.querySelectorAll('.borders_basket li');
function render() {
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
    if("vivoy53s" == localStorage.getItem(`${localStorage.getItem(key)}`)) {
        document.querySelector('.vivoy53s').style.display = 'block';
        let price_one = document.querySelector("#price_one").textContent;
    }
    if("HuaweiMateBookD15" == localStorage.getItem(`${localStorage.getItem(key)}`)) {
        document.querySelector('.HuaweiMateBookD15').style.display = 'block';
        let price_three = document.querySelector("#price_three").textContent;
    }

    if("HIPERVRNeo" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.HIPERVRNeo').style.display = 'block';}
    if("SamsungGalaxyS20FE" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.SamsungGalaxyS20FE').style.display = 'block';}
    if("KingstonSA400S37240G" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.KingstonSA400S37240G').style.display = 'block';}
    if("IntelCorei310100F" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.IntelCorei310100F').style.display = 'block';}
    if("XiaomiRedmiNote10Pro" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.XiaomiRedmiNote10Pro').style.display = 'block';}
    if("AppleiPhone11" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.AppleiPhone11').style.display = 'block';}
    if("AppleiPhone13ProMax" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.AppleiPhone13ProMax').style.display = 'block';}
    if("HuaweiMateBookD16" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.HuaweiMateBookD16').style.display = 'block';}
    if("HuaweiMateBookD14" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.HuaweiMateBookD14').style.display = 'block';}
    if("LenovoIPGaming315ACH6" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.LenovoIPGaming315ACH6').style.display = 'block';}
    if("HonorMagicBookX15" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.HonorMagicBookX15').style.display = 'block';}
    if("reality_helmet2" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.reality_helmet2').style.display = 'block';}
    if("HIPERVRR" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.HIPERVRR').style.display = 'block';}
    if("HIPERVRVRW" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.HIPERVRVRW').style.display = 'block';}
    if("reality_helmet5" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.reality_helmet5').style.display = 'block';}
    if("CrucialCT240BX500SSD1" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.CrucialCT240BX500SSD1').style.display = 'block';}
    if("iliconPowerSP128GBSS3A5" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.iliconPowerSP128GBSS3A5').style.display = 'block';}
    if("KingstonNV1SNVS500G500ГБ" == localStorage.getItem(`${localStorage.getItem(key)}`)){document.querySelector('.KingstonNV1SNVS500G500ГБ').style.display = 'block';}
    // fullprice = Number(price_three) + Number(price_one);
    }
}

var border = document.getElementById('borders_basket');
const empty_trash = document.querySelector('#empty_trash');
empty_trash.onclick = function () {
    localStorage.clear();
    document.querySelector('#empty').style.display = 'block';
    border.style.display='none';
}