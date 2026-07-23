export interface Variant{name:string;prompt:string;trials:number;successes:number;avgDurationMs:number;}
export interface ABConfig{significanceLevel?:number;minTrials?:number;}
export interface ABResult{winner:string|null;significant:boolean;variants:VariantResult[];pValue:number;}
export interface VariantResult{name:string;successRate:number;margin:number;isWinner:boolean;}