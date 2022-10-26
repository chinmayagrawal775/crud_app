import studentModel from "../models/studentModel.js"

const retriveController = async (req, res) => {
    try {
        const result = await studentModel.find()
        res.render('index', {title: 'Home', data: result})
    } catch (error) {
        console.log(error)
    }
}

export {retriveController}