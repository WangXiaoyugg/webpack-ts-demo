// 第一天学习基础类型

// 1. 布尔
let isVIP: boolean = false
console.log(isVIP);

// 2. 数字
let n1: number = 10;
console.log(n1);

// 3. 字符串
let myMame: string = "garen"
console.log(myMame);

// 4. 数组
let list: number[] = [1,2,3]
let list1: Array<string> = ['1', '2', '3']

// 5. 元组
let x: [string, number] = ['1',2]

// 6. 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

// 7. any

// 8. Void

// 9. null, undefined

// 10. never

// 11. Object
function create(o: object | null) : void {

}

