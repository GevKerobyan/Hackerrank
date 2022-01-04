# Caesar Cipher

>Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

```
let abtOrig = `abcdefghijklmnopqrstuvwxyz`;
let k = 87;
let s = `www.abc.xy`

function caesarCipher(s, k) {

}

<!-- output => fff.jkl.gh -->
```
[see the solution](https://github.com/GevKerobyan/Hackerrank/blob/master/caesarCipher.js)

---

# Flipping the Matrix

>Sean invented a game involving a  matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the  submatrix located in the upper-left quadrant of the matrix.

>Given the initial configurations for  matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

```
let matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
]

function flippingMatrix(matrix) {

}

<!-- output => 414 -->
```
[see the solution](https://github.com/GevKerobyan/Hackerrank/blob/master/flippingTheMatrix.js)

---