import studentModel from "../models/studentModel.js"

const deleteController = async (req, res) => {
    try {
        await studentModel.findByIdAndDelete(req.params.id)
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

export {deleteController}