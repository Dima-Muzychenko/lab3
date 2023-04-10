const {Test} = require("../DBModeles/models");

class TestController{
    async addTest(req, res, examination_id, is_passed, used_attempts){
        //приклад додання (можна й всі 3 параметри):
        //addTest(2, true);
        Test.sync({force: false}).then(() => {
            return Test.create({examination_id: examination_id,
                is_passed: is_passed,
                used_attempts: used_attempts});
        });
    }



    async findTest(req, res, test_id){
        //приклад:
        // ts = findTest(1).then(ts=>console.log(ts))
        return Test.findOne({
            where:{
                id:test_id
            },
        })
    }



    async deleteTest(req, res, test_id){//не тестував, але повинно працювати
        //приклад
        //deleteTest(44);
        Test.sync({force: false}).then(() => {
            Test.destroy({
                where: {
                    id: test_id
                },
            })
        });
    }


//export default findExamination();


    async findAllTests(req, res){
        // приклад
        // let t2=findAllTests();
        // t2.then(function(result) {
        //     console.log(result)
        // });
        return Test.findAll();
    }
}

module.exports = new TestController()