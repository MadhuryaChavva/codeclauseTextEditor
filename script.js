function run() {
    let htmlCode = document.getElementById("html-code").value;
    let CSSCode = document.getElementById("css-code").value;
    let JSCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode +"<style>"+CSSCode+"</style>" ;
    output.contentWindow.eval(JSCode);
}