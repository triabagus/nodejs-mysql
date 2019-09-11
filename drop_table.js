/**
 * You make table trial-table
 */

var db = require("./db_config");

db.connect(function (err) {
    if (err) throw err;
    let sql = `DROP TABLE tbTrial`;

    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table dropped");
    });
});