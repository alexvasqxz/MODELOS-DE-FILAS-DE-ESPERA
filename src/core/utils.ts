export function factorial(num:number):number {
    if(num < 0) {
        return -1
    } else if(num === 0)
        return 1
    else {
        return (num * factorial(num - 1))
    }
}

export function sum(s:number, lambda:number, miu:number):number {
    let result:number = 0
    for (let n = 0; n <= (s - 1); n++) {
        result += (((lambda / miu) ** n) / factorial(n))
    }
    return result
}