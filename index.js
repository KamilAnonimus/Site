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

let sum = 0;
function Sum() {
    document.querySelector('.sum').innerHTML = sum;
}

document.onclick = event => {
    if (event.target.classList.contains('tab')) {
        plusFunction(event.target.dataset.id);
        sum += 1;
        Sum();
    }
}

const plusFunction = id => {
    cart[id]++;
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}

renderCart();