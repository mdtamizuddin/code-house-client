import React from 'react'

const NodeJWT = () => {
    return (
        <div>
            <h1 className="text-center text-3xl mt-5 mb-4 font-bold">Mongodb With Express js CRUD Operation</h1>

            <div className="mockup-code p-7">
                <h1 className='text-center text-2xl'>Genarate Token </h1>
                <pre data-prefix="$$">
                    <code className='text-green-500'>
                            require('crypto').randomBytes(70).toString('hex')
                    </code>
                </pre>
                <h1 className='text-center text-2xl'>Installetion</h1>
                <pre data-prefix="$$">
                    <code className='text-green-500'>
                            npm install jsonwebtoken
                    </code>
                </pre>
                <pre data-prefix="$$">
                <h1 className='text-center text-2xl'>Create VerifyJWT Function</h1>

                <code className='text-green-500'>
                    {
                        `
        function verifyJWT(req, res, next) {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).send({ message: 'UnAuthorized access' });
            }
            const token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
                if (err) {
                return res.status(403).send({ message: 'Forbidden access' })
                }
                req.decoded = decoded;
                next();
            });
            }
                          `
                    }
                </code>

                    <h1 className='text-center text-2xl'>Get Data And VerifyJWT </h1>
                    <code className='text-green-500'>
                        {
                            `
        const dataCeCollection = client.db("database-name").collection("collection-name")

        app.put('/user/:email', async (req, res) => {
            const email = req.params.email;
            const user = req.body;
            const filter = { email: email };
            const options = { upsert: true };
            const updateDoc = {
              $set: user
            };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN)
        
            res.send({ accessToken: token, result });
          })


            app.get('/user' , async (req , res) =>{
                const result = await userCollection.find().toArray()
                res.send(result)
            })

                        `
                        }
                    </code>

                </pre>
            </div>
        </div>
    )
}

export default NodeJWT