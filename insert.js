var db = require("./db_config");

db.connect(function (err) {
    if (err) throw err;

    let sql = `INSERT INTO admin (name, address)
                VALUES ('Tria','Kota Batu')`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});