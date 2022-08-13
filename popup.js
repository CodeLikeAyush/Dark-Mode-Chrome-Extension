if (document.querySelector(".popup")) {

    const toggle = document.querySelector("input");
    // alert(toggle.checked);
    // console.log(toggle.checked);

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            chrome.tabs.executeScript({
                file: 'appOn.js'
            })
        }
        else {
            chrome.tabs.executeScript({
                file: 'appOff.js'
            })
        }
    })







}