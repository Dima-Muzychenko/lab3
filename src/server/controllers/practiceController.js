const {Practice} = require("../DBModeles/models");

class PracticeController{
    async addPractice(req, res, examination_id, is_passed, used_attempts, left_attempts){
        //приклад додання (можна й всі 4 параметри):
        //addPractice(2, true);
        Practice.sync({force: false}).then(() => {
            return Practice.create({examination_id: examination_id,
                is_passed: is_passed,
                used_attempts: used_attempts,
                left_attempts: left_attempts});
        });
    }


    async findPractice(req, res, practice_id){
        //приклад:
        // pr = findPractice(2).then(pr=>console.log(pr))
        return Practice.findOne({
            where:{
                id:practice_id
            },
        })
    }


    async deletePractice(req, res, practice_id){//не тестував, але повинно працювати
        //приклад
        //deletePractice(44);
        Practice.sync({force: false}).then(() => {
            Practice.destroy({
                where: {
                    id: practice_id
                },
            })
        });
    }


    async findAllPractices(req, res) {
        // приклад:
        // let p2=findAllPractices();
        // p2.then(function(result) {
        //     console.log(result)
        // });
        return Practice.findAll();
    }
}

module.exports = new PracticeController()