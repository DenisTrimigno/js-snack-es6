
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