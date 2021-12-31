function set_loading_btn(id, text) {
    $("#" + id).html('<i class="fa fa-circle-notch fa-spin"></i> ' + text);
    $("#" + id).prop('disabled', true);
}

function getComma(nStr) {
    if (nStr.length < 1) {
        return '';
    }
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function openNav(margin = 0) {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("content").style.marginRight = margin + "px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").style.marginRight = "0";
}


function get_text(id) {
    let txt = $("#" + id).val();
    txt = txt.replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
    }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
    });
    txt = replaceAll("ي", "ی", txt);
    txt = replaceAll("ك", "ک", txt);
    txt = replaceAll(";", ":", txt);
    return txt;
}

function replaceAll(find, replace, str) {
    str = str.toString();
    while (str.indexOf(find) > -1) {
        str = str.replace(find, replace);
    }
    return str;
}

function getEnglish(number) {
    var ss = number.replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
    }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
    });
    ss = replaceAll(",", "", ss);
    ss = replaceAll("/", ".", ss);
    return ss;
}

function get_int(id) {
    return parseInt(getEnglish($("#" + id).val()));
}

function convert_int(value) {
    return parseInt(getEnglish(value));
}

function get_float(id) {
    return parseFloat(getEnglish($("#" + id).val()));
}