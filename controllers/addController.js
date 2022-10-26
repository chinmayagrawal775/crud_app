import studentModel from "../models/studentModel.js"

const addController = async (req, res) => {
    try {
        const doc = studentModel({
            name: req.body.name,
            age: req.body.age,
            fees: req.body.fees
        })
        await doc.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

export {addController}