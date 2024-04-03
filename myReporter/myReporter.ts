import {FullConfig, FullResult, Reporter, Suite, TestCase, TestError, TestResult, TestStep} from '@playwright/test/reporter'

import * as fs from 'fs'; 

export default class MyReporter implements Reporter{
//Interface 

onBegin(config: FullConfig, suite: Suite): void{
console.log(`Starting the Run with  : ${suite.allTests().length}`);
console.log(`Suite Title : ${suite.suites[0].suites[0].suites[0].title}`);

//First Method
};

onTestBegin(test: TestCase, result: TestResult): void{
    console.log(`Starting Test ${test.title} started`);
//Second Method    
};


onStepBegin(test: TestCase, result: TestResult, step: TestStep): void{
    if(step.category==="test.step"){
    console.log(`Step Begin of ${step.title}`);
    }
  //Third Method  
};


onStepEnd(test: TestCase, result: TestResult, step: TestStep): void{
    if(step.category==="test.step"){
    console.log(`Step End of ${step.title}`);
    }//Fourth Method
};

onTestEnd(test: TestCase, result: TestResult): void{

    console.log(`Finished test ${test.title}: ${result.status}`)
   
    const execTime=result.duration;

    const data ={
        test:test.title,
        status:result.status,
        executionTime:execTime,
        errors:result.errors,
    };

    const datatoString=JSON.stringify(data,null,2);

    fs.writeFileSync("test-result.json",datatoString);

};


onEnd(result: FullResult): Promise<{ status?: FullResult['status'] } | undefined | void> | void{
    console.log(`Finished the run : ${result.status}`);
};
onError(error: TestError): void{
    console.log(error);
};

onStdErr(chunk: string|Buffer, test: void|TestCase, result: void|TestResult): void{
    console.log(chunk);
};
onStdOut(chunk: string|Buffer, test: void|TestCase, result: void|TestResult): void{
    console.log(chunk);
};
printsToStdio(): boolean{
    return true;
};


}