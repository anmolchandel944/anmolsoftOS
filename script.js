
// Boot → Login (3.8s)
setTimeout(() => {
  document.getElementById('boot').style.display = 'none';
  document.getElementById('login').style.display = 'block';
}, 3800);

// Login → Desktop
function login() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('desktop').style.display = 'block';
  document.getElementById('logon').play();
}

// Live Clock
setInterval(() => {
  document.getElementById('clock').innerText = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
}, 1000);

function toggleStartMenu() {
  const menu = document.getElementById('startMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  document.getElementById('click').play();
}

function openWindow(id) {
  document.getElementById(id).style.display = 'block';
  document.getElementById('click').play();
}
function closeWin(id) { document.getElementById(id).style.display = 'none'; }

// Draggable windows (tera original code)
document.querySelectorAll('.titlebar').forEach(bar => {
  bar.onmousedown = function(e) {
    let win = bar.parentElement;
    let shiftX = e.clientX - win.getBoundingClientRect().left;
    let shiftY = e.clientY - win.getBoundingClientRect().top;
    function move(e) {
      win.style.left = (e.clientX - shiftX) + 'px';
      win.style.top = (e.clientY - shiftY) + 'px';
    }
    document.onmousemove = move;
    document.onmouseup = () => { document.onmousemove = null; };
  };
});
