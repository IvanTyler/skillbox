var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.3;
var num = 3e10;
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArra2 = [1, 1, 2, 3, 5, 8, 13]; //дженерик тип
var words = ['string', 'Typescript'];
// Tuple
var contact = ['Ivan', 1234567];
// Any
var variable = 42;
// ...
variable = "New String";
// ===
function sayMyName(name) {
    console.log(name);
}
sayMyName('Dima');
// Never
function throwError(message) {
    throw new Error(message);
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
