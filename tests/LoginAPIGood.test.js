import fetch from 'node-fetch';

it ("Should get a login token", async () => {
    //async allows us to read from the database by moving on and then coming back when we connect.

    const loginResponse = await fetch('https://dev.stedi.me/login', {
        //await is the keyword for an async fetch request.

        method: 'POST', //method Post says to give information to the server (this is an oversimplification I think)
        headers: {
            'Content-Type': 'application/text' //content-type: application/json is normal; our API is just goofy
        },
        body:JSON.stringify({ //makes following into JSOn text to be read by the server
            'userName': 'test130@hotmail.edu',
            'password': 'P@ssw0rd'
        })
    })

    expect(loginResponse.status).toBe(200); //200 means authorized.

})