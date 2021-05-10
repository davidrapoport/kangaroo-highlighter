let percent = document.getElementById("percentage");
let submit = document.getElementById("submit");

chrome.storage.sync.get("percentage", ({ percentage }) => {
  percent.placeholder = percentage;
});

submit.addEventListener("click", async () => {
  const percentage = parseFloat(percent.value);
  chrome.storage.sync.set({percentage});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
});
  window.close();
});

