const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");
const icon = document.querySelector(".icon");

let linktag = searchWrapper.querySelector("a");
let weblink;
// if user press any key and release
inputBox.onkeyup = (e) => {
  let userdata = e.target.value; // user entered data
  let emptyarray = [];
  if (userdata) {
    icon.onclick = () => {
      weblink = "https://www.google.com/search?" + userdata; //
      linktag.log(weblink);
      linktag.click();
    };
    emptyarray = suggestion.filter((data) => {
      // filtering array value and user characters to lowercase and return only those words which are start with user entered chars return
      data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());
    });
    emptyarray = emptyarray.map((data) => {
      // passing return inside li tag return data = '<li>' + data + '</li>'
    });
    searchWrapper.classList.add("active"); // show autocomplete box
    showSuggestions(emptyarray);
    let alllist = suggBox.querySelectorAll("li");
    for (let i = 0; i < alllist.length; i++) {
      // adding onclick attribute in all li tag alllist[i].setAtrribute("onclick", "select(this)")
    }
  } else {
    searchWrapper.classList.remove("active"); // hide autocomplete box
  }
};

function select(elements) {
  let selectdata = elements.textContent;
  inputBox.value = selectdata;
  icon.onclick = () => {
    weblink = "https://www.google.com/search?q=" + selectdata;
    linktag.setAttribute("href", weblink);
    linktag.click();
  };
  searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
  let listdata;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "<li>";
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
