function toggleDarkMode() {
   const body = document.body;
   const isDarkMode = body.classList.toggle('dark-mode');
   const modeButton = document.getElementById('darkModeToggle');
   
   if (isDarkMode) {
       modeButton.innerHTML = '☀️ Switch to Light Mode'; // Update to light mode text
   } else {
       modeButton.innerHTML = '🌙 Switch to Dark Mode'; // Update to dark mode text
   }

   localStorage.setItem('darkMode', isDarkMode);
}

window.addEventListener('load', () => {
   const savedMode = localStorage.getItem('darkMode');
   const isDarkMode = savedMode === 'true';
   
   if (isDarkMode) {
       document.body.classList.add('dark-mode');
       document.getElementById('darkModeToggle').innerHTML = '☀️ Switch to Light Mode';
   } else {
       document.getElementById('darkModeToggle').innerHTML = '🌙 Switch to Dark Mode';
   }
});

document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

function Solve(val) {
   var v = document.getElementById('res');
   if (val === '.' && v.value.includes('.')) {
       return;
   }
   v.value += val;
}

function Result() {
   var num1 = document.getElementById('res').value;
   try {
       if (/[\+\-\*\/\.]{2,}/.test(num1)) {
           throw new Error("Invalid operation");
       }
       var num2 = eval(num1.replace('x', '*'));
       document.getElementById('res').value = num2;
   } catch {
       document.getElementById('res').value = 'Error';
   }
}

function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}

function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
   } else if (key === 'Enter') {
       Result();
   } else if (key === 'Backspace') {
       Back();
   } else if (key.toLowerCase() === 'c') {
       Clear();
   }
});
