var db = require("./db_config");

db.connect(function (err) {
    if (err) throw err;

    let sql = "INSERT INTO admin(name,address) VALUES ?";
    var values = [
        ['Ismed', 'Tanggerang'],
        ['Isnul', 'Kalimantan'],
        ['Sigit', 'Lampung']
    ];

    db.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of record inserted :" + result.affectedRows);
    });
});