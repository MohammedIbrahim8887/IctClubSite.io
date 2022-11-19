function sleepText(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases1 = ["Chat", "Create", "Innovate", "Smash"];

const el1 = document.getElementById("Chat");
let sleeper = 100;
let curPhraseIndex1 = 0;

const writeLoop1 = async() => {
    while (true) {
        let curWord = phrases1[curPhraseIndex1];

        for (let i = 0; i < curWord.length; i++) {
            el1.innerText = curWord.substring(0, i + 1);
            await sleep(sleeper);
        }

        await sleep((sleeper = 200));

        for (let i = curWord.length; i > 0; i--) {
            el1.innerText = curWord.substring(0, i - 1);
            await sleep(sleeper);
        }

        await sleep((sleeper = 200));

        if (curPhraseIndex1 === phrases1.length - 1) {
            curPhraseIndex1 = 0;
        } else {
            curPhraseIndex1++;
        }
    }
};
writeLoop1();