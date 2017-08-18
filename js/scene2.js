function scene2() {
  console.log('Executing scene 2!')
  // Setup Stage
  stage = document.querySelector('#stage');
  castle = document.querySelector('#castle');
  stageImg = stage.querySelector('#stage-img');
  castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);

  // Setup Cast

  // Character 1
  nedContainer = document.createElement('div');
  stage.append(nedContainer);

  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '37%';
  nedContainer.style.top = '55%';
  nedContainer.style.left = '25%';
  nedContainer.style.border = 'none';
  nedContainer.style.background = 'none';


  ned = document.querySelector('#ned');
  nedContainer.append(ned);
  armour = document.querySelector('#leather-armour');
  nedContainer.append(armour);

  ned.style.border = 'none';
  ned.style.width = '70%';
  armour.style.border = 'none';

  ned.style.position = 'absolute';
  ned.style.top = 0;
  armour.style.position = 'absolute';
  armour.style.bottom = 0;


  // Character 2
  joffreyContainer = document.createElement('div');
  stage.append(joffreyContainer);


  joffreyContainer.style.position = 'absolute';
  joffreyContainer.style.width = '10%';
  joffreyContainer.style.height = '36%';
  joffreyContainer.style.top = '55%';
  joffreyContainer.style.left = '55%';
  joffreyContainer.style.border = 'none';
  joffreyContainer.style.background = 'none';

  joffrey = document.querySelector('#joffrey');
  kingClothes = document.querySelector('#king');
  joffreyContainer.append(joffrey);
  joffreyContainer.append(kingClothes);

  joffrey.style.width = '60%';

  joffrey.style.position = 'absolute';
  joffrey.style.top = 0;
  joffrey.style.right = 0;
  kingClothes.style.position = 'absolute';
  kingClothes.style.bottom = 0;


  // Setup Props


  // Prop 1
  sword = document.querySelector('#sword')
  stage.append(sword);
  sword.style.position = 'absolute'
  sword.style.top = '75%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotate(150deg)'

  // Prop 2


  // Action!



  // Stage direction 1

  frame(function() {
    sword.style.top = '75%'
    sword.style.left = '31%'

  })


  frame(function() {
    sword.style.top = '72.5%'
    sword.style.left = '36.5%'

  })

  frame(function() {
    sword.style.top = '70%'
    sword.style.left = '42%'

  })
  frame(function() {
    sword.style.top = '67.5%'
    sword.style.left = '47%'

  })

  frame(function() {
    sword.style.top = '65%'
    sword.style.left = '52%'
  })

  frame(function() {
    joffrey.style.top = 0
    joffrey.style.left = '39%'
    
  })
  frame(function() {
    joffrey.style.top = '20%'
    joffrey.style.left = '105%'
    joffrey.style.transform = 'rotate(220deg)'


  })
  frame(function() {
    joffrey.style.top = '40%'
    joffrey.style.left = '170%'
    joffrey.style.transform = 'rotate(140deg)'

  })
  frame(function() {
    joffrey.style.top = '60%'
    joffrey.style.left = '235%'
    joffrey.style.transform = 'rotate(260deg)'

  })
  frame(function() {
    joffrey.style.top = '80%'
    joffrey.style.left = '300%'
    joffrey.style.transform = 'rotate(180deg)'
  })

}
