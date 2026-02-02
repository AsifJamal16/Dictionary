let inputbox=document.querySelector('#inputtext');
let searchbutton=document.querySelector('.search');
let result=document.querySelector('.result');
function loadWrods(){
    let word=inputbox.value;
    if(word.trim()===''){
        result.innerHTML='<p>please enter a word</p>';
        return ;
    }
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((rowdata)=>{
        return rowdata.json();
    })
    .then((data)=>{
        let meaning=data[0].meanings[0].definitions[0].definition;
            let part=data[0].meanings[0].partOfSpeech;

            result.innerHTML = `
                <p><b>word:</b> ${word}</p>
                <p><b>part of speech:</b> ${part}</p>
                <p><b>meaning:</b> ${meaning}</p>
            `;
    })
    .catch((err)=>{
        result.innerHTML = '<p>word not found ❌</p>';
    })
}
searchbutton.addEventListener('click',loadWrods);

