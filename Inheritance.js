// common class;
class TeamMember{
    name;
    role = 'starting new class';
    country = "BD";
    constructor (name,country){
        this.name = name;
        this.country = country;
    }
}
class ClassAdreess extends TeamMember {
    examDate;
    constructor(name,country,examDate){
        super(name,country)
        this.examDate = examDate;
    }
    conceptSeation(){
        console.log(this.name,"starting a class")
    }
};
class StudentCare extends TeamMember{
    buildARoutine(student){
        console.log(this.name, "Build a routine for",student);
    }
}
class naptune extends TeamMember{
    lenguage;
    constructor(name,country,lenguage){
        super(name,country)
        this.lenguage = lenguage;
    }
    naptuneDevlopment(version){
        console.log(this.name,"release version",version)
    }
}
const aamir = new ClassAdreess("amir khan",'india');
const rahat = new ClassAdreess("rahat ahmed","sudia arob")
const shakukh = new ClassAdreess("sharukh","kolkata","12-2-2022");
// console.log(shakukh)
const alia = new StudentCare("aliya butt","mumbai");
const devMahbub = new naptune("mahbub","india","javascript");
const version = devMahbub.naptuneDevlopment("1.3.4");
console.log(devMahbub);
// console.log(alia);