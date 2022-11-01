// Data die kan veranderen onthouden 
// Zijn kinderen informeren wanneer iets veranderd onthouden
// kinderen kunnen er 0 zijn, of 1 of 100000 of alles ertussen erboven
class Subscriber {
    constructor(number) {
        console.log("Ik wordt aangemaakt met: " + number);
        this.number = number;
        this.observers = [];
        console.log("Mijn this.number is nu " + this.getState());
    }
    updateState(newState) {
        console.log("Mijn nummer is nu:");
        this.number = newState;
        console.log("ik update mijn nummer");
        console.log("Mijn nummer is nu: " + this.getState())
        this.notify();
    }
    getState() {
        return this.number;
    }
    notify() {
        console.log("Ik informeer all mijn kinderen");
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].update();
        }
    }
    attatch(observer) {
        this.observers.push(observer);
    }
}

class Observer {
    constructor(name, subscriber, htmlElement) {
        this.name = name;
        this.subscriber = subscriber;
        this.init();
        this.htmlElement = htmlElement;
    }
    init() {
        console.log("Hallo! Ik ben een observer " + this.name + ("en de state van mijn subscriber is nu: " + this.subscriber.getState()));
    }
    update() {
        console.log("Hallo! Ik ben een observer " + this.name + ("en de state van mijn subscriber is nu: " + this.subscriber.getState()));
        this.htmlElement.innerText = this.subscriber.getState();
    }
}

let subscriber__1 = new Subscriber(2);
let observer__1 = new Observer("Observer 1 ", subscriber__1, document.getElementById("js--id--1"));
subscriber__1.attatch(observer__1);

let observer__2 = new Observer("Observer 2 ", subscriber__1, document.getElementById("js--id--2"));
subscriber__1.attatch(observer__2);

let observer__3 = new Observer("Observer 3 ", subscriber__1, document.getElementById("js--id--3"));
subscriber__1.attatch(observer__3);

document.getElementsByClassName("numbersCard")[0].onclick = function() {
    subscriber__1.updateState(555);
}

document.getElementsByClassName("numbersCard")[1].onclick = function() {
    subscriber__2.updateState(-1337);
}

let subscriber__2 = new Subscriber(-1000);
let observer__4 = new Observer("Observer 4 ", subscriber__2, document.getElementById("js--id--4"));
let observer__5 = new Observer("Observer 5 ", subscriber__2, document.getElementById("js--id--5"));
let observer__6 = new Observer("Observer 6 ", subscriber__2, document.getElementById("js--id--6"));
subscriber__2.attatch(observer__4);
subscriber__2.attatch(observer__5);
subscriber__2.attatch(observer__6);

setInterval(function() {
    subscriber__1.updateState(subscriber__1.getState() + 1);
    subscriber__2.updateState(subscriber__2.getState() - 1);
}, 1000)