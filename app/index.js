const express = require('express')
let app = express()

app.get('iRoam/jobs/:jid/:job.html',(req,res)=>{
    res.redirect(`https://maxc.ams3.digitaloceanspaces.com/jobs/${req.params.jid}/${req.params.jid}.html`)
})
app.listen(80)