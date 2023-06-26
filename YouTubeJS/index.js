import {revenueInspection,fireInspection} from './constants/inspectionTypes.js';
import {Revision} from './classes/revision.js';
import {Registrar} from './classes/registrar.js';
import { deleteCompany } from './functions/deleteCompany.js';
import { Person } from './classes/Person.js';

export let companies=[];
let tempComp;
let rev;
let rev1;
let reg=new Registrar;
let regNumbTemp=0;

tempComp=reg.regCompany("Миколаївський Зоопарк",500);
if(tempComp)
{
companies.push(tempComp)
companies[companies.length-1].managers[0]=new Person;
companies[companies.length-1].addDepartment("Бухгалтерія");
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].setArea();
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].manager=new Person;
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].employees.push(new Person);
companies[companies.length-1].addDepartment("Транспортний відділ");
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].setArea();
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].manager=new Person;
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].employees.push(new Person);
//companies[companies.length-1].removeDepartment();
rev=new Revision(fireInspection);
rev.setReport(companies[companies.length-1]);
rev1=new Revision(revenueInspection);
rev1.setReport(companies[companies.length-1]);
}

tempComp=reg.regCompany("Київський Зоопарк",500);
if(tempComp)
{
companies.push(tempComp)
companies[companies.length-1].managers[0]=new Person;
companies[companies.length-1].addDepartment("Інженерний відділ");
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].setArea();
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].manager=new Person;
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].employees.push(new Person);
companies[companies.length-1].addDepartment("Відділ забезпечення");
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].setArea();
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].manager=new Person;
companies[companies.length-1].departments[companies[companies.length-1].departments.length-1].employees.push(new Person);
//companies[companies.length-1].removeDepartment();
rev=new Revision(fireInspection);
rev.setReport(companies[companies.length-1]);
rev1=new Revision(revenueInspection);
rev1.setReport(companies[companies.length-1]);
}



//companies.push(reg.mergeCompanies(companies[0],companies[1]));
//companies=deleteCompany(companies,...[companies[0].regNumber,companies[1].regNumber]);

//companies[0]=reg.acquiseCompany(companies[0],companies[1]);
//companies=deleteCompany(companies,...[companies[1].regNumber]);

//regNumbTemp=reg.regNumber;
//companies.push(...reg.splitCompany(companies[1]));
//if(regNumbTemp!=reg.regNumber) 
//{
//companies=deleteCompany(companies,...[companies[1].regNumber]);
//}


console.log(companies);










