const {db} = require('../util/admin')
const config = require('../util/config')
const firebase = require('firebase')
firebase.initializeApp(config)
const {validateSignupData,validateSignInData } =require('../util/validation')



exports.SignUp = (req,res)=>{
    const newUser = {
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        handle:req.body.handle,
    }

    
     const {valid,errors} = validateSignupData(newUser)

     if(!valid) return res.status(400).json(errors)

    let token,userId;
    db.doc(`/users/${newUser.handle}`).get()
    .then(doc=>{
        if(doc.exists){
            return res.status(400).json({handle:'this handle alredy taken'})

        }
        else{
            return firebase
            .auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
        }
        
    })
    .then(data=>{
        userId = data.user.uid
        return data.user.getIdToken()
    }) 
    .then((idToken)=>{
        token = idToken
        const newCredentials = {
             handle:newUser.handle,
             email:newUser.email,
             created: new Date().toISOString(),
             userId
        }
        return db.doc(`/users/${newUser.handle}`).set(newCredentials)
    })
    .then(()=>{
        return res.status(201).json({token})
    })

    .catch(err=>{
        console.log(err)
        if(err.code === "auth/email-already-in-use"){
            return res.status(400).json({email:"email is already is used"})
        }
        else{

            return res.status(500).json({error:err.code})
        }
    })
    
}


exports.SignIn = (req,res) =>{
    const user = {
        email:req.body.email,
        password:req.body.password,
    }
    // validation for signin 
    const {valid,errors} = validateSignInData(user)
    if(!valid) return res.status(400).json(errors)

    firebase
    .auth()
    .signInWithEmailAndPassword(user.email,user.password)
    .then((data)=>{
        return data.user.getIdToken()
    })
    .then((token)=>{
        return res.json({token})
    })
    .catch((err)=>{
        if(err.code === "auth/wrong-password"){
            return res.status(403).json({
                general : "wrong credintials , please try again"
            })
        }
        return res.status(500).json({error:err.code})

    })


}