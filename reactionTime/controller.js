let startTime;

function turnOnTheLight() {
    model.selectedLampIndex = Math.floor(Math.random() * 25);
    startTime = new Date().getTime();
    updateView(model.selectedLampIndex, 'turnOffLight');
}

function turnOffLight(){
    const finishTime = new Date().getTime();
    const spentMilliseconds = finishTime - startTime;
    const spentSeconds = spentMilliseconds / 1000;

    alert(`Reaction time: ${spentSeconds} sec.`);

   model.selectedLampIndex = null;
   updateView(model.selectedLampIndex, '');

   setTimeout(turnOnTheLight, 1000);
}