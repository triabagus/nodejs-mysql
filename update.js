var db = require("./db_config");

db.connect(function (err) {
    if (err) throw err;

    // update address isnul
    let sql = `UPDATE admin 
                SET address='Lainnya'
                WHERE id=3`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Data is updated:" + result.affectedRows);
    });
});