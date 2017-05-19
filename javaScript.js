Dokumentacja 
https://developer.mozilla.org

//--------------------Liczby
tylko jeden typ liczb (float64, 8 bajtów zmiennoprzecinkowy)
0.1+0.2 == 0.3; // false
1 == 1.0

1/0 = Infinity	//nieskonczonosc
-1/0 = -Infinity
NaN = oznacza: nie liczba

//--------------------Dowolna operacja z NaN daje NaN
NaN != NaN
isNaN(...)

//--------------------Niektóre funkcje:
Number(10); // 10
Number(“42.23”); // 42.23
Number(“71oshi”); // NaN
parseInt(“18”); // 18
parseInt(“19kdjas”); // 19 konwertuje na liczbe INT dopóki nie spotka znaku który nie jest cyfra
parseInt(“74.54”); // 74
parseFloat(“74.54”); // 74.54 konwertuje na liczbe float

//--------------------Przeksztalcenia na inne systemy zapisu np. szestnastkowy:
parseInt(num, base)
parseInt("ff"); //NaN
parseInt("ff","16"); //255 w systemie szestnastkowym
parseInt(“0x10”); // 16
parseInt(“0x10”,”10”); // 0 gdyz x powoduje przerwanie parsowania

//--------------------Stringi
var string1 = "DR";
var string2 = ‘terrible’;
string2.length; // 8
“dance”.length; // 5
’42’.length; // 2
var uni = "\u1552"; // "?"
"\u1552".length; // 1

//--------------------Ekranowanie
‘it’s my life’;	//tutaj mamy problem z apostrofem
‘it\’s my life’; // znak \ jest pomocny w rozwiazaniu tego problemu
‘\u1552’; //tutaj potrzebny dla rozróżnienia że jest to znak unicodu

//--------------------Symbole: W js nie ma symboli. Symbol to string z jednym znakiem.
"abcdef".charAt(2); // “c”
"abcdef".charAt(200); // “”
"abcdef".charAt(-1); // “”

//--------------------Konkatenacja stringow
"abcdef".charAt(0) + "abcdef".charAt(2) + "abcdef".charAt(4); // “ace”
"together” + “ again”; // “together again”
12 + “ or ” + “20”; // “12 or 20”

//--------------------Liczby i stringi
12 + “ or ” + “20”; // “12 or 20”
“12” / 2 + 1; // 7
“day” * 2; // NaN
var a = 42; // 42
a.toString(); // “42”
a.toString().length; // 2
a.toString().length.toString(); // “2” //można zamienić długość stringu na string

“Blink ” + 182; // “Blink 182”
“Blink ” + 181 + 1; // “Blink 1811”
“Blink ” + (181 + 1); // “Blink 182”

//--------------------Porównanie stringów
“a” < “b”; // true
“c” < “b”; // false
“abcd” < “abcd”; // false
“abcd” < “abdc”; // true
“toy” === “toy”; // true
“toy” === “t” + “o” + “y”; // true

//--------------------Objekt przykład:
var person = {
“name” : “Alex”,
“age” : 25
};
//--------------------Odwołanie się do objektu:
person.name; // “Alex”
person.age; // 25

//--------------------Prototypy
var Human = {
type : “Human”,
head : 1,
legs : 2,
bad-thing : 22, // błąd, bo jest znak -
“good-thing” : 23, // ok gdyż w cudzysłowach
“:;;:” : 24 // ok
};
var Megahuman = Object.create(Human); //tworzenie Megahuman na podstawie prototypu

//--------------------Usunięcie właściwości
var Human = {
type : “Human”,
head : 1,
legs : 2
};
var Megahuman = Object.create(Human);
Megahuman.head = 2;
Megahuman.head; // 2 Megahuman ma teraz 2 głowy
delete Megahuman.head; //usunięcie tej właściwości
Megahuman.head; // 1 Ma jedna głowę bo dziedziczy właściwość od Human

//--------------------Tworzenie Funkcji
var average = function (x, y) {
return (x+y)/2;
};

//--------------------Słowo this
var obj = {
	base : 13,
	average : function (x, y) {
		return (this.base+x+y)/3; // this wskazuje na objekt w momencie uruchomienia
		};
	};
	
//---------Argumenty funkcji, może ich być więcej niż zdefiniowano parametrów dla funkcji (są obcinane)
function myFuncName (x, y, z) {...}; // trzy parametry
myFuncName (1,2,3,4,5,6,7,8); // osiem argumentow z których wykorzysta pierwsze trzy (1,2,3)

//----------Zawsze zmienne deklaruj na początku funkcji!
var a = 10;
(function() {
console.log(a);
var a = 11; // tutaj zmienna została zadeklarowana na końcu
})();
//To spowoduje
var a = 10;
(function() {
var a;			//zmienna zadeklarowana, ale nie zainicjowana
console.log(a);	//wyświetlenie undefined
a = 11;
})();

//--------Zamykanie
var getAnswer = (function() {
var answer = 42;
return function inner(){  //tworzenie funkcji w funkcji która ma jeszcze dostęp do danych, chociaż funkcja została już "zakończona"
return answer;
};
}())
getAnswer(); // 42

/*//------------------REGULARNE WYRAŻENIA
\ 	odwraca specjalny symbol w zwykły i odwrotnie
. 	dowolny znak oprócz przejścia do noweo wiersza
* 	powtórzenie wcześniejszego znaku 0 i więcej razy
+ 	powtórzenie wcześniejszego znaku 1 i więcej razy
? 	powtórzenie wcześniejszego znaku 0 lub 1 raz
\d 	dowolna cyfra
\w	dowolny znak (litery, cyfry i _)	
[XYZ]	dowolny znak z podanych
[XYZ]+	jeden lub więcej znaków z podanych
$		koniec danych
^		początek danych
[^a-z]	NIE mała litera (znak ^ w środku oznacza NIE)
()		nawiasy CAPTURE to co ma byc na wyjściu	
|		lub
{m,n}	od m do n powtórzeń wcześniejszego znaku
WWW.regexone.com

Konstruktor regularnych wyrażeń w JavaScript:
new RegExp("\\w+c" , "igm");	//1-parametr to szablon odwrotne sleshe \ ekranujemy
								//2-parametr to flagi:
									//g-globalne wyszukiwanie
									//i-nie odróżniać wierszowe i poza wierszowe przeszukiwanie
									//m-wielowierszowe przeszukiwanie
ekwiwalent: var re = /\w+c/igm;
---------------------*/

//------Metody dla regularnych wyrażeń

// ---------Metoda: test 
//	Objekt: RegExp 		Zwraca: true lub false 
//	Opis: Czy jest zgodne z wyrażeniem 
var email =/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;		//regularne wyrażenie sprawdzające email.
email.test("hfhfhffj")			//rezultat będzie false, hfhfhffj nie jest emailem
email.test("dan@kola.co.uk")	//true

// 	--------Metoda: exec 
//	Objekt: RegExp 		Zwraca: tablicę 
//	Opis: Szuka zgodności w tablicy
var reg =/\d/g;	//regularne wyrażenie: cyfra i globalne wyrażenie
var input="kk5g3hh6hj@!#jdjd123kddk";
reg.exec(input);	// rezultatem będzie tablica, 
					//najpierw cyfra 5 -pierwsza zgodność
					//później index: 2 -gdzie się znajduje
					//na końcu string input: 'kk5g3hh6hj@!#jdjd123kddk'

//	--------Metoda: search 
//	objekt: String		Zwraca: index zgodności / -1 
//	Opis: Szuka zgodności w stringu
"ds6374828edejfew8383".search(/\d{2,8}/)	//szuka w stringu cyfr 2 lub więcej do ośmiu zwraca index, tutaj: 2
"ds6374828edejfew8383".match(/\d{2,8}/)		//szuka w stringu cyfr 2 lub więcej do ośmiu zwraca tablicę, tutaj: '6374828', index:2, input:'ds6374828edejfew8383'

// 	---------Metoda: replace 
//	Objekt: String 		Zwraca: String 
//	Opis: Szuka zgodności w stringu i zamienia
var str="Blink jet najlepsze, bo Blink ..., ja lubie blink, blink";
str.replace("blink","Banan"); 	// zamieni tylko ostatni trzeci blink
str.replace(/blink/ig, "Banan")	//	zamieni wszystkie i-wyłącza rejetr dużych i małych liter g-globalnie
"Daniel Radan".replace(/(\w+)\s(\w+)/,"$2, $1 bleble ble");	// zamieni miejscami Daniel Radan z przecinkiem i doda bleble ble.				
function x(m){return "+" + m.toUpperCase();}	//tworzymy funkcję która dodaje plusiki i zamienia małe litery na duże, h.toUpperCase() daje w rezultacie "H"
"HGGSddfkffGGGhUUUkskkdf".replace(/[a-z]/g, x);	//w drugim parametrze funkcji replace użyto funkcję x która zamieni małe litery na duże z plusikami

/*ZASADY PRZY PISANIU JAVASCRIPTU
1.	Nie wstawiaj klamrowych nawiasów funkcji {} w nowym wierszu
2.	Zawsze używaj === i !==
3.	Zawsze używaj var
4.	Nie używaj eval
*/


//------------------------------------------------------------------------------------
// 	JavaScript w praktyce dla Browsers
//	Udemy - A Functional Guide Understanding Functions In JavaScript
//------------------------------------------------------------------------------------

function addImage (times, myImg){
    
    var src = document.getElementById("Gallery"); 	// odniesienie do elementu <div id="Gallery">
    
    for ( i=0; i<times; i++){						// pętla times razy
        var img = document.createElement("img");	// Stworzenie elementu "img"
        img.src = myImg;							// przypisanie źródła obrazka
        src.appendChild(img);						// utworzenie węzła w DOM
    }
}
addImage(4,"tata.jpg");								//wywołanie kilka razy funkcji z różnymi argumentami
addImage(3,"tata2.jpg");
addImage(1,"tendal.jpg");
addImage(5,"tendal2.jpg");

//-----------------------------------------------------------------------------------

function addText (tekst){
    
	var znakP = document.createElement("p");			//tworzenie elementów <p>
	var pText = document.createTextNode(tekst);			//tworzenie tekstu
	znakP.appendChild(pText);							//dodanie węzłów do tekstu
    document.getElementById("Text").appendChild(znakP);	//dodanie stworzonych elementów do dokumentu strony
}
addText("jajaj");

function addH1 (tekst){
    
	var znakH1 = document.createElement("h1");			//tworzenie elementów <h1>
	var hText = document.createTextNode(tekst);			//tworzenie tekstu
	znakH1.appendChild(hText);							//dodanie węzłów do tekstu
    document.getElementById("Text").appendChild(znakH1);	//dodanie stworzonych elementów do dokumentu strony
}
addH1("jajaj");

//-----------------------------------------------------------------------------------
//  Kalkulator

var calc ={												//tworzenie obiektu calc
    sum: function (a,b){								//funkcja dodawania
    return total=a+b;
    },
    sub: function (a,b){								//odejmowanie
    return total=a-b;
    },   
    mul: function (a,b){								//mnożenie
    return total=a*b;
    },
    div: function (a,b){								//dzielenie
    return total=a/b;
    }
}
var a = parseInt (prompt("Wprowadź wartość a :"));		//wprowadzanie a
var b = parseInt (prompt("Wprowadź wartość b :"));		//wprowadzanie b
console.log("Add " + calc.sum(a,b));					//wyświetlenie w konsoli wyników
console.log("Sub " + calc.sub(a,b));
console.log("Mul " + calc.mul(a,b));
console.log("Div " + calc.div(a,b));

//------------------------------------------------------------------------------------
// Konstruktor

var Dog = function (){
	var name, breed;
}
firstDog = new Dog;
firstDog.name = "Tommy";
firstDog.breed = "Dobername";
console.log(firstDog.name);			// daje Tommy
console.dir(firstDog);				// daje Dog

//--------------------------------------------------------------------------------------
// Prototype. Expanding functionality through Prototype
var Speak = function(){
    var saySomthing;
}
var Dog = function (){
	var name, breed;
}
Dog.prototype.Speak = Speak;		// niejako przechodzi na funkcję Dog (expanding)
firstDog = new Dog;
firstDog.name = "Tommy";
firstDog.breed = "Dobername";
firstDog.Speak = "Woff";

console.log(firstDog.name);
console.log(firstDog.Speak);
console.dir(firstDog);

//---------------------------------------------------------------------------------------
// Arguments.length oraz Arguments[i]
var plus = function(){
    var sum = 0;
    for (var i=arguments.length-1; i>=0; i--){	// zlicza ilość argumentów
        sum += arguments[i];					//sumuje wartości argumentów
    }
    return sum;			//teraz możesz sumować dowolną ilość argumentów np. plus(3,4,2,5,7,9,11)
}

//---------------------------------------------------------------------------------------