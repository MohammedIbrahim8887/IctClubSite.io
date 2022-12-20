function sleepNew(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrasesNew = [
    "Who Are We",
    "We are Innovators",
    "We are Creaters",
    "We are The Future",
];

const elNew = document.getElementById("About");
let sleepTimeNew = 100;
let curPhraseIndexNew = 0;

const writeLoopNew = async() => {
    while (true) {
        let curWordNew = phrasesNew[curPhraseIndexNew];

        for (let i = 0; i < curWordNew.length; i++) {
            elNew.innerText = curWordNew.substring(0, i + 1);
            await sleepNew(sleepTimeNew);
        }

        await sleepNew((sleepTimeNew = 200));

        for (let i = curWordNew.length; i > 0; i--) {
            elNew.innerText = curWordNew.substring(0, i - 1);
            await sleepNew(sleepTimeNew);
        }

        await sleepNew((sleepTimeNew = 200));

        if (curPhraseIndexNew === phrasesNew.length - 1) {
            curPhraseIndexNew = 0;
        } else {
            curPhraseIndexNew++;
        }
    }
};
writeLoopNew();