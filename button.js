document.getElementById('btn').addEventListener("click", function(e) {
  browser.tabs.update({
      url: 'whatsapp://send/?phone='+document.getElementById('txtPhone').value
    });
});