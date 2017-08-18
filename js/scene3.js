function scene3() {

  // Setup Stage
  stage = document.querySelector('#stage')
  desert = document.querySelector('#desert')

  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)



  // Setup Cast

  // Character 1
  danyContainer = document.createElement('div');
  stage.append(danyContainer);


  danyContainer.style.position = 'absolute';
  danyContainer.style.width = '10%';
  danyContainer.style.height = '35%';
  danyContainer.style.top = '55%';
  danyContainer.style.left = '26%';
  danyContainer.style.border = 'none';
  danyContainer.style.background = 'none';

  dany = document.querySelector('#danerys');
  danyContainer.append(dany);
  dress = document.querySelector('#blue-dress');
  danyContainer.append(dress);

  dany.style.border = 'none';
  dany.style.width = '53%';


  dany.style.position = 'absolute';
  dany.style.top = 0;
  dany.style.left = '10%'
  dress.style.position = 'absolute';
  dress.style.bottom = 0;


  // Character 2
  drogoContainer = document.createElement('div');
  stage.append(drogoContainer)

  drogoContainer.style.position = 'absolute';
  drogoContainer.style.width = '10%';
  drogoContainer.style.height = '35.5%';
  drogoContainer.style.top = '55%';
  drogoContainer.style.left = '75%';
  drogoContainer.style.border = 'none';
  drogoContainer.style.background = 'none';

  drogo = document.querySelector('#drogo');
  drogoContainer.append(drogo);
  buffMan = document.querySelector('#bulky-man')
  drogoContainer.append(buffMan)

  //
  drogo.style.border = 'none';
  drogo.style.width = '65%';


  drogo.style.position = 'absolute';
  drogo.style.top = 0;
  drogo.style.left = '10%'
  buffMan.style.position = 'absolute';
  buffMan.style.bottom = 0;

  // Setup Props

  // Prop 1
  egg = document.querySelector('#egg')
  stage.append(egg);
  egg.style.position = 'absolute'
  egg.style.top = '72%'
  egg.style.left = '29%'
  egg.style.height = '5%'



  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.top = '72%'
    egg.style.left = '29%'
  })
  frame(function() {
    egg.style.top = '75.25%'
    egg.style.left = '42.25%'
  })
  frame(function() {
    egg.style.top = '78.5%'
    egg.style.left = '55.5%'
  })
  frame(function() {
    egg.style.top = '81.75%'
    egg.style.left = '68.75%'
  })

  frame(function() {
    egg.style.top = '85%'
    egg.style.left = '82%'
  })
  frame(function() {
    egg.style.top = '81.75%'
    egg.style.left = '68.75%'
  })
  frame(function() {
    egg.style.top = '78.5%'
    egg.style.left = '55.5%'
  })
  frame(function() {
    egg.style.top = '75.25%'
    egg.style.left = '42.25%'
  })
    frame(function() {
      egg.style.top = '72%'
      egg.style.left = '29%'
    })





}
