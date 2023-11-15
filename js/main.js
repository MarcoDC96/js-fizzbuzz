
//Apriamo un normalissimo ciclo for che parte da 1 e termina a 100
for(let i = 1; i<=100; i++){
//Creiamo un "if" in cui gli chiediamo di sostituire ai multipli comuni di 3 e 5 la parola FizzBuzz
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
//Creiamo un "else if" in cui gli chiediamo di sostituire ai mulipli di 5 la parola Buzz
    else if(i%5==0){
        console.log("Buzz");
    }
//Creiamo un secondo "else if" in cui chiediamo di sostituire ai multipli di 3 la parola Fizz
    else if(i%3==0){
        console.log("Fizz");
    }
//Adesso nell "else" mettiamo semplicemente l'i nel quale ci troveremo solo il resto dei numeri non trasformati in precedenza
    else{
        console.log(i);
    }

}