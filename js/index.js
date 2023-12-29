const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const baseInput = document.getElementById("baseInput");
const heightInput = document.getElementById("heightInput");

const baseValue = document.getElementById("baseValue");
const heightValue = document.getElementById("heightValue");

const resultValue = document.getElementById("resultValue");
const displayResult = document.getElementById("result-wrapper");

const errorMessage = document.getElementsByClassName("error");

const pageLuasBtn = document.getElementById("pageLuas");
const pageKelilingBtn = document.getElementById("pageKeliling");

const pageLuas = document.getElementById("area-section");
const pageKeliling = document.getElementById("circumference-section");


const calculateArea = () => {
    let base = baseInput.value;
    let height = heightInput.value;

    if (_.isEmpty(base) || _.isEmpty(height)) {
        errorMessage[0].innerHTML = "Input tidak boleh kosong";
        setTimeout(() => {
            errorMessage[0].innerHTML = "";
        }, 1500);
        return;
    }

    if (base < 0 || height < 0) {
        errorMessage[0].innerHTML = "Input tidak boleh negatif";
        setTimeout(() => {
            errorMessage[0].innerHTML = "";
        }, 1500);
        return;
    }
    
    const luas = (1 / 2) * base * height;
    const value = luas;

    baseValue.innerText = base;
    heightValue.innerText = height;
    resultValue.innerText = value;

    displayResult.style.display = "block";
};

calculateBtn.addEventListener("click", calculateArea);

const resetValue = () => {
    baseInput.value = "";
    heightInput.value = "";

    baseValue.innerText = "0";
    heightValue.innerText = "0";
    resultValue.innerText = "0";

    displayResult.style.display = "none";
};

resetBtn.addEventListener("click", resetValue);

const navigateToKeliling = () => {
    pageLuas.style.display = "none";
    pageKeliling.style.display = "block";
};

pageKelilingBtn.addEventListener("click", navigateToKeliling);

const navigateToLuas = () => {
    pageLuas.style.display = "block";
    pageKeliling.style.display = "none";
};

pageLuasBtn.addEventListener("click", navigateToLuas);

// ==================== KELILING ==================== //
const kelilingSatu = document.getElementById("kelilingSatuInput");
const kelilingDua = document.getElementById("kelilingDuaInput");
const kelilingTiga = document.getElementById("kelilingTigaInput");

const kelilingValue = document.getElementById("kelilingValue");
const kelilingValueDua = document.getElementById("kelilingValueDua");
const kelilingValueTiga = document.getElementById("kelilingValueTiga");

const resultValueKeliling = document.getElementById("resultValueKeliling");
const displayKelilingResult = document.getElementById("result-keliling-wrapper");

const calculateKelilingBtn = document.getElementById("calculateKelilingBtn");
const resetKelilingBtn = document.getElementById("resetKelilingBtn");

const calculateKeliling = () => {
    const S1 = kelilingSatu.value;
    const S2 = kelilingDua.value;
    const S3 = kelilingTiga.value;

    if (_.isEmpty(S1) || _.isEmpty(S2) || _.isEmpty(S3)) {
        errorMessage[1].innerHTML = "Input tidak boleh kosong";
        setTimeout(() => {
            errorMessage[1].innerHTML = "";
        }, 1500);
        return;
    }

    if (S1 < 0 || S2 < 0 || S3 < 0) {
        errorMessage[1].innerHTML = "Input tidak boleh negatif";
        setTimeout(() => {
            errorMessage[1].innerHTML = "";
        }, 1500);
        return;
    }


    const keliling = parseInt(S1) + parseInt(S2) + parseInt(S3);
    const value = keliling;

    kelilingValue.innerText = S1;
    kelilingValueDua.innerText = S2;
    kelilingValueTiga.innerText = S3;
    resultValueKeliling.innerText = value;

    displayKelilingResult.style.display = "block";
};

calculateKelilingBtn.addEventListener("click", calculateKeliling);

const resetKeliling = () => {
    kelilingSatu.value = "";
    kelilingDua.value = "";
    kelilingTiga.value = "";

    kelilingValue.innerText = "0";
    kelilingValueDua.innerText = "0";
    kelilingValueTiga.innerText = "0";
    resultValueKeliling.innerText = "0";

    displayKelilingResult.style.display = "none";
}

resetKelilingBtn.addEventListener("click", resetKeliling);