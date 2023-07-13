import dza, {a,c,d} from './module2.mjs'
console.log("Default Export c : "+dza);    // Shortcut --> clg
// here dza is a random variable name given to catch export 
// Here different name can be given as it is a default export
console.log("Named Export c : "+c);
console.log("Named Export d : "+d);
console.log("Named Export a : "+a);
// we cant use a1 for a as a is not default export so we need to use the correct name to call