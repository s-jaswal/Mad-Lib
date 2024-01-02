let adjective = prompt('Enter an adjective');
let noun = prompt('Enter an noun');
let verb = prompt('Enter an verb');
let adverb = prompt('Enter an adverb');
let story = `It's the first day of the year so I ${verb} ${noun}, a ${adjective} ${noun} ${verb} ${adverb}.`
let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`