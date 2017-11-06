var mysql=require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'mydb',
    port:'3306'
});

connection.connect();

// 增
//connection.query('insert into mytable(name,sex) values(?,?)', ['jack','M'], function(error, result){
//    if(error)
//    {
//        console.log(error.message);
//    }else{
//        console.log('insert id: '+result.insertId);
//    }
//});
//
//// 删
//connection.query("delete from mytable where name='nemo'",function(err,result){
//   console.log(result);
//});
//
//// 改
//connection.query("update mytable set sex='F' where name='jack'",function(err,result){
//   console.log(result);
//});

// 查
//connection.query("select* from mytable",function(err,result){
//    console.log(Object.getOwnPropertyNames(result[0])); // 获取title数组 ['name','sex']
//    console.log(String(result[0].name));    // 获取value值 james
//})
