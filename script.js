
// ARRAY VIP
const guests = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 
'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];


const invitation_array = guests.map((guest, i) => {
    return {'_nome_del_tavolo_': 'Tavolo Vip', '_nome_dell_ospite_': guest, '_posto_ooccupato_': i }
});

// SNACK 2


const students = [
  {
    'id': '213',
    'name': 'Marco della Rovere',
    'grades': '96'
  },
  {
    'id': '110',
    'name': 'Paola Cortellessa ',
    'grades': '48'
  },
  {
    'id': '250',
    'name': 'Andrea Mantegna ',
    'grades': '74'
  },
  {
    'id': '145',
    'name': 'Gaia Borromini',
    'grades': '68'
  },
  {
    'id': '196',
    'name': 'Luigi Grimaldello ',
    'grades': '50'
  },
  {
    'id': '102',
    'name': 'Piero della Francesca',
    'grades': '84'
  },
  {
    'id': '120',
    'name': 'Francesca da Polenta',
    'grades': '78'
  },
]

console.log(students);

// TRASFORMAZIONE NOMI ARRAY IN MAIUSCOLO
const plates = students.map((student) => student.name.toUpperCase());

console.log(plates);


// ARRAY STUDENTI CON VOTO SOPRA IL 70

const up_students = students.filter((student) => student.grades > 70) ;

console.log(up_students)

// ARRAY STUDENTI CON VOTO SOPRA a 70 E ID SUPERIORE A 120

const upper_students = students.filter((student) => student.grades > 70 && student.id > 120);

console.log(upper_students);

// ARRAY BICI (snack 3)

const arrayBici = [
  {
    nome: 'Rossa',
    peso : 24
  },
  {
    nome: 'Bianca',
    peso: 50
  },
  {
    nome: 'Blu',
    peso: 30
  },
  {
    nome: 'Bianchi',
    peso : 36
  },
  {
    nome: 'Nera',
    peso: 18
  },
  {
    nome: 'Granata',
    peso: 8
  },

];


// definizioni bici lEGGERA 
let biciLight = arrayBici[0];

for(let i=0; i < arrayBici.length; i++) {
  if(arrayBici[i].peso < biciLight.peso){
    biciLight = arrayBici[i];
  }
}

console.log(biciLight);


// STAMPA IN CONSOLE LA BICI PIù LEGGERA (DESTRUCTORING E TEMPLATE LITERAL)

let {nome, peso} = biciLight;

console.log(`La bici meno pesante è ${nome} e pesa ${peso}`)



//  (Snack 4) 

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) - min);
}

const squadre = [
  { 
   nome: 'Juventus',
   punti: 0,
   falli: 0,
  
  },
  { 
    nome: 'milan',
    punti: 0,
    falli: 0,
   
   },
   { 
    nome: 'napoli',
    punti: 0,
    falli: 0,
   
   },
   { 
    nome: 'roma',
    punti: 0,
    falli: 0,
   
   },
   { 
    nome: 'genoa',
    punti: 0,
    falli: 0,
   
   },
  ];

squadre.forEach((element) =>{
  element.punti = generateRandomNumber(1,90);
  element.falli = generateRandomNumber(2,20);
})

console.log(squadre);

// CONSOLE NOMI E FALLI SUBITI

const newTeams = squadre.map((element) => {
  const {nome, falli} = element;

  let obj = {
      nome,
      falli,
  }

  return obj;

});

console.log(newTeams);