// ------------------------------------------- caesarCipher ----------------------------------- \\

let k = 87;
let s = `www.abc.xy`

function caesarCipher(s, k) {
  let abtOrig = `abcdefghijklmnopqrstuvwxyz`;
  let abtOrigArr = abtOrig.split(``);

  if (k > abtOrig.length) {
    k = k % abtOrig.length;
  }

  let abtSwitch = abtOrig.slice(k).concat(abtOrig.slice(0, k));
  let abtSwitchArr = abtSwitch.split(``);


  let sArr = s.split(``);

  let newS = [];
  let newStringS = ``;

    for (let i = 0; i < sArr.length; i++) {
    if (abtOrigArr.includes(sArr[i].toLowerCase())) {
      if (sArr[i] === sArr[i].toLowerCase()) {
        newS.push(abtSwitchArr[abtOrigArr.indexOf(sArr[i])]);
      } else if (sArr[i] === sArr[i].toUpperCase()) {
        newS.push(abtSwitchArr[abtOrigArr.indexOf(sArr[i].toLowerCase())].toUpperCase());
      }
    } else 
      newS.push(sArr[i])
    ;
    newStringS = newS.join(``);
  }
  return newStringS;
}

console.log(caesarCipher (s,k));

// --------------- SOLVED --------------- \\
