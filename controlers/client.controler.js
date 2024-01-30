
const client=require('../mongoose.models/client.model');  
const course=require('../mongoose.models/course.model');
const task=require('../mongoose.models/tasks.model');
const JWT=require('../middlewares/jsonwebtoken');
const { log } = require('console');


const addclient=async(req,res)=>{

    const{email,name,password,number,picture,age }=req.body;
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa",req.body); 
    const oldColient= await client.findOne({email});
    if(oldColient){
        res.status(400).end("user are exsists");
    }else{
        const newClient= new client({
            email,
            name,
            password,
            number,
            picture,
            age
        });
        newClient.save();
        console.log("new client is : ", newClient);
        // await newClient.save();

        const token=JWT.generatetoken({email,name,number});
        //responseText
        res.status(201).json(token);
         
    } 

} 

const login=async(req,res)=>{
    console.log(" req.body is : ", req.body);
    const {email,password,name, number}=req.body; 
    const oldClient= await client.findOne({email,password});
    if(oldClient){ 
        const token=JWT.generatetoken({email,name:oldClient.name,number:oldClient.number,id:oldClient._id,age:oldClient.age});
        // res.write(oldClient._id);
        res.status(200).json(token);
    }else{
        res.status(404).send("nottttt found ") 
    }
}

// const oldClient=await client.findByIdAndUpdate(id,{$push:{courses:courseId}});

const addcourseToclient=async(req,res)=>{ 
    const email=req.body.email;
    console.log(" email is : ",email);
    const courseId=req.body.courseId;
    console.log("course id d d d d d d",courseId);
    const oldClient=await client.findOne({email});
    oldClient.courses.push({courseId});
    oldClient.save();
    res.status(200).end(" secess add course ");
}

const getClient=async(req,res)=>{
    const email=req.email;
    const oldClient=await client.findOne({email});
    let courses=[];
 
    for(var i=0; i<oldClient.courses.length;i++){
        async function getCourse(){
            return await course.findOne({_id:oldClient.courses[i].courseId});
        }
         
        await getCourse().then(
            (res)=>{courses.push(res); console.log(res);}
        )

    }


    console.log(" arr courses : ",courses);
    // courses.push(22,33);
    res.status(200).json({data:{oldClient,courses}}); 
}
const getAllClients=async(req,res)=>{

    const clients=await client.find({});

  
    console.log(" arr clients : ",clients); 

    res.status(200).json({data:{clients}}); 
}


const addTaskToclient=async(req,res)=>{ 
    const email=req.body.email;
    console.log(" email is : ",email); 
    const taskId=req.body.taskId;
    const courseId=req.body.courseId;
    // console.log("task id d d d d d d",courseId);
    // courses:{$elemMatch:{courseId}}
    const opject=await client.findOne({email},{courses:1});
    console.log(" course  id :::",courseId);
    let length=opject.courses.length;
    const course=opject.courses[length-1];
    // const course=opject.courses.find(course=>course.courseId==courseId);
    console.log("course  ggg",course);

    course.tasks.push({taskId,rate:" "});
    opject.save();
    res.status(200).end(" secess add task ");  
}

const addRate=async(req,res)=>{ 
    const email=req.body.email;
    console.log(" email is : ",email); 
    const courseId=req.body.courseId;
    const taskId=req.body.taskId;
    const rate=req.body.rate;
    console.log("task id d d d d d d",taskId);
    const user = await client.findOne({ email});
    const course = user.courses.find(course => course.tasks.some(task => task.taskId === taskId));
    const task = course.tasks.find(task => task.taskId === taskId);

    task.rate=rate;
    // opject.courses[0].tasks.rate=taskRate ;
     await user.save();
    // db.users.findOne({"_id": id},{awards: {$elemMatch: {award:'Turing Award', year:1977}}})

    // const tasks=await oldClient.tasks;
    // const task=await tasks.findOne({_id:taskId});
    console.log(task);
    
    // task.rate=taskRate;
    // oldClient.save();
    res.status(200).end(" secess add rate ");
}


const addGroup=async(req,res)=>{ 
    const email=req.body.email;
    console.log(" email is : ",email);
    const group=req.body.group;
    console.log("task id d d d d d d",group);
    const oldClient=await client.findOne({email}); 
    oldClient.group=group;
    oldClient.save();
    res.status(200).end(" secess add group ");
}

const getCourse=async(req,res)=>{
    const email=req.body.email;
    console.log(" email is : ",email); 
    const courseId=req.body.courseId;
 
    const user = await client.findOne({ email});
    const course =await user.courses.find(course => course.courseId == courseId);
    // const course = user.courses.find(course => course.courseId === courseId);

    let tasks=[];

    // console.log(course.tasks[0].rate);

    for( var i =0; i<course.tasks.length; i++){
        let taskOPJ=await task.findById({_id:course.tasks[i].taskId});
        let rate=course.tasks[i].rate;
        data={
            rate,
            title:taskOPJ.title,
            videoUrl:taskOPJ.videoUrl,
            description: taskOPJ.description
        }
        console.log( data);
        tasks.push(await data);
     
    }    
   
    res.json(tasks); 
 


}  

module.exports={
    addclient,
    login,
    addcourseToclient,
    getClient,
    getAllClients,
    addTaskToclient, 
    addRate, 
    addGroup,
    getCourse
}
