/**
 * Created by louie.lugtu on 1/26/2015.
 */
var Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

//function logPerson()
//{
//    var person  = new Person('Louie', 'Lugtu');
//    console.log(person);
//}

function logPerson(person) {
    console.log(person);
}

//logPerson();
logPerson(new Person('Paul', 'Lugtu'));