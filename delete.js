var db = require("./db_config");

db.connect(function (err) {
    if (err) throw err;

    // delete isnul data
    let sql = `DELETE FROM admin WHERE id =3`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Data is a deleted:" + result.affectedRows);
    });
});