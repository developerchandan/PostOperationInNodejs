//post req.
userExpressApp.post('/register',(req,res)=>{
    // console.log("data is ",req.body);
    // res.send({message:'registered successful'})

// //insert obj of req.body into empcollection
dbo.collection("empcollecion").insertOne(req.body,(err,result)=>{
    if(err){
        console.log("err is insert",err);
    }
    else{
        res.send({message:"emp created successfully"})
    }
})

    

})

