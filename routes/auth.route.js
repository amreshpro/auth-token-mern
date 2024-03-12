import express from 'express'

//router
const router = express.Router();


//
router.post("/register",async(req,res,next)=>{
    res.send("register route")
})
router.post("/login",async(req,res,next)=>{
    res.send("login route")
})

router.post("/refresh-token",async(req,res,next)=>{
    res.send("refresh token route")
})

router.delete("/logout",(req,res,next)=>{
    res.send("logout route")
})

router.post("/register",(req,res,next)=>{
    res.send("register route")
})

export default router