import express from 'express';
// express can be imported in 2 ways
// common and module
// import technique is of module js which will throw error
// package.json-> "type":"module" ==> sol to resolve the error
const app = express();
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send("server is ready");
})
app.get('/api/records', (req, res) => {
    const records = [
        {
            id: 1,
            studName: "Harsh Kumar",
            place: "Delhi"
        },
        {
            id: 2,
            studName: "Yogesh Gehlot",
            place: "Rajasthan"
        },
        {
            id: 3,
            studName: "Ayush Suryawanshi",
            place: "Madhya Pradesh"
        },
        {
            id: 4,
            studName: "Bhoma Ram",
            place: "Rajasthan"
        },
        {
            id: 5,
            studName: "Amarpreet Singh",
            place: "Uttarakhand"
        },
    ]
     res.send(records)
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})