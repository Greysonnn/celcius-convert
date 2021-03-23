//Write your pseduo code first!
// shit needa intake a mf temperature
// shit needa parse that info to a equation
// shit needa convert the mf temperature
// mf needa output that mf converted temp got dammit

// getting the value out of input
// convert it
// put it back in the DOM

document.querySelector("#convert").addEventListener('click', convertThat)

function convertThat(){
  let degree = document.querySelector('#temp').value
  degree = degree * 1.8 + 32
  document.querySelector('#result').innerText = degree
}
