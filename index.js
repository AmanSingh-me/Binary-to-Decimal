const form = document.getElementsByTagName("form")[0];
const result = document.querySelector(".result");




form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    form.reset();

    let binaryNum = Number(Object.fromEntries(formData)?.text?.trim());

    const isBinary = /\b[01]+\b/;
    if(isBinary.test(binaryNum)) convertBinary(binaryNum);
    else alert("Please Enter a Valid Binary Number")

}

function convertBinary(num){
    result.textContent = parseInt(num, 2);
}


