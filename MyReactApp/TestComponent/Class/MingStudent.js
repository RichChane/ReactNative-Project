import StudentModel from "./StudentModel";


export default class MingStudent extends StudentModel{

    constructor () {
        super ('小明','女',20);

    }

    getDescription(): * {
        return 'Bad gay' + super.getDescription();
    }

}