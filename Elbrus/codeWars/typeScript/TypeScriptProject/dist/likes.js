"use strict";
const likes = (a) => {
    return a.length === 0 ? 'no one likes this' :
        a.length === 1 ? `${a[0]} likes this` :
            a.length === 2 ? `${a[0]} and ${a[1]} like this` :
                a.length === 3 ? `${a[0]}, ${a[1]} and ${a[2]} like this` :
                    a.length >= 4 ? `${a[0]}, ${a[1]} and ${a.slice(2).length} others like this` : '';
};
console.log(likes(['Max', 'John', 'Mark']));
