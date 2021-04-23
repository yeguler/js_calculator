function mouseDown(event) {
  
  let output = document.querySelector('textarea');
  if (event.target.tagName.toLowerCase() == 'td') {
    event.target.style.background = '#808080';
  }
  const value = event.target.innerText;
  console.log(Number(event.target.innerText));
  if (value == 'C') {
    output.value = '';
    ops = [];
    nums = [0];
    num = '';
    return;
  }
  if (value.length <= 3 || value == '.' && !output.value.includes('.')) {
    
    if (value.length == 1) {
      // 
      if (opsMap.has(value)) {
        if (num != '') {
          nums.push(Number(num));
        }
        
        num = '';
        while (opsMap.get(value) <= opsMap.get(ops[ops.length - 1])) {
          cal(nums, ops);
        } 
        ops.push(value);
        
      } else if(value != '=') {
        num += value;
      }
      output.value += value;
      if (value == '=') {
        if (num != '') {
          nums.push(Number(num));
        }
        let ans = 0;
        while(nums.length > 2) {
          ans = cal(nums, ops);
        }
        output.value = ans;
        num = '';
      }
      
    } else if (value.length == 2) {
      if (/\d/.test(Number(output.value[output.value.length - 1]))) {
        nums.push(Number(num));
        num = '';
        while (ops[ops.length - 1] != '(') {
          cal(nums, ops);
        }
        ops.pop();
        output.value += ')';
        
      } else {
        output.value += '(';
        ops.push('(');
      }
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
  let ans = 0;
  if (nums.length == 1 || ops.length == 0) {
    return ans; 
  }
  const a = nums.pop();
  const b = nums.pop();
  const op = ops.pop();
  
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
  return ans;

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
let ops = [];
let nums = [0];
let num = '';
