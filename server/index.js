const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


const db = mysql.createConnection({
    user : "admin",
    host : "mysql-50762-0.cloudclusters.net",
    password: "FYnrHTpx",
    database: "force_webapp",
    port: "17152",
    // user: "root",
    // host: "127.0.0.1",
    // password: "root",
    // database: "goldtroop",
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

app.get('/login', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;

    console.log(email,password);

    db.query("SELECT * FROM usertable WHERE email=? AND password=?",
        [email, password], (err, result) => {
            if (result.length > 0) {
                
                res.send(result);
                console.log(result);
            }
            else if (result.length == 0)  {

                res.send({ message2: "Invalid email/password combination!" });
                console.log(result);
            }
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

 ////////////////////////////////////// User Management ///////////////////////////// 
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

app.get('/view-user', (req, res) => {
    db.query("SELECT first_name, last_name, email, contact, address, FROM usertable WHERE userid = ? ", [req.query.userid], (err, result) => {
        res.send(result);
        console.log(result);
    })
})

 ////////////////////////////////////// Inventory Management /////////////////////////////
app.get('/view-itemlist', (_req, res) => {
    db.query('SELECT * FROM item ', (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});


app.get('/view-itemrequested', (_req, res) => {
    db.query("SELECT item_log.item_id, item.item_name, item_log.itemlog_quantity, item_log.itemlog_issuedto, item_log.itemlog_issue_date, item.item_available_quantity"+
            " FROM item_log"+
            " JOIN item"+
            " ON item_log.item_id = item.item_id"+
            " WHERE item_log.itemlog_status='pending';", (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get('/view-itemreserved', (_req, res) => {
    db.query("SELECT item_log.item_id, item.item_name, item_log.itemlog_quantity, item_log.itemlog_issuedto, item_log.itemlog_issue_date, item.item_available_quantity"+
            " FROM item_log"+
            " JOIN item"+
            " ON item_log.item_id = item.item_id"+
            " WHERE item_log.itemlog_status='reserved';", (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.get('/view-itemissued', (_req, res) => {
    db.query("SELECT item_log.item_id, item.item_name, item_log.itemlog_quantity, item_log.itemlog_issuedto, item_log.itemlog_issue_date, item_log.itemlog_receive_date, item.item_available_quantity"+
            " FROM item_log"+
            " JOIN item"+
            " ON item_log.item_id = item.item_id"+
            " WHERE item_log.itemlog_status='issued';", (err, result, _fields) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

// TO DO ::: FULL LOG
app.get('/view-itemlog', (_req, res) => {
    db.query('SELECT * FROM itemlog ', (err, result, _fields) => {
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


app.listen(17152, () => {
    console.log("Your server is running on port 17152");
});