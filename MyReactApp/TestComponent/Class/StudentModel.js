
export default class  StudentModel {

    constructor (name,sex,age) {
        this.name=name;
        this.sex=sex;
        this.age=age;

        console.log('---new Student-----');
    }

    getDescription () {
        console.log('---description-----');
        return '姓名：' + this.name + '性别：' + this.sex + '年龄：' + this.age;
    }

}