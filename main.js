// Ejercicio POO 1:

// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), que muestra por pantalla las propiedades de la persona.
class Person{
  constructor(name, age, genre) {
    this.name = name;
    this.age = age;
    this.genre = genre;

  }
  obtDetails() {
    console.log(`La persona se llama ${this.name}, tiene ${this.age} años y su género es ${this.genre}.`);
  }
}
// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), que muestre por pantalla el resultado.
class Student extends Person {
  constructor (name, age, genre, curse, group) {
    super(name, age, genre, curse, group) 
    this.curse = curse;
    this.group = group;
    }
    register(){
      console.log(`El estudiante se llama ${this.name}, tiene ${this.age} años, su género es ${this.genre}, su curso es ${this.curse} y su grupo es ${this.group}.`);
      
    }
};

// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), que muestre por pantalla el resultado.
class Teacher extends Person {
  constructor (name, age, genre, asignatura, level) {
    super(name, age, genre, asignatura, level) 
    this.asignatura = asignatura;
    this.level = level;
    }
    assign(){
      console.log(`El/la profesor/a se llama ${this.name}, tiene ${this.age} años, su género es ${this.genre}, su asignatura es ${this.asignatura} y su nivel es ${this.level}.`);
      
    }
};

let joan = new Person("Joan", "23", "fluido")
joan.obtDetails()

let xavi = new Student("Xavi", "25", "fluido", "Full Stack", 1)
xavi.register()

let sofi = new Teacher("Sofi", "25", "indeterminado", "Full Stack", "Alto")
sofi.assign()
