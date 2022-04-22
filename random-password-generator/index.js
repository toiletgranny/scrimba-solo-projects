function generatePassword() {
  let charCount = document.querySelector("input[name=char-count]").value;
  let characters = "!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  let password = "";
  for (let i = 0; i < charCount; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password
}

function generatePasswords() {
  let resultsCount = document.querySelector("input[name=results-count]").value;
  let passwordsContainer = document.querySelector("#generated-passwords");
  passwordsContainer.innerHTML = "";
  for (let i = 0; i < resultsCount; i++) {
    passwordsContainer.innerHTML += '<input type="text" name="password-result" placeholder="● ● ●" value="' + generatePassword() + '" class="password-result" style="animation-delay: ' + [i]*10 + 'ms" onclick="copyPasswordToClipboard()" readonly>';
  }
}

function copyPasswordToClipboard() {
  event.target.select();
  let copyText = event.target.value;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied to clipboard");
  });
}

generatePasswords()
