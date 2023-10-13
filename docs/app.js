let header = document.querySelector('header');
let Y = 0;
const linkHead = document.getElementById('linkHead');
let click = false;

//when the user scrolls
window.onscroll = () => {
    if(!click){
        if(window.scrollY > Y + 20 && window.scrollY > 20){
            header.classList.add('-translate-y-full');
        }
        else if(window.scrollY < Y){
            header.classList.remove('-translate-y-full');
        }
    }
    else{
        click = false;
    }
    Y = window.scrollY;
};


linkHead.addEventListener('click', () => {
    click = true;
    header.classList.remove('-translate-y-full');
});

const skillSelector = document.getElementById('skillSelector');
const skills = [
    {
        name: 'HTML',
        description:"Posseggo competenze avanzate nell'uso di HTML e CSS, i mattoni fondamentali della progettazione web. Ho creato pagine web accattivanti e responsive utilizzando queste tecnologie, e ho ulteriormente arricchito il mio lavoro integrando il framework Tailwind CSS. La mia abilità nell'utilizzo di HTML e CSS è ben evidente in questo sito stesso, dove ho impiegato il framework Tailwind CSS per strutturare e stilizzare gli elementi. Questo approccio ha permesso una progettazione efficiente, migliorando la flessibilità e l'estetica del sito."
    },
    {
        name:'JavaScript',
        description:"Posseggo competenze nell'utilizzo di JavaScript, un linguaggio di scripting ampiamente utilizzato per creare interazioni dinamiche sul web. Ho applicato le mie conoscenze di JavaScript in progetti concreti, incluso l'uso di questo linguaggio su questo stesso sito. Attraverso l'implementazione di funzionalità interattive e il controllo del comportamento degli elementi nella pagina, ho dimostrato la mia capacità di sfruttare JavaScript per migliorare l'esperienza dell'utente e aggiungere valore a siti web e applicazioni."
    },
    {
        name:'Linux',
        description:"Sono competente nell'uso del sistema operativo Linux. Ho acquisito familiarità con le sue varie distribuzioni e ho padroneggiato le operazioni di base come la gestione dei file, la navigazione della directory e l'utilizzo del terminale. La mia conoscenza di Linux mi consente di lavorare in un ambiente open-source, eseguire scripting avanzati e utilizzare strumenti di sviluppo specifici per questa piattaforma."
    },
    {
        name:'Flutter',
        description:"Ho sviluppato competenze nell'uso di Flutter attraverso studio personale e dedizione. Ho esplorato questo framework per lo sviluppo di app tramite risorse online, tutorial e progetti personali."
    },
    {
        name:'Java',
        description:"Ho sviluppato solide competenze nell'uso del linguaggio di programmazione Java. Attraverso studi approfonditi e progetti pratici, ho acquisito una comprensione completa della sintassi e delle strutture del linguaggio. Ho utilizzato Java per creare applicazioni robuste, sfruttando le sue funzionalità di orientamento agli oggetti e gestione delle risorse. "
    },
    {
        name:'C++',
        description:"Posseggo una solida competenza nell'uso del linguaggio di programmazione C++. Ho acquisito familiarità con le sue strutture fondamentali e gestione della memoria."
    }
]

document.getElementById('skillDescription').textContent = skills[0].description;

/*add option for each skill*/
skills.forEach((skill) => {
    let option = document.createElement('option');
    option.value = skill.name;
    option.textContent = skill.name;
    skillSelector.appendChild(option);
});

/*add event listener to skill selector*/
skillSelector.addEventListener('change', () => {
    let skill = skills.find((skill) => {
        return skill.name === skillSelector.value;
    });
    document.getElementById('skillDescription').textContent = skill.description;
});





