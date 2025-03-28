# Problema: Encuentra los Invitados que Pueden Sentarse Juntos
Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.

## Instrucciones para resolver el problema:
Usa un puntero al inicio del arreglo y otro al siguiente elemento.
Compara las iniciales de los nombres en las posiciones de ambos punteros.
Si coinciden, detén la búsqueda y devuelve los nombres.
Si no coinciden, avanza ambos punteros y repite.
Detén la búsqueda si recorres toda la lista sin encontrar un par.
Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en la siguiente url: https://gist.github.com/heladio-devf-mx/e091e8dba47d51693cec1154f1cd2ed6