export default leftPad

const cache: string [] = [
  '',
  ' ',
  '  ',
  '   ',
  '    ',
  '     ',
  '      ',
  '       ',
  '        ',
  '         '
];


function leftPad(str: string, len: number, ch: string = ' '): string {
    len = len - str.length
    if(len <= 0) return str
    if(ch === ' ' && len < 10) return cache[len] + str
    let pad = ''
    while(true) {
        if(len & 1) pad += ch
        
        len >>= 1;

        if(len) ch += ch
        else break
    }
    return pad + str;
}