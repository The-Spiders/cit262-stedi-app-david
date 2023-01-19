import fetch from 'node-fetch';

it ("Should get a login token", async () => {
    
    const loginResponse = await fetch('https://dev.stedi.me/login', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/text' 
        },
        body:JSON.stringify({ 
            'userName': 'test130@hotmail.edu',
            'password': 'BADP@ssw0rd'
        })
    })

    expect(loginResponse.status).toBe(401); //401 is failed to access database

})