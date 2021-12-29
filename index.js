function person(name,lname) {
    this.name=name;
    this.lname=lname;

    return this.name+" "+this.lname;
    
}

const person1=new person("joy","Paul")
console.log(person1);

const person2=new person("Tom","dcoza")
console.log(person2);