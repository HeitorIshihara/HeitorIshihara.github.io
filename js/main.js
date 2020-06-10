function validateForm() {
    event.preventDefault();

    var initialText = document.getElementById("initial-textarea").value;
    var searchMask = document.getElementById("findword").value;
    var replaceMask = document.getElementById("replacementword").value;

    if (initialText == "" || searchMask == "" || replaceMask == "") {
        alert("Você deve preencher todos os campos.");
    } else {
        replace();
    }
}


function replace() {

    let caseInsensitive = document.getElementById("case-sensitive-checkbox").checked;
    var initialText = document.getElementById("initial-textarea").value;
    var searchMask = document.getElementById("findword").value;;
    var replaceMask = document.getElementById("replacementword").value;

    var resultTextArea = document.getElementById("result-textarea");
    var resultTextAreaLabel = document.getElementById("result-textarea-label");
    var copyButton = document.getElementById("copy-button");

    var result = "";

    if (caseInsensitive) {
        result = initialText.replaceAllCaseInsensetive(searchMask, replaceMask);
    } else {
        result = initialText.split(searchMask).join(replaceMask);
    }
    resultTextArea.value = result;

    if(resultTextArea.offsetHeight < resultTextArea.scrollHeight) {
        resultTextArea.style.height = resultTextArea.scrollHeight + "px";
    } else {
        resultTextArea.style.height = "50px";
    }

    resultTextArea.hidden = false;
    resultTextAreaLabel.hidden = false;
    copyButton.hidden = false;

}

function copy() {
    var resultTextArea = document.getElementById("result-textarea");
    resultTextArea.select();
    resultTextArea.setSelectionRange(0, resultTextArea.value.length);
    document.execCommand("copy");

    alert("Texto copiado para área de transferência")
}

String.prototype.replaceAllCaseInsensetive = function(strReplace, strWith) {
    var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    var reg = new RegExp(esc, 'ig');
    return this.replace(reg, strWith);
}