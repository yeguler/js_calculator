function mouseDown(event) {
  
  let output = document.querySelector('textarea');
  if (event.target.tagName.toLowerCase() == 'td') {
    event.target.style.background = '#808080';
  }
  const value = event.target.innerText;
  console.log(Number(event.target.innerText));
  if (value == 'C') {
    output.value = '';
    return;
  }
  if (value.length <= 3 || value == '.' && !output.value.includes('.')) {
    
    if (value.length == 1) {
      // 
      if (opsMap.has(value) && !isNaN(output.value)) {
        nums.push(Number(value));
        if (opsMap.get(value) <= opsMap.get(ops[ops.length - 1])) {

        } else {
          ops.push(value);
        }
      }
      output.value += value;
    } else if (value.length == 2) {

    } else {

    }
  } 
  // else {
  //   switch (value) {
  //     case '(':
  //     case ')':
  //     case '+':
  //     case '-':
  //     case '×':
  //     case '÷':
  //   }
  // }
}

function mouseUp(event) {
  // console.log(event.target.tagName);
  if (event.target.tagName.toLowerCase() == 'td') {
    event.target.style.background = '#fff';
  }

}

function cal(nums, ops) {
  if (nums.length == 0 || ops.length == 1) {
    return;
  }
  const a = nums.pop();
  const b = nums.pop();
  const op = ops.pop();
  let ans = 0;
  switch (op) {
    case '+':
      ans = a + b;
      break;
    case '-':
      ans = b - a;
      break;
    case '×':
      ans =  a * b;
      break;
    case '÷':
      ans = b / a;
      break;
  }
  nums.push(ans);

}




const tds = document.querySelectorAll('td');
const table = document.querySelector("table");
console.log(table);
table.addEventListener('mousedown', mouseDown, false);
table.addEventListener('mouseup', mouseUp, false);

const opsMap = new Map([
  ['+', 1],
  ['-', 1],
  ['×', 2],
  ['÷', 2]
]);
const ops = [];
const nums = [0];
