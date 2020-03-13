
const tables = require("../data/tables")
module.exports = function(app) {
    app.get("/api/tables", (req, res) => {
        // console.log(tables + "tables");
        res.json(tables);
    });
    
    app.post("/api/tables", (req, res) => {
        const newTable = req.body;
        // console.log(newTable);
        tables.push(newTable);
        return res.json(newTable);
    });

const waitlist = require("../data/waitlist")

    app.get("/api/waitlist", (req, res) => {
        // console.log(waitlist);
        res.json(waitlist);
    });
  
    app.post("/api/waitlist", (req, res) => {
        const newWait = req.body;
        // console.log(newWait);
        waitlist.push(newWait);
        return res.json(newWait);
    });

   
}