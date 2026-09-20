let mvvb1 = document.getElementById('mvvb1');
let mvvb2 = document.getElementById('mvvb2');
let mvvb3 = document.getElementById('mvvb3');



function show1() {
  let mission = document.getElementById('mission');
  let mvvb1 = document.getElementById('mvvb1');
  let mvvb1h = document.getElementById('mvvb1h');

  mission.style.height = "auto";
  mvvb1.style.display = "none";
  mvvb1h.style.display = "block";
}

function show2() {
  let vision = document.getElementById('vision');
  let mvvb2 = document.getElementById('mvvb2');
  let mvvb2h = document.getElementById('mvvb2h');

  vision.style.height = "auto";
  mvvb2.style.display = "none";
  mvvb2h.style.display = "block";
}

function show3() {
  let values = document.getElementById('values');
  let mvvb3 = document.getElementById('mvvb3');
  let mvvb3h = document.getElementById('mvvb3h');

  values.style.height = "auto";
  mvvb3.style.display = "none";
  mvvb3h.style.display = "block";
}



function hide1() {
  let mission = document.getElementById('mission');
  let mvvb1 = document.getElementById('mvvb1');
  let mvvb1h = document.getElementById('mvvb1h');

  mission.style.height = "200px";
  mvvb1.style.display = "block";
  mvvb1h.style.display = "none";
}

function hide2() {
  let vision = document.getElementById('vision');
  let mvvb2 = document.getElementById('mvvb2');
  let mvvb2h = document.getElementById('mvvb2h');

  vision.style.height = "200px";
  mvvb2.style.display = "block";
  mvvb2h.style.display = "none";
}

function hide3() {
  let values = document.getElementById('values');
  let mvvb3 = document.getElementById('mvvb3');
  let mvvb3h = document.getElementById('mvvb3h');

  values.style.height = "200px";
  mvvb3.style.display = "block";
  mvvb3h.style.display = "none";
}