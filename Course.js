export class Course {
    constructor(name, yhp) {
        this.name = name;
        this.yhp = yhp;
    }
    getCourseInfo() {
        console.log(`Kursnamn: ${this.name}\nPoäng: ${this.yhp}`);
    }
}