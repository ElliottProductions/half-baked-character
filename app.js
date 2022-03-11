// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');
const nameEl = document.getElementById('name-space');

// set state for how many times the user changes the head, middle, and bottom
let headChanges = 0;
let middleChanges = 0;
let bottomChanges = 0;
// set state for all of the character's catchphrases
let catchphrases = [];
//////trying for naming stretchgoal---or rather, my own interpretation of it
let headCurrent = '';

let birdName = '';
let duckName = '';
let dogName = '';
let horseName = '';
///////
let headArr = [{ display: 'Duck Head', value: 'duck' }, { display: 'Bird Head', value: 'bird' }, { display: 'Horse Head', value: 'horse' }, { display: 'Dog Head', value: 'dog' }];



for (let head of headArr){
    const option = document.createElement('option');

    option.classList.add('head');
    option.textContent = head.display;
    option.value = head.value;

    headDropdown.append(option);
}


//let middleArr = [];
//let bottomArr = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    let chosenHead = headDropdown.value;
    // increment the head change count state
    headChanges++;
    // update the dom for the head (use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    headEl.style.backgroundImage = `url("./assets/${chosenHead}-head.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();
    
    headCurrent = `${chosenHead}`;

    nameEl.textContent = '';

    getCurrentHeadName();

});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    let chosenMiddle = middleDropdown.value;
    // increment the middle change count state
    middleChanges++;
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    middleEl.style.backgroundImage = `url("./assets/${chosenMiddle}-middle.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();

});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    let chosenBottom = bottomDropdown.value;
    // increment the bottom change count state
    bottomChanges++;
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    bottomEl.style.backgroundImage = `url("./assets/${chosenBottom}-pants.png")`;
    // update the stats to show the new count (call displayStats() to do this work)
    displayStats();

});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let phraseInput = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(`${phraseInput}`);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();

});

nameButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let newName = nameInput.value;
    // push the new catchphrase to the catchphrase array in state
    if (headCurrent === 'bird') {
        birdName = newName;
    }
    if (headCurrent === 'duck') {
        duckName = newName;
    }
    if (headCurrent === 'dog') {
        dogName = newName;
    }
    if (headCurrent === 'horse') {
        horseName = newName;
    }
    nameEl.textContent = `${newName}`;
    // clear out the form input's value so it's empty to the user
    nameInput.value = '';
    //console.log(`${headCurrent}${middleCurrent}${bottomCurrent}`);


});

function displayStats() {
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You've chosen a head ${headChanges} time(s), a new top ${middleChanges} time(s), and new pants ${bottomChanges} time(s).`;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let phrase of catchphrases){
        const div = document.createElement('div');

        div.classList.add('phrase');
        div.textContent = phrase;

        catchphrasesEl.append(div);
    }
}

function getCurrentHeadName() {
    if (headCurrent === 'bird') {
        nameEl.textContent = `${birdName}`;
    }
    if (headCurrent === 'duck') {
        nameEl.textContent = `${duckName}`;
    }
    if (headCurrent === 'dog') {
        nameEl.textContent = `${dogName}`;
    }
    if (headCurrent === 'horse') {
        nameEl.textContent = `${horseName}`;
    }
}

                        //<option value="bird">Bird</option>
                        //<option value="duck">Duck</option>
                       // <option value="dog">Dog</option>
                        //<option value="horse">Horse</option>