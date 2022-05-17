import IModel from "../interfaces/IModel";
import Model from "./Model";
import { factorial, sum } from "../utils"

class MMsK extends Model implements IModel{
    lq:number;
    wq:number;
    l:number;
    w:number;
    ro:number;
    p0:number;
    s:number;
    k:number;

    constructor(lambda:number, miu:number, s:number, k:number){
        super(lambda, miu)
        this.lq = 0;
        this.wq = 0;
        this.l = 0;
        this.w = 0;
        this.ro = 0;
        this.p0 = 0;
        this.s = s;
        this.k = k;
    }

    calculateVars():any {
        this.ro = this.lambda / (this.s * this.miu);
        var sSum = 0;
        for(var i = 0; i <= this.s; i++){
            sSum += ((this.lambda / this.miu) ** i) / factorial(i);
        }
        var kSum = 0;
        for(var n = this.s + 1; n <= this.k; n++){
            kSum += (this.lambda / (this.s * this.miu)) ** (n - this.s);
        }
        this.p0 = 1 / (sSum + (((this.lambda/this.miu) ** this.s) / factorial(this.s)) * kSum);
        console.log(this.p0)
        var lqFirst = this.p0 * (this.lambda / this.miu) ** this.s * this.ro / (factorial(this.s) * (1 - this.ro) ** 2);
        var lqSecond = 1 - this.ro ** (this.k - this.s) - (1 - this.ro) * (this.k - this.s) * this.ro ** (this.k - this.s);
        this.lq = lqFirst * lqSecond;
        var lambdae = this.lambda * (1 - this.getPn(this.k));
        this.wq = this.lq/lambdae;
        this.w = this.wq + 1 / this.miu;
        this.l = lambdae * this.w;
        return {
            ro: this.ro,
            l: this.l,
            lq: this.lq,
            wq: this.wq,
            w: this.w,
            p0: this.p0,
          };
    }

    getPn(n:number):number {
        if(n >= 0 && n <= this.s) {
            return (((this.lambda / this.miu) ** n) / factorial(n)) * this.p0;
        } else if(n > this.s && n <= this.k) {
            return (
                    (
                        (this.lambda / this.miu) ** n
                    ) 
                    / ((factorial(this.s)) * (this.s ** (n - this.s)))
                   ) * this.p0;
        }
        return 0;
    }

    getTotalCost(cw:number, cs:number, lq:number, s:number): number {
        return ((lq * cw) + (s * cs))
    }

}

export default MMsK