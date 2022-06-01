let a = 1; b = 1;c = 1;d = 1;e = 1;f = 1;g = 1;h = 1;i = 1;j = 1;k = 1;l = 1;m = 1;n = 1;o = 1;p = 1;q = 1;r = 1;s = 1;t = 1;
const massiv = ['vivoy53s','HuaweiMateBookD15','HIPERVRNeo','SamsungGalaxyS20FE','KingstonSA400S37240G','IntelCorei310100F','XiaomiRedmiNote10Pro','AppleiPhone11','AppleiPhone13ProMax','HuaweiMateBookD16','HuaweiMateBookD14','LenovoIPGaming315ACH6','HonorMagicBookX15','HIPERVRQ+','HIPERVRR','HIPERVRVRW','CrucialCT240BX500SSD1','SiliconPowerSP128GBSS3A5','KingstonNV1SNVS500G500ГБ','HIPERVRMax'];
document.onclick = event => {
    if (event.target.classList.contains('delete')) {
        let name_product_delete = event.target.dataset.id;
       if(massiv.some(element => element === name_product_delete)) {
        document.querySelector(`.${name_product_delete}`).style.display = 'none';
        localStorage.removeItem(`${name_product_delete}`);
        let name_price_minus = document.querySelector(`#${name_product_delete}`).textContent;
        fullprice -= name_price_minus;
        if (localStorage.length < 1) {
            document.querySelector('#empty').style.display = 'block';
            fullprice_elem.style.display = 'none';
            currency_fullprice.style.display = 'none';
        }
    }
    checking_product();
}
    function checking_product() {   
    if(event.target.dataset.id == 'vivoy53s' && a !== 1) {
        let price_one = document.querySelector("#vivoy53s").textContent;
        fullprice -= Number(price_one);
        var vivoy53s_amount = document.querySelector('#vivoy53s-amount');
        a -= 1;
        vivoy53s_amount.innerHTML = a;}
    if(event.target.dataset.id == 'HuaweiMateBookD15' && b !== 1) {
        let price_three = document.querySelector("#HuaweiMateBookD15").textContent;
        fullprice -= Number(price_three);
        var HuaweiMateBookD15_amount = document.querySelector('#HuaweiMateBookD15-amount');
        b -= 1;
        HuaweiMateBookD15_amount.innerHTML = b;}
    if(event.target.dataset.id == 'HIPERVRNeo' && c !== 1) {
        let price_four = document.querySelector("#HIPERVRNeo").textContent;
        fullprice -= Number(price_four);
        var HIPERVRNeo_amount = document.querySelector('#HIPERVRNeo-amount');
        c -= 1;
        HIPERVRNeo_amount.innerHTML = c;}
    if(event.target.dataset.id == 'SamsungGalaxyS20FE' && d !== 1) {
        let price_five = document.querySelector("#SamsungGalaxyS20FE").textContent;
        fullprice -= Number(price_five);
        var SamsungGalaxyS20FE_amount = document.querySelector('#SamsungGalaxyS20FE-amount');
        d -= 1;
        SamsungGalaxyS20FE_amount.innerHTML = d;}
    if(event.target.dataset.id == 'KingstonSA400S37240G' && e !== 1) {
        let price_two = document.querySelector("#KingstonSA400S37240G").textContent;
        fullprice -= Number(price_two);
        var KingstonSA400S37240G_amount = document.querySelector('#KingstonSA400S37240G-amount');
        e -= 1;
        KingstonSA400S37240G_amount.innerHTML = e;}
    if(event.target.dataset.id == 'IntelCorei310100F' && f !== 1) {
        let price_seven = document.querySelector("#IntelCorei310100F").textContent;
        fullprice -= Number(price_seven);
        var IntelCorei310100F_amount = document.querySelector('#IntelCorei310100F-amount');
        f -= 1;
        IntelCorei310100F_amount.innerHTML = f;}
    if(event.target.dataset.id == 'XiaomiRedmiNote10Pro' && g !== 1) {
        let price_eight = document.querySelector("#XiaomiRedmiNote10Pro").textContent;
        fullprice -= Number(price_eight);
        var XiaomiRedmiNote10Pro_amount = document.querySelector('#XiaomiRedmiNote10Pro-amount');
        g -= 1;
        XiaomiRedmiNote10Pro_amount.innerHTML = g;}
    if(event.target.dataset.id == 'AppleiPhone11' && h !== 1) {
        let price_nine = document.querySelector("#AppleiPhone11").textContent;
        fullprice -= Number(price_nine);
        var AppleiPhone11_amount = document.querySelector('#AppleiPhone11-amount');
        h -= 1;
        AppleiPhone11_amount.innerHTML = h;}
    if(event.target.dataset.id == 'AppleiPhone13ProMax' && i !== 1) {
        let price_ten = document.querySelector("#AppleiPhone13ProMax").textContent;
        fullprice -= Number(price_ten);
        var AppleiPhone13ProMax_amount = document.querySelector('#AppleiPhone13ProMax-amount');
        i -= 1;
        AppleiPhone13ProMax_amount.innerHTML = i;}
    if(event.target.dataset.id == 'HuaweiMateBookD16' && j !== 1) {
        let price_eleven = document.querySelector("#HuaweiMateBookD16").textContent;
        fullprice -= Number(price_eleven);
        var HuaweiMateBookD16_amount = document.querySelector('#HuaweiMateBookD16-amount');
        j -= 1;
        HuaweiMateBookD16_amount.innerHTML = j;}
    if(event.target.dataset.id == 'HuaweiMateBookD14' && k !== 1) {
        let price_twelve = document.querySelector("#HuaweiMateBookD14").textContent;
        fullprice -= Number(price_twelve);
        var HuaweiMateBookD14_amount = document.querySelector('#HuaweiMateBookD14-amount');
        k -= 1;
        HuaweiMateBookD14_amount.innerHTML = k;}
    if(event.target.dataset.id == 'LenovoIPGaming315ACH6' && l !== 1) {
        let price_thirteen = document.querySelector("#LenovoIPGaming315ACH6").textContent;
        fullprice -= Number(price_thirteen);
        var LenovoIPGaming315ACH6_amount = document.querySelector('#LenovoIPGaming315ACH6-amount');
        l -= 1;
        LenovoIPGaming315ACH6_amount.innerHTML = l;}
    if(event.target.dataset.id == 'HonorMagicBookX15' && m !== 1) {
        let price_fourteen = document.querySelector("#HonorMagicBookX15").textContent;
        fullprice -= Number(price_fourteen);
        var HonorMagicBookX15_amount = document.querySelector('#HonorMagicBookX15-amount');
        m -= 1;
        HonorMagicBookX15_amount.innerHTML = m;}
    if(event.target.dataset.id == 'HIPERVRQ+' && n !== 1) {
        let price_sixteen = document.querySelector("#HIPERVRQ+").textContent;
        fullprice -= Number(price_sixteen);
        var HIPERVRQ_amount = document.querySelector('#HIPERVRQ+-amount');
        n -= 1;
        HIPERVRQ_amount.innerHTML = n;}
    if(event.target.dataset.id == 'HIPERVRR' && o !== 1) {
        let price_seventeen = document.querySelector("#HIPERVRR").textContent;
        fullprice -= Number(price_seventeen);
        var HIPERVRR_amount = document.querySelector('#HIPERVRR-amount');
        o -= 1;
        HIPERVRR_amount.innerHTML = o;}
    if(event.target.dataset.id == 'HIPERVRVRW' && p !== 1) {
        let price_eighteen = document.querySelector("#HIPERVRVRW").textContent;
        fullprice -= Number(price_eighteen);
        var HIPERVRVRW_amount = document.querySelector('#HIPERVRVRW-amount');
        p -= 1;
        HIPERVRVRW_amount.innerHTML = p;}
    if(event.target.dataset.id == 'CrucialCT240BX500SSD1' && q !== 1) {
        let price_twenty = document.querySelector("#CrucialCT240BX500SSD1").textContent;
        fullprice -= Number(price_twenty);
        var CrucialCT240BX500SSD1_amount = document.querySelector('#CrucialCT240BX500SSD1-amount');
        q -= 1;
        CrucialCT240BX500SSD1_amount.innerHTML = q;}
    if(event.target.dataset.id == 'SiliconPowerSP128GBSS3A5' && r !== 1) {
        let price_fifteen = document.querySelector("#SiliconPowerSP128GBSS3A5").textContent;
        fullprice -= Number(price_fifteen);
        var SiliconPowerSP128GBSS3A5_amount = document.querySelector('#SiliconPowerSP128GBSS3A5-amount');
        r -= 1;
        SiliconPowerSP128GBSS3A5_amount.innerHTML = r;}
    if(event.target.dataset.id == 'KingstonNV1SNVS500G500ГБ' && s !== 1) {
        let price_six = document.querySelector("#KingstonNV1SNVS500G500ГБ").textContent;
        fullprice -= Number(price_six);
        var KingstonNV1SNVS500G500ГБ_amount = document.querySelector('#KingstonNV1SNVS500G500ГБ-amount');
        s -= 1;
        KingstonNV1SNVS500G500ГБ_amount.innerHTML = s;}
    if(event.target.dataset.id == 'HIPERVRMax' && t !== 1) {
        let price_nineteen = document.querySelector("#HIPERVRMax").textContent;
        fullprice -= Number(price_nineteen);
        var HIPERVRMax_amount = document.querySelector('#HIPERVRMax-amount');
        t -= 1;
        HIPERVRMax_amount.innerHTML = t;}
        if (fullprice < 0) {fullprice = 0}
    document.querySelector('.price').innerHTML = fullprice;
}
    if (event.target.classList.contains('plus')) {
        if(event.target.dataset.id == 'vivoy53s' && a !== 3) {
            let price_one = document.querySelector("#vivoy53s").textContent;
            fullprice += Number(price_one);
            var vivoy53s_amount = document.querySelector('#vivoy53s-amount');
            a += 1;
            vivoy53s_amount.innerHTML = a;}
        if(event.target.dataset.id == 'HuaweiMateBookD15' && b !== 3) {
            let price_three = document.querySelector("#HuaweiMateBookD15").textContent;
            fullprice += Number(price_three);
            var HuaweiMateBookD15_amount = document.querySelector('#HuaweiMateBookD15-amount');
            b += 1;
            HuaweiMateBookD15_amount.innerHTML = b;}
        if(event.target.dataset.id == 'HIPERVRNeo' && c !== 3) {
            let price_four = document.querySelector("#HIPERVRNeo").textContent;
            fullprice += Number(price_four);
            var HIPERVRNeo_amount = document.querySelector('#HIPERVRNeo-amount');
            c += 1;
            HIPERVRNeo_amount.innerHTML = c;}
        if(event.target.dataset.id == 'SamsungGalaxyS20FE' && d !== 3) {
            let price_five = document.querySelector("#SamsungGalaxyS20FE").textContent;
            fullprice += Number(price_five);
            var SamsungGalaxyS20FE_amount = document.querySelector('#SamsungGalaxyS20FE-amount');
            d += 1;
            SamsungGalaxyS20FE_amount.innerHTML = d;}
        if(event.target.dataset.id == 'KingstonSA400S37240G' && e !== 3) {
            let price_two = document.querySelector("#KingstonSA400S37240G").textContent;
            fullprice += Number(price_two);
            var KingstonSA400S37240G_amount = document.querySelector('#KingstonSA400S37240G-amount');
            e += 1;
            KingstonSA400S37240G_amount.innerHTML = e;}
        if(event.target.dataset.id == 'IntelCorei310100F' && f !== 3) {
            let price_seven = document.querySelector("#IntelCorei310100F").textContent;
            fullprice += Number(price_seven);
            var IntelCorei310100F_amount = document.querySelector('#IntelCorei310100F-amount');
            f += 1;
            IntelCorei310100F_amount.innerHTML = f;}
        if(event.target.dataset.id == 'XiaomiRedmiNote10Pro' && g !== 3) {
            let price_eight = document.querySelector("#XiaomiRedmiNote10Pro").textContent;
            fullprice += Number(price_eight);
            var XiaomiRedmiNote10Pro_amount = document.querySelector('#XiaomiRedmiNote10Pro-amount');
            g += 1;
            XiaomiRedmiNote10Pro_amount.innerHTML = g;}
        if(event.target.dataset.id == 'AppleiPhone11' && h !== 3) {
            let price_nine = document.querySelector("#AppleiPhone11").textContent;
            fullprice += Number(price_nine);
            var AppleiPhone11_amount = document.querySelector('#AppleiPhone11-amount');
            h += 1;
            AppleiPhone11_amount.innerHTML = h;}
        if(event.target.dataset.id == 'AppleiPhone13ProMax' && i !== 3) {
            let price_ten = document.querySelector("#AppleiPhone13ProMax").textContent;
            fullprice += Number(price_ten);
            var AppleiPhone13ProMax_amount = document.querySelector('#AppleiPhone13ProMax-amount');
            i += 1;
            AppleiPhone13ProMax_amount.innerHTML = i;}
        if(event.target.dataset.id == 'HuaweiMateBookD16' && j !== 3) {
            let price_eleven = document.querySelector("#HuaweiMateBookD16").textContent;
            fullprice += Number(price_eleven);
            var HuaweiMateBookD16_amount = document.querySelector('#HuaweiMateBookD16-amount');
            j += 1;
            HuaweiMateBookD16_amount.innerHTML = j;}
        if(event.target.dataset.id == 'HuaweiMateBookD14' && k !== 3) {
            let price_twelve = document.querySelector("#HuaweiMateBookD14").textContent;
            fullprice += Number(price_twelve);
            var HuaweiMateBookD14_amount = document.querySelector('#HuaweiMateBookD14-amount');
            k += 1;
            HuaweiMateBookD14_amount.innerHTML = k;}
        if(event.target.dataset.id == 'LenovoIPGaming315ACH6' && l !== 3) {
            let price_thirteen = document.querySelector("#LenovoIPGaming315ACH6").textContent;
            fullprice += Number(price_thirteen);
            var LenovoIPGaming315ACH6_amount = document.querySelector('#LenovoIPGaming315ACH6-amount');
            l += 1;
            LenovoIPGaming315ACH6_amount.innerHTML = l;}
        if(event.target.dataset.id == 'HonorMagicBookX15' && m !== 3) {
            let price_fourteen = document.querySelector("#HonorMagicBookX15").textContent;
            fullprice += Number(price_fourteen);
            var HonorMagicBookX15_amount = document.querySelector('#HonorMagicBookX15-amount');
            m += 1;
            HonorMagicBookX15_amount.innerHTML = m;}
        if(event.target.dataset.id == 'HIPERVRQ+' && n !== 3) {
            let price_sixteen = document.querySelector("#HIPERVRQ+").textContent;
            fullprice += Number(price_sixteen);
            var HIPERVRQ_amount = document.querySelector('#HIPERVRQ+-amount');
            n += 1;
            HIPERVRQ_amount.innerHTML = n;}
        if(event.target.dataset.id == 'HIPERVRR' && o !== 3) {
            let price_seventeen = document.querySelector("#HIPERVRR").textContent;
            fullprice += Number(price_seventeen);
            var HIPERVRR_amount = document.querySelector('#HIPERVRR-amount');
            o += 1;
            HIPERVRR_amount.innerHTML = o;}
        if(event.target.dataset.id == 'HIPERVRVRW' && p !== 3) {
            let price_eighteen = document.querySelector("#HIPERVRVRW").textContent;
            fullprice += Number(price_eighteen);
            var HIPERVRVRW_amount = document.querySelector('#HIPERVRVRW-amount');
            p += 1;
            HIPERVRVRW_amount.innerHTML = p;}
        if(event.target.dataset.id == 'CrucialCT240BX500SSD1' && q !== 3) {
            let price_twenty = document.querySelector("#CrucialCT240BX500SSD1").textContent;
            fullprice += Number(price_twenty);
            var CrucialCT240BX500SSD1_amount = document.querySelector('#CrucialCT240BX500SSD1-amount');
            q += 1;
            CrucialCT240BX500SSD1_amount.innerHTML = q;}
        if(event.target.dataset.id == 'SiliconPowerSP128GBSS3A5' && r !== 3) {
            let price_fifteen = document.querySelector("#SiliconPowerSP128GBSS3A5").textContent;
            fullprice += Number(price_fifteen);
            var SiliconPowerSP128GBSS3A5_amount = document.querySelector('#SiliconPowerSP128GBSS3A5-amount');
            r += 1;
            SiliconPowerSP128GBSS3A5_amount.innerHTML = r;}
        if(event.target.dataset.id == 'KingstonNV1SNVS500G500ГБ' && s !== 3) {
            let price_six = document.querySelector("#KingstonNV1SNVS500G500ГБ").textContent;
            fullprice += Number(price_six);
            var KingstonNV1SNVS500G500ГБ_amount = document.querySelector('#KingstonNV1SNVS500G500ГБ-amount');
            s += 1;
            KingstonNV1SNVS500G500ГБ_amount.innerHTML = s;}
        if(event.target.dataset.id == 'HIPERVRMax' && t !== 3) {
            let price_nineteen = document.querySelector("#HIPERVRMax").textContent;
            fullprice += Number(price_nineteen);
            var HIPERVRMax_amount = document.querySelector('#HIPERVRMax-amount');
            t += 1;
            HIPERVRMax_amount.innerHTML = t;}
        document.querySelector('.price').innerHTML = fullprice;
    } else {checking_product();}
}