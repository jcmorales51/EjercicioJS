/* Escriba un programa en JavaScript para mostrar el nombre del libro y el nombre 
del autor de los libros que tengan el estado de lectura “true”.

const library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true,
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true,
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false,
}
] */

const library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
    }
    ];

    for (let i = 0; i < library.length; i++) {
        if (library[i].readingStatus==true) {
            console.log(`El libro ${library[i].title} de ${library[i].author} se encuentra en estado de lectura true`);
        }
    }

