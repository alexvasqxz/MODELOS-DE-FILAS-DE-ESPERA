interface IModel{
    lq:number
    wq:number
    l:number
    w:number
    ro:number
    p0:number
    calculateVars():number
    getPn(n:number):number
}

export default IModel