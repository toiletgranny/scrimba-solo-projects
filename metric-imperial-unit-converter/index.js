if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule(
    "https://www.unpkg.com/css-houdini-squircle@0.1.3/squircle.min.js"
  );
}

var conversionRates = {
  meterFeet: 3.2808399,
  feetMeter: 0.3048,
  literGallon: 0.264172052,
  gallonLiter: 3.78541178,
  kiloPound: 2.20462262,
  poundKilo: 0.45359237,
};

function convertUnits() {
  let input = document.querySelector("#conversion-value").value;

  let inValues = document.querySelectorAll(".user-input");
  inValues.forEach((inValue) => {
    inValue.innerHTML = input;
  });

  let outValues = document.querySelectorAll(".output");
  outValues.forEach((outValue) => {
    let conversionMode = outValue.dataset.convertMode;
    let rate = conversionRates[conversionMode];
    outValue.innerHTML = Math.round(((input * rate) + Number.EPSILON) * 1000) / 1000;
  });
}

convertUnits()
