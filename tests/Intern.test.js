//using Intern constructor 
const Intern = require('../lib/Intern');

//creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Adam', 90, 'a.6942@yahoo', 'NYU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

//gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Adam', 90, 'a.6942@yahoo', 'NYU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Adam', 90, 'a.6942@yahoo.com', 'NYU');

    expect(intern.getRole()).toEqual("Intern");
}); 