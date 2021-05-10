
var load = function () {
    setTimeout(function () {
        chrome.storage.sync.get("percentage", ({ percentage }) => {
            if (percentage >= 1) {
                percentage = percentage / 100;
            }
            var rows = document.getElementsByClassName(
            "simpTblRow");

            console.log(rows);
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                var low = row.querySelector('[aria-label="Low"]');
                var high = row.querySelector('[aria-label="High"]');
                if (!low.innerText || !high.innerText) {
                    continue;
                }
                low = parseFloat(low.innerText);
                high = parseFloat(high.innerText);
                if (!low || !high) {
                    continue;
                }
                var change = (high - low) / low;
                if (change > parseFloat(percentage)) {
                    row.style.backgroundColor = "aqua";
                }
            }
        });
    }, 500);
};


window.onload = load;