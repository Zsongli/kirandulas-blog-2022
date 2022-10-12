export function match(param: string): boolean {
    return /^([\w\-. ]+\/)*[\w\-. ]+\.(jpg|JPG|png|PNG|jpeg|JPEG)$/.test(param); // any number of directory levels, ends with something.jpg or png
}