let a = 0; b = 0;c = 0;d = 0;e = 0;f = 0;g = 0;h = 0;i = 0;j = 0;k = 0;l = 0;m = 0;n = 0;o = 0;p = 0;q = 0;r = 0;s = 0;t = 0;
document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        if(event.target.dataset.id == 'vivoy53s') {
            let price_one = document.querySelector("#price_one").textContent;
            fullprice += Number(price_one);
            var lol = document.querySelector('#vivoy53s-amount').textContent;
            a += Number(lol);
            console.log(a);
            lol.innerHTML = a;
        }
        if(event.target.dataset.id == 'HuaweiMateBookD15') {
            let price_three = document.querySelector("#price_three").textContent;
            fullprice += Number(price_three);
            var lol = document.querySelector('#KingstonSA400S37240G-amount').textContent;
            b += Number(lol);
        }
        if(event.target.dataset.id == 'HIPERVRNeo') {
            let price_four = document.querySelector("#price_four").textContent;
            fullprice += Number(price_four);}
        if(event.target.dataset.id == 'SamsungGalaxyS20FE') {
            let price_five = document.querySelector("#price_five").textContent;
            fullprice += Number(price_five);}
        if(event.target.dataset.id == 'KingstonSA400S37240G') {
            let price_two = document.querySelector("#price_two").textContent;
            fullprice += Number(price_two);}
        if(event.target.dataset.id == 'IntelCorei310100F') {
            let price_seven = document.querySelector("#price_seven").textContent;
            fullprice += Number(price_seven);}
        if(event.target.dataset.id == 'XiaomiRedmiNote10Pro') {
            let price_eight = document.querySelector("#price_eight").textContent;
            fullprice += Number(price_eight);}
        if(event.target.dataset.id == 'AppleiPhone11') {
            let price_nine = document.querySelector("#price_nine").textContent;
            fullprice += Number(price_nine);}
        if(event.target.dataset.id == 'AppleiPhone13ProMax') {
            let price_ten = document.querySelector("#price_ten").textContent;
            fullprice += Number(price_ten);}
        if(event.target.dataset.id == 'HuaweiMateBookD16') {
            let price_eleven = document.querySelector("#price_eleven").textContent;
            fullprice += Number(price_eleven);}
        if(event.target.dataset.id == 'HuaweiMateBookD14') {
            let price_twelve = document.querySelector("#price_twelve").textContent;
            fullprice += Number(price_twelve);}
        if(event.target.dataset.id == 'LenovoIPGaming315ACH6') {
            let price_thirteen = document.querySelector("#price_thirteen").textContent;
            fullprice += Number(price_thirteen);}
        if(event.target.dataset.id == 'HonorMagicBookX15') {
            let price_fourteen = document.querySelector("#price_fourteen").textContent;
            fullprice += Number(price_fourteen);}
        if(event.target.dataset.id == 'HIPERVRQ+') {
            let price_sixteen = document.querySelector("#price_sixteen").textContent;
            fullprice += Number(price_sixteen);}
        if(event.target.dataset.id == 'HIPERVRR') {
            let price_seventeen = document.querySelector("#price_seventeen").textContent;
            fullprice += Number(price_seventeen);}
        if(event.target.dataset.id == 'HIPERVRVRW') {
            let price_eighteen = document.querySelector("#price_eighteen").textContent;
            fullprice += Number(price_eighteen);}
        if(event.target.dataset.id == 'CrucialCT240BX500SSD1') {
            let price_twenty = document.querySelector("#price_twenty").textContent;
            fullprice += Number(price_twenty);}
        if(event.target.dataset.id == 'SiliconPowerSP128GBSS3A5') {
            let price_fifteen = document.querySelector("#price_fifteen").textContent;
            fullprice += Number(price_fifteen);}
        if(event.target.dataset.id == 'KingstonNV1SNVS500G500ГБ') {
            let price_six = document.querySelector("#price_six").textContent;
            fullprice += Number(price_six);}
        document.querySelector('.price').innerHTML = fullprice;
    } else {
        if(event.target.dataset.id == 'vivoy53s') {
            let price_one = document.querySelector("#price_one").textContent;
            fullprice -= Number(price_one);}
        if(event.target.dataset.id == 'HuaweiMateBookD15') {
            let price_three = document.querySelector("#price_three").textContent;
            fullprice -= Number(price_three);}
        if(event.target.dataset.id == 'HIPERVRNeo') {
            let price_four = document.querySelector("#price_four").textContent;
            fullprice -= Number(price_four);}
        if(event.target.dataset.id == 'SamsungGalaxyS20FE') {
            let price_five = document.querySelector("#price_five").textContent;
            fullprice -= Number(price_five);}
        if(event.target.dataset.id == 'KingstonSA400S37240G') {
            let price_two = document.querySelector("#price_two").textContent;
            fullprice -= Number(price_two);}
        if(event.target.dataset.id == 'IntelCorei310100F') {
            let price_seven = document.querySelector("#price_seven").textContent;
            fullprice -= Number(price_seven);}
        if(event.target.dataset.id == 'XiaomiRedmiNote10Pro') {
            let price_eight = document.querySelector("#price_eight").textContent;
            fullprice -= Number(price_eight);}
        if(event.target.dataset.id == 'AppleiPhone11') {
            let price_nine = document.querySelector("#price_nine").textContent;
            fullprice -= Number(price_nine);}
        if(event.target.dataset.id == 'AppleiPhone13ProMax') {
            let price_ten = document.querySelector("#price_ten").textContent;
            fullprice -= Number(price_ten);}
        if(event.target.dataset.id == 'HuaweiMateBookD16') {
            let price_eleven = document.querySelector("#price_eleven").textContent;
            fullprice -= Number(price_eleven);}
        if(event.target.dataset.id == 'HuaweiMateBookD14') {
            let price_twelve = document.querySelector("#price_twelve").textContent;
            fullprice -= Number(price_twelve);}
        if(event.target.dataset.id == 'LenovoIPGaming315ACH6') {
            let price_thirteen = document.querySelector("#price_thirteen").textContent;
            fullprice -= Number(price_thirteen);}
        if(event.target.dataset.id == 'HonorMagicBookX15') {
            let price_fourteen = document.querySelector("#price_fourteen").textContent;
            fullprice -= Number(price_fourteen);}
        if(event.target.dataset.id == 'HIPERVRQ+') {
            let price_sixteen = document.querySelector("#price_sixteen").textContent;
            fullprice -= Number(price_sixteen);}
        if(event.target.dataset.id == 'HIPERVRR') {
            let price_seventeen = document.querySelector("#price_seventeen").textContent;
            fullprice -= Number(price_seventeen);}
        if(event.target.dataset.id == '') {
            let price_ = document.querySelector("#price_").textContent;
            fullprice -= Number(price_);}
        if(event.target.dataset.id == 'HIPERVRVRW') {
            let price_eighteen = document.querySelector("#price_eighteen").textContent;
            fullprice -= Number(price_eighteen);}
        if(event.target.dataset.id == 'CrucialCT240BX500SSD1') {
            let price_twenty = document.querySelector("#price_twenty").textContent;
            fullprice -= Number(price_twenty);}
        if(event.target.dataset.id == 'SiliconPowerSP128GBSS3A5') {
            let price_fifteen = document.querySelector("#price_fifteen").textContent;
            fullprice += Number(price_fifteen);}
        if(event.target.dataset.id == 'KingstonNV1SNVS500G500ГБ') {
            let price_six = document.querySelector("#price_six").textContent;
            fullprice += Number(price_six);}
            if (fullprice < 0) {fullprice = 0}
        document.querySelector('.price').innerHTML = fullprice;
    }
}