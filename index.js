/*  BOLAS  */ 

const vmv = document.getElementById('vmv');
const vision = document.getElementById('vision');
const values = document.getElementById('values');
const mission = document.getElementById('mission');
const vmvTitle = document.getElementsByClassName('vmvTitle');
const vmvContent = document.getElementsByClassName('vmvContent');

const styles = [  {    transform: 'translateX(-105%)',    border: '3vh double #dbe5e3',    opacity: 1  },  {    transform: 'translateX(105%)',    border: '3vh double #dbe5e3',    opacity: 1  },  {    transform: 'translateX(-65%)',    border: '0vh double #dbe5e3',    opacity: 0  }, {    transform: 'translateX(65%)',    border: '0vh double #dbe5e3',    opacity: 0  }];

vmv.addEventListener('mouseover', function () {
  vision.style.transform = styles[0].transform;
  values.style.transform = styles[1].transform;
  vision.style.border = styles[0].border;
  values.style.border = styles[1].border;
  mission.style.border = styles[0].border;
  for (let i = 0; i < 3; i++) {
    vmvTitle[i].style.opacity = styles[0].opacity;
    vmvContent[i].style.opacity = styles[0].opacity;
  }
});

vmv.addEventListener('mouseout', function () {
  vision.style.transform = styles[2].transform;
  values.style.transform = styles[3].transform;
  vision.style.border = styles[2].border;
  values.style.border = styles[3].border;
  mission.style.border = styles[2].border;
  for (let i = 0; i < 3; i++) {
    vmvTitle[i].style.opacity = styles[2].opacity;
    vmvContent[i].style.opacity = styles[2].opacity;
  }
});


