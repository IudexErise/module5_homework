// Task 5.3.2

let a = prompt('Enter something');
switch (typeof a) {
    case 'number':
    console.log('It is number');
    break;
    case 'string':
    console.log('It is string');
    break;
    case 'boolean':
    console.log('It is boolean');
    break;
    default:
    console.log('X was not definied');
}
