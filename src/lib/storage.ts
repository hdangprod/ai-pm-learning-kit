import {type DecisionState} from './decision';
import type {Assistance,PracticeDraft} from './practice';
import type {Result} from './assessment';
export const STORAGE_KEY='ai-pm-lab:v1';
export type Attempt={id?:string;assessmentVersion?:2;responseIds?:(string|null)[];presentation?:string[][];assistance?:Assistance;at:string;stage:'primary'|'transfer';input:string;choice:number;extraChoices?:number[];interpretation?:string;result:Result};
export type Work={practiceDrafts?:Partial<Record<'primary'|'transfer',PracticeDraft>>;decisionRoom?:DecisionState;interpretation?:string;hypothesis:string;journal:string;attempts:Attempt[];revealed:boolean;primaryPassed:boolean;complete:boolean};
export type Progress=Record<number,Work>;
export const freshWork=():Work=>({hypothesis:'',journal:'',attempts:[],revealed:false,primaryPassed:false,complete:false});
export {loadProgress,saveProgress,writeProgress,clearProgress,adoptRecovery,buildRawRecoveryExport,StorageController} from './storageControl';
export type {LoadedProgress,StorageIssue,StorageOutcome,LockRunner} from './storageControl';
// Return a new map; preserve every other activity's snapshots and schema verbatim.
export function resetActivity(progress:Progress,id:number):Progress {
 if(!Number.isInteger(id)||id<1||id>6)throw Error('Unknown activity.');
 const next={...progress};delete next[id];return next;
}
