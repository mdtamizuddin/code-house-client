import React from 'react'

const Mongodb = () => {
    const connectionUrl = `
    const uri = 'mongodb+srv://{DB_USER}:{DB_PASS}@cluster0.y7jek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; //Get this line from You DB
    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    `
    return (
        <div>
            <h1 className="text-center text-3xl mt-5 mb-4 font-bold">Mongodb With Express js CRUD Operation</h1>

            <div className="mockup-code p-7">
                <h1 className='text-center text-2xl'>All Imports</h1>
                <pre data-prefix="$$">
                    <code className='text-green-500'>
                        {
                            `
    const express = require('express');
    const cors = require('cors')
    const bodyParser = require('body-parser')
    const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
    const jwt = require('jsonwebtoken');
    require('dotenv').config()

    const app = express()
    app.use(cors())
    app.use(bodyParser.json()) // Or app.use(express.json())

    const PORT = process.env.PORT || 5000
        `
                        }
                    </code>
                    <h1 className='text-center text-2xl'>Mongodb Connection Uri</h1>
                    <code className='text-green-500'>
                        {
                            connectionUrl
                        }
                    </code>
                    <h1 className='text-center text-2xl'>Connect DB</h1>
                    <code className='text-green-500'>
                        {
                            `
    async function connectDb() {
        await client.connect()
        console.log('Database Connected')

        const dataCeCollection = client.db("database-name").collection("collection-name")

        app.get('/my-data', async (req, res) => {
            const result = dataCeCollection.find()
            const result = await cursor.toArray()
            res.send(result)
          })

    }
    
    connectDb().catch(console.dir)
                        `
                        }
                    </code>
                    <h1 className='text-center text-2xl'>Get All Data From This Collection </h1>
                    <code className='text-green-500'>
                        {
                            `
        const dataCeCollection = client.db("database-name").collection("collection-name")

        app.get('/my-data', async (req, res) => {
            const cursor = dataCeCollection.find()
            const result = await cursor.toArray()
            res.send(result)
          })

                        `
                        }
                    </code>

                    <h1 className='text-center text-2xl'>Get A Data by _id From This Collection </h1>
                    <code className='text-green-500'>
                        {
                            `
        const dataCeCollection = client.db("database-name").collection("collection-name")

        app.get('/my-data/:id', async (req, res) => {
            const id = req.params.id
            const query = { "_id": ObjectId(id) }
            const result = await dataCeCollection.findOne(query)
            res.send(result)
          })
                        `
                        }
                    </code>

                    <h1 className='text-center text-2xl'>POST Data</h1>
                    <code className='text-green-500'>
                        {
                            `
        const dataCeCollection = client.db("database-name").collection("collection-name")

        app.post('/my-data', async (req, res) => {
            const newData = req.body
            const result = await dataCeCollection.insertOne(newData)

            res.send({ success: true, result })
          })
                        `
                        }
                    </code>

                    <h1 className='text-center text-2xl'>POST Data & Filter Duplicate</h1>
                    <code className='text-green-500'>
                        {
                            `
        const dataCeCollection = client.db("database-name").collection("collection-name")

        app.post('/user', async (req, res) => {
            const newData = req.body
            const query = {email: newData.email , password : newData.password}
            const exists = await dataCeCollection.findOne(query)

            if (exists) {
            return res.send({ success: false, user: 'alrady exists' })
            }
            const result = await dataCeCollection.insertOne(ApData)

            res.send({ success: true, result })
          })
                        `
                        }
                    </code>
                  
                  
                    <h1 className='text-center text-2xl'>Delete a Data</h1>
                    <code className='text-green-500'>
                        {
                            `
        const dataCeCollection = client.db("database-name").collection("collection-name")

        
        app.delete('/my-data/:id', async (req, res) => {
            const id = req.params.id
            const result = await dataCeCollection.deleteOne({ "_id": ObjectId(id) });

            res.send(result)
        })
                        `
                        }
                    </code>
                  
                    <h1 className='text-center text-2xl'>PUT Data</h1>
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
            const result = await dataCeCollection.updateOne(filter, updateDoc, options);
        
            res.send(result);
          })
                        `
                        }
                    </code>
                    <h1 className='text-center text-2xl'>PATCH Data</h1>
                    <code className='text-green-500'>
                        {
                            `
        const dataCeCollection = client.db("database-name").collection("collection-name")

        
        app.patch('/booking/:id', async(req, res) =>{
            const id  = req.params.id;
            const data = req.body;
            const filter = {_id: ObjectId(id)};
            const updatedDoc = {
              $set: {
                name : data.name ,
                password : data.pass
              }
            }
            const updatedData = await dataCeCollection.updateOne(filter, updatedDoc);
            res.send(updatedData);
                        `
                        }
                    </code>


                </pre>
            </div>
        </div>
    )
}

export default Mongodb