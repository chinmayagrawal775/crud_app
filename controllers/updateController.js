import studentModel from "../models/studentModel.js"

class updateController{

    static editPageController = async (req, res) => {
        const result = await studentModel.findById(req.params.id)
        res.render('edit', {title: 'Edit', data: result})
    }

    static editContentController = async (req, res) => {
        try {
            await studentModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
}

export {updateController}