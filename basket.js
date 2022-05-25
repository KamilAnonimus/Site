let a = 1; b = 1;c = 1;d = 1;e = 1;f = 1;g = 1;h = 1;i = 1;j = 1;k = 1;l = 1;m = 1;n = 1;o = 1;p = 1;q = 1;r = 1;s = 1;
const massiv = ['vivoy53s','HuaweiMateBookD15','HIPERVRNeo','SamsungGalaxyS20FE','KingstonSA400S37240G','IntelCorei310100F','XiaomiRedmiNote10Pro','AppleiPhone11','AppleiPhone13ProMax','HuaweiMateBookD16','HuaweiMateBookD14','LenovoIPGaming315ACH6','HonorMagicBookX15','HIPERVRQ+','HIPERVRR','HIPERVRVRW','CrucialCT240BX500SSD1','SiliconPowerSP128GBSS3A5','KingstonNV1SNVS500G500ГБ'];
document.onclick = event => {
    if (event.target.classList.contains('delete')) {
       if(massiv.some(element => element === event.target.dataset.id)) {
        document.querySelector(`.${event.target.dataset.id}`).style.display = 'none';
       }
    }
    if (event.target.classList.contains('plus')) {
        if(event.target.dataset.id == 'vivoy53s') {
            let price_one = document.querySelector("#price_one").textContent;
            fullprice += Number(price_one);
            var vivoy53s_amount = document.querySelector('#vivoy53s-amount');
            a += 1;
            vivoy53s_amount.innerHTML = a;}
        if(event.target.dataset.id == 'HuaweiMateBookD15') {
            let price_three = document.querySelector("#price_three").textContent;
            fullprice += Number(price_three);
            var HuaweiMateBookD15_amount = document.querySelector('#HuaweiMateBookD15-amount');
            b += 1;
            HuaweiMateBookD15_amount.innerHTML = b;}
        if(event.target.dataset.id == 'HIPERVRNeo') {
            let price_four = document.querySelector("#price_four").textContent;
            fullprice += Number(price_four);
            var HIPERVRNeo_amount = document.querySelector('#HIPERVRNeo-amount');
            c += 1;
            HIPERVRNeo_amount.innerHTML = c;}
        if(event.target.dataset.id == 'SamsungGalaxyS20FE') {
            let price_five = document.querySelector("#price_five").textContent;
            fullprice += Number(price_five);
            var SamsungGalaxyS20FE_amount = document.querySelector('#SamsungGalaxyS20FE-amount');
            d += 1;
            SamsungGalaxyS20FE_amount.innerHTML = d;}
        if(event.target.dataset.id == 'KingstonSA400S37240G') {
            let price_two = document.querySelector("#price_two").textContent;
            fullprice += Number(price_two);
            var KingstonSA400S37240G_amount = document.querySelector('#KingstonSA400S37240G-amount');
            e += 1;
            KingstonSA400S37240G_amount.innerHTML = e;}
        if(event.target.dataset.id == 'IntelCorei310100F') {
            let price_seven = document.querySelector("#price_seven").textContent;
            fullprice += Number(price_seven);
            var IntelCorei310100F_amount = document.querySelector('#IntelCorei310100F-amount');
            f += 1;
            IntelCorei310100F_amount.innerHTML = f;}
        if(event.target.dataset.id == 'XiaomiRedmiNote10Pro') {
            let price_eight = document.querySelector("#price_eight").textContent;
            fullprice += Number(price_eight);
            var XiaomiRedmiNote10Pro_amount = document.querySelector('#XiaomiRedmiNote10Pro-amount');
            g += 1;
            XiaomiRedmiNote10Pro_amount.innerHTML = g;}
        if(event.target.dataset.id == 'AppleiPhone11') {
            let price_nine = document.querySelector("#price_nine").textContent;
            fullprice += Number(price_nine);
            var AppleiPhone11_amount = document.querySelector('#AppleiPhone11-amount');
            h += 1;
            AppleiPhone11_amount.innerHTML = h;}
        if(event.target.dataset.id == 'AppleiPhone13ProMax') {
            let price_ten = document.querySelector("#price_ten").textContent;
            fullprice += Number(price_ten);
            var AppleiPhone13ProMax_amount = document.querySelector('#AppleiPhone13ProMax-amount');
            i += 1;
            AppleiPhone13ProMax_amount.innerHTML = i;}
        if(event.target.dataset.id == 'HuaweiMateBookD16') {
            let price_eleven = document.querySelector("#price_eleven").textContent;
            fullprice += Number(price_eleven);
            var HuaweiMateBookD16_amount = document.querySelector('#HuaweiMateBookD16-amount');
            j += 1;
            HuaweiMateBookD16_amount.innerHTML = j;}
        if(event.target.dataset.id == 'HuaweiMateBookD14') {
            let price_twelve = document.querySelector("#price_twelve").textContent;
            fullprice += Number(price_twelve);
            var HuaweiMateBookD14_amount = document.querySelector('#HuaweiMateBookD14-amount');
            k += 1;
            HuaweiMateBookD14_amount.innerHTML = k;}
        if(event.target.dataset.id == 'LenovoIPGaming315ACH6') {
            let price_thirteen = document.querySelector("#price_thirteen").textContent;
            fullprice += Number(price_thirteen);
            var LenovoIPGaming315ACH6_amount = document.querySelector('#LenovoIPGaming315ACH6-amount');
            l += 1;
            LenovoIPGaming315ACH6_amount.innerHTML = l;}
        if(event.target.dataset.id == 'HonorMagicBookX15') {
            let price_fourteen = document.querySelector("#price_fourteen").textContent;
            fullprice += Number(price_fourteen);
            var HonorMagicBookX15_amount = document.querySelector('#HonorMagicBookX15-amount');
            m += 1;
            HonorMagicBookX15_amount.innerHTML = m;}
        if(event.target.dataset.id == 'HIPERVRQ+') {
            let price_sixteen = document.querySelector("#price_sixteen").textContent;
            fullprice += Number(price_sixteen);
            var HIPERVRQ_amount = document.querySelector('#HIPERVRQ+-amount');
            n += 1;
            HIPERVRQ_amount.innerHTML = n;}
        if(event.target.dataset.id == 'HIPERVRR') {
            let price_seventeen = document.querySelector("#price_seventeen").textContent;
            fullprice += Number(price_seventeen);
            var HIPERVRR_amount = document.querySelector('#HIPERVRR-amount');
            o += 1;
            HIPERVRR_amount.innerHTML = o;}
        if(event.target.dataset.id == 'HIPERVRVRW') {
            let price_eighteen = document.querySelector("#price_eighteen").textContent;
            fullprice += Number(price_eighteen);
            var HIPERVRVRW_amount = document.querySelector('#HIPERVRVRW-amount');
            p += 1;
            HIPERVRVRW_amount.innerHTML = p;}
        if(event.target.dataset.id == 'CrucialCT240BX500SSD1') {
            let price_twenty = document.querySelector("#price_twenty").textContent;
            fullprice += Number(price_twenty);
            var CrucialCT240BX500SSD1_amount = document.querySelector('#CrucialCT240BX500SSD1-amount');
            q += 1;
            CrucialCT240BX500SSD1_amount.innerHTML = q;}
        if(event.target.dataset.id == 'SiliconPowerSP128GBSS3A5') {
            let price_fifteen = document.querySelector("#price_fifteen").textContent;
            fullprice += Number(price_fifteen);
            var SiliconPowerSP128GBSS3A5_amount = document.querySelector('#SiliconPowerSP128GBSS3A5-amount');
            r += 1;
            SiliconPowerSP128GBSS3A5_amount.innerHTML = r;}
        if(event.target.dataset.id == 'KingstonNV1SNVS500G500ГБ') {
            let price_six = document.querySelector("#price_six").textContent;
            fullprice += Number(price_six);
            var KingstonNV1SNVS500G500ГБ_amount = document.querySelector('#KingstonNV1SNVS500G500ГБ-amount');
            s += 1;
            KingstonNV1SNVS500G500ГБ_amount.innerHTML = s;}
        document.querySelector('.price').innerHTML = fullprice;
    } else {
        if(event.target.dataset.id == 'vivoy53s' && a !== 1) {
            let price_one = document.querySelector("#price_one").textContent;
            fullprice -= Number(price_one);
            var vivoy53s_amount = document.querySelector('#vivoy53s-amount');
            a -= 1;
            vivoy53s_amount.innerHTML = a;}
        if(event.target.dataset.id == 'HuaweiMateBookD15' && b !== 1) {
            let price_three = document.querySelector("#price_three").textContent;
            fullprice -= Number(price_three);
            var HuaweiMateBookD15_amount = document.querySelector('#HuaweiMateBookD15-amount');
            b -= 1;
            HuaweiMateBookD15_amount.innerHTML = b;}
        if(event.target.dataset.id == 'HIPERVRNeo' && c !== 1) {
            let price_four = document.querySelector("#price_four").textContent;
            fullprice -= Number(price_four);
            var HIPERVRNeo_amount = document.querySelector('#HIPERVRNeo-amount');
            c -= 1;
            HIPERVRNeo_amount.innerHTML = c;}
        if(event.target.dataset.id == 'SamsungGalaxyS20FE' && d !== 1) {
            let price_five = document.querySelector("#price_five").textContent;
            fullprice -= Number(price_five);
            var SamsungGalaxyS20FE_amount = document.querySelector('#SamsungGalaxyS20FE-amount');
            d -= 1;
            SamsungGalaxyS20FE_amount.innerHTML = d;}
        if(event.target.dataset.id == 'KingstonSA400S37240G' && e !== 1) {
            let price_two = document.querySelector("#price_two").textContent;
            fullprice -= Number(price_two);
            var KingstonSA400S37240G_amount = document.querySelector('#KingstonSA400S37240G-amount');
            e -= 1;
            KingstonSA400S37240G_amount.innerHTML = e;}
        if(event.target.dataset.id == 'IntelCorei310100F' && f !== 1) {
            let price_seven = document.querySelector("#price_seven").textContent;
            fullprice -= Number(price_seven);
            var IntelCorei310100F_amount = document.querySelector('#IntelCorei310100F-amount');
            f -= 1;
            IntelCorei310100F_amount.innerHTML = f;}
        if(event.target.dataset.id == 'XiaomiRedmiNote10Pro' && g !== 1) {
            let price_eight = document.querySelector("#price_eight").textContent;
            fullprice -= Number(price_eight);
            var XiaomiRedmiNote10Pro_amount = document.querySelector('#XiaomiRedmiNote10Pro-amount');
            g -= 1;
            XiaomiRedmiNote10Pro_amount.innerHTML = g;}
        if(event.target.dataset.id == 'AppleiPhone11' && h !== 1) {
            let price_nine = document.querySelector("#price_nine").textContent;
            fullprice -= Number(price_nine);
            var AppleiPhone11_amount = document.querySelector('#AppleiPhone11-amount');
            h -= 1;
            AppleiPhone11_amount.innerHTML = h;}
        if(event.target.dataset.id == 'AppleiPhone13ProMax' && i !== 1) {
            let price_ten = document.querySelector("#price_ten").textContent;
            fullprice -= Number(price_ten);
            var AppleiPhone13ProMax_amount = document.querySelector('#AppleiPhone13ProMax-amount');
            i -= 1;
            AppleiPhone13ProMax_amount.innerHTML = i;}
        if(event.target.dataset.id == 'HuaweiMateBookD16' && j !== 1) {
            let price_eleven = document.querySelector("#price_eleven").textContent;
            fullprice -= Number(price_eleven);
            var HuaweiMateBookD16_amount = document.querySelector('#HuaweiMateBookD16-amount');
            j -= 1;
            HuaweiMateBookD16_amount.innerHTML = j;}
        if(event.target.dataset.id == 'HuaweiMateBookD14' && k !== 1) {
            let price_twelve = document.querySelector("#price_twelve").textContent;
            fullprice -= Number(price_twelve);
            var HuaweiMateBookD14_amount = document.querySelector('#HuaweiMateBookD14-amount');
            k -= 1;
            HuaweiMateBookD14_amount.innerHTML = k;}
        if(event.target.dataset.id == 'LenovoIPGaming315ACH6' && l !== 1) {
            let price_thirteen = document.querySelector("#price_thirteen").textContent;
            fullprice -= Number(price_thirteen);
            var LenovoIPGaming315ACH6_amount = document.querySelector('#LenovoIPGaming315ACH6-amount');
            l -= 1;
            LenovoIPGaming315ACH6_amount.innerHTML = l;}
        if(event.target.dataset.id == 'HonorMagicBookX15' && m !== 1) {
            let price_fourteen = document.querySelector("#price_fourteen").textContent;
            fullprice -= Number(price_fourteen);
            var HonorMagicBookX15_amount = document.querySelector('#HonorMagicBookX15-amount');
            m -= 1;
            HonorMagicBookX15_amount.innerHTML = m;}
        if(event.target.dataset.id == 'HIPERVRQ+' && n !== 1) {
            let price_sixteen = document.querySelector("#price_sixteen").textContent;
            fullprice -= Number(price_sixteen);
            var HIPERVRQ_amount = document.querySelector('#HIPERVRQ+-amount');
            n -= 1;
            HIPERVRQ_amount.innerHTML = n;}
        if(event.target.dataset.id == 'HIPERVRR' && o !== 1) {
            let price_seventeen = document.querySelector("#price_seventeen").textContent;
            fullprice -= Number(price_seventeen);
            var HIPERVRR_amount = document.querySelector('#HIPERVRR-amount');
            o -= 1;
            HIPERVRR_amount.innerHTML = o;}
        if(event.target.dataset.id == 'HIPERVRVRW' && p !== 1) {
            let price_eighteen = document.querySelector("#price_eighteen").textContent;
            fullprice -= Number(price_eighteen);
            var HIPERVRVRW_amount = document.querySelector('#HIPERVRVRW-amount');
            p -= 1;
            HIPERVRVRW_amount.innerHTML = p;}
        if(event.target.dataset.id == 'CrucialCT240BX500SSD1' && q !== 1) {
            let price_twenty = document.querySelector("#price_twenty").textContent;
            fullprice -= Number(price_twenty);
            var CrucialCT240BX500SSD1_amount = document.querySelector('#CrucialCT240BX500SSD1-amount');
            q -= 1;
            CrucialCT240BX500SSD1_amount.innerHTML = q;}
        if(event.target.dataset.id == 'SiliconPowerSP128GBSS3A5' && r !== 1) {
            let price_fifteen = document.querySelector("#price_fifteen").textContent;
            fullprice += Number(price_fifteen);
            var SiliconPowerSP128GBSS3A5_amount = document.querySelector('#SiliconPowerSP128GBSS3A5-amount');
            r -= 1;
            SiliconPowerSP128GBSS3A5_amount.innerHTML = r;}
        if(event.target.dataset.id == 'KingstonNV1SNVS500G500ГБ' && s !== 1) {
            let price_six = document.querySelector("#price_six").textContent;
            fullprice += Number(price_six);
            var KingstonNV1SNVS500G500ГБ_amount = document.querySelector('#KingstonNV1SNVS500G500ГБ-amount');
            s -= 1;
            KingstonNV1SNVS500G500ГБ_amount.innerHTML = s;}
            if (fullprice < 0) {fullprice = 0}
        document.querySelector('.price').innerHTML = fullprice;
    }
}