import sayHelloWorld from "../utils/HelloWorld";

it ("Should return 'Hello World!'", ()=>{
    
    const testResult = sayHelloWorld();

    expect(testResult).toBe("Hello World!");
});