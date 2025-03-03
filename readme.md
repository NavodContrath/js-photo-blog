📌CONSEGNA
1. Milestone 
- Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica
   - utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

2. Milestone 
- Utilizzando Postman, testiamo una chiamata a questo endpoint: https://lanciweb.github.io/demo/api/pictures/
- Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

3. Milestone 
- Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API 
  - sfruttando la risposta per generare dinamicamente in pagina una serie di foto.

✏️Font utilizzati:
titoli: ‘Edu Tas Beginner’, sans-serif;
date: ‘Sometype Mono’, ‘monospace’;

🍵Bonus
- rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione   adeguata

📜Workflow
1. Milestone
- penpot research
- structure the page with html and css
 - create an header
   - title(h1)
 - create a main
  - container
  - grid
  - card
- style the page with css
2. Milestone
- test of end-point in postman
- how to integrate the response in my page
3. Milestone
- add fetch to js requesting form the API the elements to add in page
- for each to cicle inside the response(array)
- function to render the cards
  - variable for the markup
  - wep API insert adjacentHTML to add in page the 
  
📌Consegna-2

1. Milestone 1
- Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

2. Milestone 
- Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
- Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
- Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

3. Milestone 3
- Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.

🍵Bonus
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare