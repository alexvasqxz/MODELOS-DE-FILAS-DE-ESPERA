import IModel from "../interfaces/IModel";
import Model from "./Model";

class MG1 extends Model implements IModel{
    lq: number;
    wq: number;
    l: number;
    w: number;
    ro: number;
    p0: number;
    dev: number;

    constructor(lambda:number, miu:number, dev:number){
        super(lambda, miu);
        this.dev = dev;
        this.l = 0;
        this.lq = 0;
        this.wq = 0;
        this.w = 0;
        this.ro = 0;
        this.p0 = 0;
    }

    calculateVars(): any{
        this.ro = this.lambda / this.miu;
        this.p0 = 1-this.ro;
        this.lq = (((this.lambda*this.lambda) * (this.dev*this.dev)) + (this.ro*this.ro))/(2*this.p0);
        this.l = this.ro + this.lq;
        this.wq = this.lq/this.lambda;
        this.w = this.wq+(1/this.miu);
        return {
            ro: this.ro,
            l: this.l,
            lq: this.lq,
            wq: this.wq,
            w: this.w,
            p0: this.p0
        };
    }

    getPn(n: number): number {
        return (this.ro ** n) * this.p0;
    }

    getTotalCost(cw:number, cs:number): number {
        return ((this.lq * cw) + cs)
    }
}

export default MG1;