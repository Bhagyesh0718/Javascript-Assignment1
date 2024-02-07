// Constants for main button query selectors
const noun1Btn = document.getElementById('noun1');
const verbBtn = document.getElementById('verb');
const adjBtn = document.getElementById('adjective');
const noun2Btn = document.getElementById('noun2');
const settingBtn = document.getElementById('setting');

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackBtn = document.getElementById('playback');
const randomBtn = document.getElementById('random');
const storyOutput = document.getElementById('story');
const resetBtn = document.getElementById('reset');


// Variables for pre-defined arrays
const nouns = ['Bhagyesh', 'Vraj', 'Vasu', 'Aliyan', 'Devansh'];
const verbs = ['walked', 'laughed', 'read', 'ran', 'played'];
const adjectives = ['happily', 'bravely', 'sadly', 'friendly', 'smartly'];
const places = ['Barrie', 'Missisauga', 'Toronto', 'Brampton', 'Orilla'];

// Variables for count to grab array elements
let nounCount = 0;
let verbCount = 0;
let adjCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function noun1_on_click() {
    choosenNoun1.textContent = getRandomWord(nouns);
    if (nounCount === nouns.length - 1) {
        nounCount = 0;
    } else {
        nounCount++;
    }
}

function verb_on_click() {
    choosenVerb.textContent = getRandomWord(verbs);
    if (verbCount === verbs.length - 1) {
        verbCount = 0;
    } else {
        verbCount++;
    }
}

function adjective_on_click() {
    choosenAdjective.textContent = getRandomWord(adjectives);
    if (adjCount === adjectives.length - 1) {
        adjCount = 0;
    } else {
        adjCount++;
    }
}

function noun2_on_click() {
    choosenNoun2.textContent = getRandomWord(nouns);
    if (noun2Count === nouns.length - 1) {
        noun2Count = 0;
    } else {
        noun2Count++;
    }
}

function setting_on_click() {
    choosenSetting.textContent = getRandomWord(places);
    if (settingCount === places.length - 1) {
        settingCount = 0;
    } else {
        settingCount++;
    }
}

function playback_on_click() {
    const userStory = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent}  with ${choosenNoun2.textContent} in ${choosenSetting.textContent}.`;
    storyOutput.textContent = userStory;
}

function random_on_click() {
    choosenNoun1.textContent = getRandomWord(nouns);
    choosenVerb.textContent = getRandomWord(verbs);
    choosenAdjective.textContent = getRandomWord(adjectives);
    choosenNoun2.textContent = getRandomWord(nouns);
    choosenSetting.textContent = getRandomWord(places);
}

function reset() {
    choosenNoun1.textContent = '';
    choosenVerb.textContent = '';
    choosenAdjective.textContent = '';
    choosenNoun2.textContent = '';
    choosenSetting.textContent = '';
    storyOutput.textContent = '';
}

/* Event Listeners
-------------------------------------------------- */
noun1Btn.addEventListener('click', noun1_on_click);
verbBtn.addEventListener('click', verb_on_click);
adjBtn.addEventListener('click', adjective_on_click);
noun2Btn.addEventListener('click', noun2_on_click);
settingBtn.addEventListener('click', setting_on_click);
playbackBtn.addEventListener('click', playback_on_click);
randomBtn.addEventListener('click', random_on_click);
resetBtn.addEventListener('click', reset);

