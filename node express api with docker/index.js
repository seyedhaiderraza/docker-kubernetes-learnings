const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, resp) => {
    resp.json(
        [{
                name: 'Alice',
                email: 'alice@wonderland.com',
            },
            {
                name: 'Bobby',
                email: 'bobby@gmail.com',
            },
            {
                name: 'Catt',
                email: 'Catt@gmail.com',
            },

            {
                name: 'Voldemort',
                email: 'Voldemort@gmail.com',
            }
        ]
    );
    resp.send()
})

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
})