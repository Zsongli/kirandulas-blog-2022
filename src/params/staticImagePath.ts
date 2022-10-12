export function match(param: string): boolean {
    return /^([\w\-. ]+\/)*[\w\-. ]+\.(jpg|png)$/.test(param); // any number of directory levels, ends with something.jpg or png
}