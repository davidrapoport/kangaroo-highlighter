let percentage = 10;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ percentage });
});
