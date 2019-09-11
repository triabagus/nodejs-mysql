var db = require("./db_config");

db.connect(function (err) {
    if (err) throw err;

    let sql = "SELECT * FROM admin LIMIT 2";
    db.query(sql, function (err, result) {
        if (err) throw err;
        // console.log(result);

        // use looping for show data
        console.log(`Id \t Name \t\t Addess`);
        console.log(`-------------------------------------`);
        result.forEach(admin => {
            console.log(`${admin.id} \t ${admin.name} \t\t ${admin.address}`);
        });

    });
});