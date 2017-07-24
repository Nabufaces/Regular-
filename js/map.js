/**
 * Created by gaowenlin on 2017/7/24.
 */

var users = [
    {name: "张含韵", "email": "zhang@email.com"},
    {name: "江一燕",   "email": "jiang@email.com"},
    {name: "李小璐",  "email": "li@email.com"}
];

console.log(users.map(function (item) {
    return item.email;
}));
//console: [ 'zhang@email.com', 'jiang@email.com', 'li@email.com' ]