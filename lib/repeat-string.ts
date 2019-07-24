export default repeat;

let res: string = '';
let cache: string = '';

function repeat(str: string, num: number): string {
    if(num === 1) return str;
    if(num === 2) return str + str;
    let max: number = str.length * num;
    
    if(cache !== str) {
        cache = str;
        res = '';
    } else if(res.length >= max) {
        return res.slice(0, max);
    }

    while(max >= res.length) {
        if(num & 1) {
            res += str
        }

        num >>= 1
        if(num) {
            str += str
        } else {
            break;
        }
    }
    res = res.slice(0, max);
    return res;
}