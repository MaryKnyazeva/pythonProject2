
function verify() {
    console.log("a, h, r, m")
    let a = parseInt(elementA.value);
    let h = parseInt(elementH.value);
    let r = parseInt(elementR.value);
    let m = parseInt(elementM.value);

    console.log(a, h, r, m)

    let volumeCube, volumeCylinder
    volumeCube = a ** 3;
    volumeCylinder = Math.PI * r ** 2 * h;

    if (m <= volumeCube && m <= volumeCylinder) {
        result = " Жидкость  поместится в обе ёмкости."
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    }
    if (m > volumeCube && m > volumeCylinder) {
        result = " Жидкость не поместится ни в одну из ёмкостей."
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false
    }
    if (m <= volumeCube && m > volumeCylinder) {
        result = " Жидкость поместится только в кубическую ёмкость.";
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false
    }
    if (m <= volumeCylinder && m > volumeCube) {
        result = " Жидкость поместится только в цилиндрическую ёмкость.";
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false
    }}

    function send() {
        if (check) {
            let textCondition = document.getElementsByTagName('p')[0].innerText
            document.getElementsByName('formulation')[0].value = textCondition;
            document.getElementsByName('result')[0].value = result;
            document.getElementById("UserEnter").submit();
        } else {
            alert("Есть ошибки. Повторите ввод")
        }
    }

    function verify_send() {
        verify();
        send();
    }

    let messageText = document.getElementById("result").innerText
    console.log(messageText)
    let result;
    let check = false;

    const elementA = document.getElementById("a");
    elementA.addEventListener('input', verify);


    const elementH = document.getElementById("h");
    elementH.addEventListener('keyup', verify);

    const elementR = document.getElementById("r");
    elementR.addEventListener('keyup', verify);

    const elementM = document.getElementById("m");
    elementM.addEventListener('keyup', verify);

    const elementVerify = document.getElementById("verify");
    elementVerify.addEventListener('click', verify);

    const elementSend = document.getElementById("send");
    elementSend.addEventListener('click', send)