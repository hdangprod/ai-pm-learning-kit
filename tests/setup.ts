import '@testing-library/jest-dom/vitest';
import {cleanup} from '@testing-library/react';import {afterEach} from 'vitest';
afterEach(()=>{cleanup();localStorage.clear();});

Object.defineProperty(navigator,'locks',{configurable:true,value:{request:(_name:string,_options:unknown,callback:()=>void)=>{callback();return Promise.resolve();}}});
