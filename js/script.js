function Data(text) {
    this.text = text
}

function joomagForFree() {
    if (localStorage.getItem('regData') != null) {
        var regData = JSON.parse(localStorage.getItem('regData'));
    } else {
        var regData = [];
    }
    regData.push(new Data($('.textSave').val()));
    localStorage.setItem('regData', JSON.stringify(regData));
    console.log(regData);
    $(".textSave")[0].value = "";
}

if (localStorage.getItem('regData') != null) {
    var regData = JSON.parse(localStorage.getItem('regData'));
    console.log(regData)
}

function footerJoomagFree() {
    var val = $(".workEmail")[0].value;
    if (val != "") {
        alert(val)
        $(".workEmail")[0].value = "";
    }
}
var bool1 = true;
var bool2 = true;
var bool3 = true;
var bool4 = true;
var bool5 = true;
var timerId = setInterval(function() {
    if (bool1) {
        $(".one").attr("id", "displeyNone");
        $(".too").removeAttr("displeyNone");
        $(".too").attr("id", "displeyblock");
        bool1 = false;
    } else {
        $(".too").attr("id", "displeyNone");
        $(".one").removeAttr("displeyNone");
        $(".one").attr("id", "displeyblock");
        bool1 = true;
    }
    if (bool2) {
        $(".three").attr("id", "displeyNone");
        $(".four").removeAttr("displeyNone");
        $(".four").attr("id", "displeyblock");
        bool2 = false;
    } else {
        $(".four").attr("id", "displeyNone");
        $(".three").removeAttr("displeyNone");
        $(".three").attr("id", "displeyblock");
        bool2 = true;
    }
    if (bool3) {
        $(".five").attr("id", "displeyNone");
        $(".six").removeAttr("displeyNone");
        $(".six").attr("id", "displeyblock");
        bool3 = false;
    } else {
        $(".six").attr("id", "displeyNone");
        $(".five").removeAttr("displeyNone");
        $(".five").attr("id", "displeyblock");
        bool3 = true;
    }
    if (bool4) {
        $(".seven").attr("id", "displeyNone");
        $(".eight").removeAttr("displeyNone");
        $(".eight").attr("id", "displeyblock");
        bool4 = false;
    } else {
        $(".eight").attr("id", "displeyNone");
        $(".seven").removeAttr("displeyNone");
        $(".seven").attr("id", "displeyblock");
        bool4 = true;
    }
    if (bool5) {
        $(".nine").attr("id", "displeyNone");
        $(".ten").removeAttr("displeyNone");
        $(".ten").attr("id", "displeyblock");
        bool5 = false;
    } else {
        $(".ten").attr("id", "displeyNone");
        $(".nine").removeAttr("displeyNone");
        $(".nine").attr("id", "displeyblock");
        bool5 = true;
    }
}, 2000);