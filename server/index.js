const express = require('express');
const multer= require('multer');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const { name } = require('ejs');
const bcrypt = require('bcrypt');
const bodyParser =  require('body-parser')
const { response } = require('express');

const saltRounds = 10;

const cookieParser = require('cookie-parser');
const session = require('express-session');

var nodemailer = require('nodemailer')

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true
  }));




app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.set("view engine","ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  key: "id",
  secret: "subscribe",
  resave: false,
  saveUninitialized: false,
  cookie: {
    // expires:60*60*24,
  },
}));


const db = mysql.createConnection({
    user : "admin",
    host : "mysql-50762-0.cloudclusters.net",
    password: "FYnrHTpx",
    database: "force_webapp",
    port: "17152",
    multipleStatements: true
});

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Database Connected...');
    }
});

const publicDirectory = path.join(__dirname, './public')
console.log(__dirname);

app.post('/login', (req, res) => {
  
  const email = req.body.email
  const password = req.body.password
  
  console.log(email)
  console.log(password)
  db.query
  ("SELECT * FROM usertable WHERE email = ?;", 
  email, 
  (err, result)=> {

      if(err){
          res.send({err: err})
      }
      if(result){
          console.log(result);
          if (result.length > 0) {
              bcrypt.compare(password, result[0].password, (error, response)=>{
                  console.log(response);
                  if(response){        
                      res.send(result);
                  }else{
                      res.send({message:"Invalid Username or Password!"})
                  }
              })
          }else{
              res.send({message:"User doesn't exist"});
          }

          
      }}
  );
});

app.post("/Register", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const password = req.body.password;
  const cpassword = req.body.cpassword;
  const nic = req.body.nic;
 

  var transport = nodemailer.createTransport(
    {
      service: 'gmail',
      auth: {
        user: 'sukha98gnanam@gmail.com',
        pass: 'Shuthu@1998'
      }
    }
  )
  const otp = Math.floor(100000 + Math.random() * 900000);
  const head = 'otp code';
  const mess = `Dear ${first_name}, 

                Your otp code is ${otp}
                Use this code to verify your Account.

            With regrads,
            Scout Team`;

  var mailOptions = {
    from: 'sukha98gnanam@gmail.com',
    to: email,
    subject: head,
    text: mess
  }
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    }
    else {

      console.log('Email sent' + info.response)
      
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          console.log(err);
        }

        db.query(
          "INSERT INTO usertable(first_name,last_name,password,email,phone,nic,address,proimg,date,u_otp,user_role) VALUES (?,?,?,?,?,?,?,'user.jpg',NOW(),?,'USER');  ", [first_name,last_name,hash, email, phone, nic, address, otp ],
          (err, result) => {
            if (err) {
              console.log(err)
            } else {
              res.send({ message: "values sended" });
            }
          });
      })
    }
  })
});

app.post('/otpCheck', (req, res) => {

  const email = req.body.email
  const otp = req.body.otp

  console.log(email)
  console.log(otp)
  db.query
  ("SELECT * FROM usertable WHERE email = ? AND u_otp = ?;", 
  [email,otp], 
  (err, result)=> {

      if(err){
          res.send({err: err})
      }
      if(result){
          console.log(result);
          if (result.length > 0) {
              
              db.query("UPDATE usertable SET enabled=? WHERE email = ? AND u_otp = ?", 
              [1,email,otp], 
              (err, result) => {

                  if (err) {
                      console.log(err);
                  } else {
                      res.send({message:"OTP code verified Successfully"});
                  }
              }
              );
              
          }else{
              res.send({message:"Wrong otp code"});
          }

          
      }}
  );
});

app.get('/validuser', (req, res) => {
  db.query("SELECT * FROM  usertable WHERE email=? OR  nic = ?", [req.query.email,req.query.nic], (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });

});


//Scout Leader Dashboard
app.get('/troopCount', (req, res) => {
    db.query("SELECT COUNT(userid) AS troop FROM usertable; ", [req.query], (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  })


app.get('/leaderCount', (req, res) => {
    db.query("SELECT COUNT(userid) AS leader FROM usertable WHERE user_role = 'LEADER' ; ", [req.query], (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  })

app.get('/seniorCount', (req, res) => {
    db.query("SELECT COUNT(userid) AS senior FROM usertable WHERE user_role = 'SENIOR' ; ", [req.query], (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  })

app.get('/juniorCount', (req, res) => {
    db.query("SELECT COUNT(userid) AS junior FROM usertable WHERE user_role = 'JUNIOR' ; ", [req.query], (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  })

app.get('/view-announcement', (_req, res) => {
    db.query('SELECT * FROM announcement ', (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get('/view-badge-request', (_req, res) => {
    db.query('SELECT * FROM badge ', (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.post('/createAnnouncement', (req, res) => {
    console.log(req.body)
    const announcement_title = req.body.announcement_title;
    const announcement_author = req.body.announcement_author;
    const announcement_date = req.body.announcement_date;
    const announcement_body = req.body.announcement_body;

    db.query("INSERT INTO announcement (announcement_title,announcement_author,announcement_date,announcement_body) VALUES (?,?,?,?)",
        [announcement_title,announcement_author,announcement_date,announcement_body], (err, _results) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Announcement Posted Successfully");
            }
    });
});

app.get("/delete-announcement", (req, res) => {
    const announcement_id = req.query.announcement_id;
    db.query("DELETE FROM announcement WHERE announcement_id=?",
        [announcement_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

 ////////////////////////////////////// FILE UPLOADS ///////////////////////////// 
//ContentUpload
const profileImgStorage= multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"files/user-profiles");
    },
    filename:(req,file,cb) =>{
        //get name from frontend req.body.name
        cb(null,"test.jpeg");
    },
});

const uploadProfileImg= multer({storage:profileImgStorage});
app.post('/contentUpload',uploadProfileImg.single("file"),(req,res)=>{
    res.status(200).json("file uploaded succesfully 1")
});

 //ContentUpload
const contentStorage= multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"files/contents");
    },
    filename:(req,file,cb) =>{
        //get name from frontend req.body.name
        cb(null,"test.jpeg");
    },
});

const uploadContent= multer({storage:contentStorage});
app.post('/contentUpload',uploadContent.single("file"),(req,res)=>{
    res.status(200).json("file uploaded succesfully 1")
});

//badgework upload
const badgeStorage= multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"files/badgeworks");
    },
    filename:(req,file,cb) =>{
        //get name from frontend req.body.name
        cb(null,"test.jpeg");
    },
});

const uploadBadge= multer({storage:badgeStorage});
app.post('/BadgeUpload',uploadBadge.single("file"),(req,res)=>{
    res.status(200).json("Badge uploaded succesfully ")
});

//Immage Gallery upload
const galleryStorage= multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"files/image-gallery");
    },
    filename:(req,file,cb) =>{
        //get name from frontend req.body.name
        cb(null,file.fieldname + '-' + Date.now() + file.originalname.match(/\..*$/)[0]);
    },
});

const uploadGallery= multer({storage:galleryStorage});
app.post('/GalleryUpload',uploadGallery.array("file",10),(req,res)=>{
    res.status(200).json("Badge uploaded succesfully ")
});


 ////////////////////////////////////// User Management ///////////////////////////// 
 app.get("/viewUserinfo",(req,res)=>{
  userid=req.params.userid;
  db.query("SELECT * FROM usertable WHERE userid=?",[req.query.userid],(err,result)=>{
    console.log(req.query.userid);
    res.send(result);
  });
  
});

 app.get('/view-users', (_req, res) => {
    db.query('SELECT * FROM usertable ', (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get("/delete-user", (req, res) => {
    const userid = req.query.userid;
    db.query("DELETE FROM usertable WHERE userid=?",
        [userid],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.post('/create-user', (req, res) => {
    console.log(req.body)
    const userid = req.body.userid;
    const address = req.body.address;
    const contact = req.body.contact;
    const email = req.body.email;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const nic = req.body.nic;
    const password = req.body.password;

    db.query("INSERT INTO product (address,contact,email,first_name,last_name,nic,password) VALUES (?,?,?,?,?,?)",
        [address, contact, email, first_name, last_name, nic,password], (err, _results) => {
            if (err) {
                console.log(err);
            } else {
                res.send("User Created Successfully!");
            }
        });
});


//UPDATE USER DETAILS
app.put('/update-user', (req, res) => {
    const userid = req.body.userid;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const contact = req.body.contact;
    const address = req.body.address;


    
    db.query("UPDATE usertable SET first_name = ?, last_name = ?, email = ?, contact = ?, address = ? WHERE userid=?",
        [first_name, last_name, email, contact, address, userid],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
// VIEW SINGLE USER
app.get('/view-user', (req, res) => {
    db.query("SELECT first_name, last_name, email, contact, address, FROM usertable WHERE userid = ? ", [req.query.userid], (err, result) => {
        res.send(result);
        console.log(result);
    })
});




 ////////////////////////////////////// Inventory Management /////////////////////////////
  app.get('/items', (req, res) => {
  db.query("SELECT * FROM item  ", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });

});

app.post('/create-item-request', (req, res) => {
    console.log(req.body)
    const announcement_title = req.body.announcement_title;
    const announcement_author = req.body.announcement_author;
    const announcement_date = req.body.announcement_date;
    const announcement_body = req.body.announcement_body;

    db.query("INSERT INTO announcement (announcement_title,announcement_author,announcement_date,announcement_body) VALUES (?,?,?,?)",
        [announcement_title,announcement_author,announcement_date,announcement_body], (err, _results) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Announcement Posted Successfully");
            }
    });
});

app.get("/viewItemListinfo",(req,res)=>{
  item_id= req.params.item_id
 
  db.query("SELECT * FROM item WHERE item_id=?",[req.query.item_id],(err,result)=>{
    console.log(req.query.item_id);
    res.send(result);
  });
  
});


app.get('/view-itemlist', (_req, res) => {
    db.query('SELECT * FROM item ', (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get("/delete-item", (req, res) => {
    const item_id = req.query.item_id;
    db.query("DELETE FROM item WHERE item_id=?",
        [item_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});


app.get('/view-itemrequested',(req, res) =>{
  db.query("  SELECT item_log.item_id,item_log.itemlog_id, item.item_name, item_log.itemlog_quantity, item_log.itemlog_issuedto, item_log.itemlog_issue_date, item.item_available_quantity FROM item_log JOIN item ON item_log.item_id = item.item_id  WHERE item_log.itemlog_status='pending'  ", (err, result, fields)=>{
  if (!err) {
             res.send(result);
         } else {
             console.log(err);
         }
     });          
            
 })

app.get('/view-itemreserved',(req, res) =>{
  db.query("  SELECT item_log.itemlog_id, item.item_name, item_log.itemlog_quantity, item_log.itemlog_issuedto, item_log.itemlog_issue_date, item_log.itemlog_receive_date FROM item_log JOIN item ON item_log.item_id = item.item_id  WHERE   item_log.itemlog_status='reserved'  ", (err, result, fields)=>{
  if (!err) {
             res.send(result);
         } else {
             console.log(err);
         }
     });          
            
 })


 app.get('/view-itemissued',(req, res) =>{
  db.query("  SELECT item_log.itemlog_id, item.item_name, item_log.itemlog_quantity, item_log.itemlog_issuedto, item_log.itemlog_issue_date, item_log.itemlog_receive_date, item.item_available_quantity FROM item_log JOIN item ON item_log.item_id = item.item_id  WHERE item_log.itemlog_status='issued'  ", (err, result, fields)=> {
  if (!err) {
             res.send(result);
         } else {
             console.log(err);
         }
     });          
            
 })

 app.get('/reject_request', (req,res) => {
  const itemlog_id=req.params.itemlog_id;
    db.query("UPDATE item_log SET itemlog_status='rejected' WHERE itemlog_id = ?", 
    [req.query.itemlog_id], 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });

    app.get('/cancel_request', (req,res) => {
    const itemlog_id=req.params.itemlog_id;
      db.query("UPDATE item_log SET itemlog_status='cancelled' WHERE itemlog_id = ?", 
      [req.query.itemlog_id], 
      (err, result) => {
          if (err) {
              console.log(err);
          } else {
              res.send(result);
          }
         }
      );
    });

     app.get('/remove_request', (req,res) => {
    const itemlog_id=req.params.itemlog_id;
      db.query("UPDATE item_log SET itemlog_status='removed' WHERE itemlog_id = ?", 
      [req.query.itemlog_id], 
      (err, result) => {
          if (err) {
              console.log(err);
          } else {
              res.send(result);
          }
         }
      );
    });

// TO DO ::: FULL LOG
app.get('/view-itemlog', (_req, res) => {
  db.query('SELECT * FROM item_log JOIN item ON item_log.item_id=item.item_id ', (err, result, _fields) => {
      if (!err) {
          res.send(result);
      } else {
          console.log(err);
      }
  });
});




 ////////////////////////////////////// Badgework Management /////////////////////////////
app.get('/view-badges', (_req, res) => {
    db.query('SELECT * FROM badge', (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get('/view-pending-badges', (_req, res) => {
    db.query("SELECT badgelog.badgelog_id, badge.badge_name, badgelog.user_id, usertable.first_name, badgelog.badgelog_requested_date"
+" FROM ((badgelog"+
" JOIN badge ON badgelog.badge_id= badge.badge_id)"+
" JOIN usertable ON badgelog.user_id=usertable.userid)"+
" WHERE badgelog_status='pending'", (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get('/view-requested-badges', (_req, res) => {
    db.query("SELECT badgelog.badgelog_id, badge.badge_name, badgelog.user_id, usertable.first_name, badgelog.badgelog_requested_date"
+" FROM ((badgelog"+
" JOIN badge ON badgelog.badge_id= badge.badge_id)"+
" JOIN usertable ON badgelog.user_id=usertable.userid)"+
" WHERE badgelog_status='requested'", (err, result, _fields) => {
        if (!err) {
            res.send(result);
            console.log(result)
        } else {
            console.log(err);
        }
    });
});

app.get('/view-progressing-badges', (_req, res) => {
    db.query("SELECT badgelog.badgelog_id, badge.badge_name, badgelog.user_id, usertable.first_name, badgelog.badgelog_requested_date, badgelog.badgelog_approved_date "+
    "FROM ((badgelog "+
    "JOIN badge ON badgelog.badge_id= badge.badge_id) "+
    "JOIN usertable ON badgelog.user_id=usertable.userid) "+
    "WHERE badgelog_status='progressing'", (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get('/view-completed-badges', (_req, res) => {
    db.query("SELECT badgelog.badgelog_id, badge.badge_name, badgelog.user_id, usertable.first_name, badgelog.badgelog_requested_date, badgelog.badgelog_approved_date, badgelog.badgelog_completed_date "+
    "FROM ((badgelog "+
    "JOIN badge ON badgelog.badge_id= badge.badge_id) "+
    "JOIN usertable ON badgelog.user_id=usertable.userid) "+
    "WHERE badgelog_status='completed'", (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get('/view-badgelog', (_req, res) => {
    db.query("SELECT badgelog.badgelog_id, badge.badge_name, badgelog.user_id, usertable.first_name, badgelog.badgelog_requested_date, badgelog.badgelog_approved_date, badgelog.badgelog_completed_date, badgelog.badgelog_status "+
    "FROM ((badgelog "+
    "JOIN badge ON badgelog.badge_id= badge.badge_id) "+
    "JOIN usertable ON badgelog.user_id=usertable.userid)", (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get('/view-badgelog-id', (_req, res) => {
    db.query("SELECT badgelog.badgelog_id, badge.badge_name, badgelog.user_id, usertable.first_name, badgelog.badgelog_requested_date, badgelog.badgelog_approved_date, badgelog.badgelog_completed_date "+
    "FROM ((badgelog "+
    "JOIN badge ON badgelog.badge_id= badge.badge_id) "+
    "JOIN usertable ON badgelog.user_id=usertable.userid)", (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.put('/PassBadge', (req,res) => {
    const badgelog_id=req.body.badgelog_id;
  
    db.query("UPDATE badgelog SET  badgelog_status='completed'  WHERE badgelog_id = ?", 
    [badgelog_id], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
            
        }
       }
    );
  });

  app.put('/FailBadge', (req,res) => {
    const badgelog_id=req.body.badgelog_id;
  
    db.query("UPDATE badgelog SET  badgelog_status='failed'  WHERE badgelog_id = ?", 
    [badgelog_id], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
            
        }
       }
    );
  });

  app.put('/DeleteBadge', (req,res) => {
    const badgelog_id=req.body.badgelog_id;
  
    db.query("UPDATE badgelog SET  badgelog_status='finished'  WHERE badgelog_id = ?", 
    [badgelog_id], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
            
        }
       }
    );
  });

  app.put('/AcceptBadge', (req,res) => {
    const badgelog_id=req.body.badgelog_id;
  
    db.query("UPDATE badgelog SET  badgelog_status='progressing'  WHERE badgelog_id = ?", 
    [badgelog_id], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
            
        }
       }
    );
  });

  app.put('/RejectBadge', (req,res) => {
    const badgelog_id=req.body.badgelog_id;
  
    db.query("UPDATE badgelog SET  badgelog_status='rejected'  WHERE badgelog_id = ?", 
    [badgelog_id], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
            
        }
       }
    );
  });

app.get('/totalbadge', (_req, res) => {
    db.query('SELECT COUNT(badge_id) AS count FROM badge', (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

  app.get('/completeprogress', (req, res) => {
    const user_id = req.query.user_id;
    db.query('SELECT COUNT(badgelog_id) AS count FROM badgelog WHERE badgelog_status="finished" OR "completed" AND user_id=2', [user_id], (err, result) => {
        if (!err) {
            res.send(result);
            console.log('result')
            console.log(result)
        } else {
            console.log(err);
        }
    });
});

app.post('/addBadges',(req,res)=>{
  const badge_media =req.body.image;
  const badge_name = req.body.badge_name;
  const description=req.body.description;
  
  db.query(
    "INSERT INTO badge(badge_name,badge_description,badge_media) VALUES (?,?,?)",[badge_name,description,badge_media],
    (err,result)=>{
      if(err){
        console.log(err)
      }else{
        res.send(result)
        console.log(req.body.badge_name)
        console.log(req.body.description)
        console.log(req.body.image)

      }
      
    }
  );
  })



///////////////////////////////////// Content Management System /////////////////////////////
const storage1 = multer.diskStorage({
    destination(req,file,cb){
      cb(null,'../server/files')
    },
    filename(req,file,cb){
      cb(
        null,
        `${file.originalname}`
      )
    }
  })
   
  const upload1 = multer({
    storage1,
    limits:{
      fileSize: 5000000
    },
    fileFilter(req,file,cb){
      if(!file.originalname.match(/\.(jpeg|jpg|png)$/i)){
        return  cb(new Error('please upload image with type of jpg or jpeg'))
    }
    cb(null,true)
  }
  })

  app.post('/addContent', (req, res) => {
    console.log(req.body)
    const content_title = req.body.content_title;
    const content_description = req.body.content_description;
    const display_photo = req.body.display_photo;
    // const posted_date = req.body.posted_date;
    const posted_date = new Date();

    db.query("INSERT INTO content (content_title,content_description,display_photo,posted_date) VALUES (?,?,?,?)",
        [content_title, content_description, display_photo, posted_date], (err, _results) => {
            if (err) {
                console.log(err);
            } else {
                res.send("post created");
                // console.log(content_title,content_description,display_photo,posted_date);
            }
    });
});

app.post("/imageUpload",upload1.single('file'),(req,res)=> {
     
})


app.get('/view-all-content', (_req, res) => {
    db.query("SELECT * FROM content;" , (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get("/delete-content", (req, res) => {
    const content_id = req.query.content_id;
    db.query("DELETE FROM content WHERE content_id=?",
        [content_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});
//     db.query("INSERT INTO content (file,content_title,content_description,posted_date) VALUES (?,?,?,?)",
//         [file, content_title, content_description, posted_date], (err, _results) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send("post created");
//             }
//         });
// });

///////////////////////////////////// Event Management /////////////////////////////


app.post('/addScheduleEvent', (req, res) => {
    // console.log(req.body)
    const title = req.body.title;
    const discription = req.body.discription;
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
    const taskName = req.body.taskName.toString();
    const groupName = req.body.groupName.toString();

    db.query("INSERT INTO event (event_title,event_description,group_name,start_date,end_date,task_name) VALUES (?,?,?,?,?,?)",
        [title, discription,groupName, startDate, endDate, taskName], (err, _results) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Schedule Event Created...!");
            }
        });
});


app.get('/view-all-events', (_req, res) => {
    db.query("SELECT * FROM event;" , (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get('/view-upcoming-events', (_req, res) => {
    db.query("SELECT * FROM force_webapp.event WHERE event_status='upcoming';" , (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get("/delete-event", (req, res) => {
    const event_id = req.query.event_id;
    db.query("DELETE FROM event WHERE event_id=?",
        [event_id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});






///////////////////////////////////// NO CODES BELOW /////////////////////////////

app.listen(17152, () => {
    console.log("Your server is running on port 17152");
});
