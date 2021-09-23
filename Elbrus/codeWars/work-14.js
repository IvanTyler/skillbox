class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min = args[0]
        args.forEach((el, index) => {
            if (min > el) {
                min = el
            }
        })
        return min
    }
}

let integer = new SmallestIntegerFinder;
let number = integer.findSmallestInt([78, 56, 232, 12, 8])
console.log(number)