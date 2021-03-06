var app = new Vue({
    el: '#app',
    data:{
        activeProject: "1",
        table: false,
        direction: 'rtl',
        dbTableDatas:[{
            tableName: 'h_user',
            tableDesc: '用户表'
          }, {
            tableName: 'h_org',
            tableDesc: '组织表'
          }, {
            tableName: 'h_post',
            tableDesc: '岗位表'
          }, {
            tableName: 'h_role',
            tableDesc: '角色表'
          }],
          happyCodeForm:{
              build: "maven",
              happyCodeVersion: "1.0.1.RELEASE",
              projectMetadata:{
                  group: "com.example",
                  artifact: "demo",
                  name: "demo",
                  proPackage : "com.example.demo",
                  description: "Demo project for Spring Boot",
                  javaVersion: "1.8"
              },
              author:{
                  name: "lanlanhappy",
                  email: "lanlanhappy@aliyun.com"
              },
              database:{
                  host: "localhost",
                  port: "3306",
                  username: "root",
                  password: "123456",
                  schema: "happy-demo",
                  tablePrefix: "h_"
              }
          }
    },
    methods:{
     listTables: function(){

     },
     generateCode: function(){
         console.log("generateCode")
     }
    }
})