const express=require('express');
const router=express.Router();
const User=require('../models/user');

router.post("/user",async(req,res)=>{
    try{
        const data=req.body
        const newUser=new User(data);

         const  response = await newUser.save()  

        console.log("data saved")
        res.status(200).json(response)

    }catch(error){
         console.log(error);
         res.status(500).json({error:"Internal server error"})
    }
    
})

router.get("/random-user", async (req, res) => {
    try {
        // Count the total number of users in the database
        const count = await User.countDocuments();
        
        // Generate a random index within the range of the total number of users
        const randomIndex = Math.floor(Math.random() * count);
        
        // Find a random user using the generated random index
        const randomUser = await User.findOne().skip(randomIndex);
        
        // Send the random user data in the response
        res.json(randomUser);
    } catch (error) {
        console.error("Error fetching random user:", error);
        res.status(500).json({ error: "Failed to fetch random user" });
    }
});


router.post('/check-user', async (req, res) => {
    try {
        // Extract name from request body
        const { name } = req.body;

        // Query the database to find a user with the provided name
        const user = await User.findOne({ name });

        // Return true if user exists, false otherwise
        res.json({ exists: !!user });
    } catch (error) {
        console.error('Error checking user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// Route to get users based on age
router.post('/get-users-by-age', async (req, res) => {
    try {
        // Extract age from request body
        const { age } = req.body;

        // Query the database to find users with age greater than or equal to the specified age
        const users = await User.find({ age: { $gte: age } });

        // Return the matched users
        res.json(users);
    } catch (error) {
        console.error('Error fetching users by age:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to get names of all users
router.get('/get-all-user-names', async (req, res) => {
    try {
        // Query the database to find all users
        const users = await User.find({}, 'name');

        // Extract names from the query result
        const userNames = users.map(user => user.name);

        // Return the array of names
        res.json(userNames);
    } catch (error) {
        console.error('Error fetching user names:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports=router;