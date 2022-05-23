const criteria1 = require('../models/criteria1.model')
const router = require('express').Router()

router.route('/new').post()
router.route('/').get()
router.route('/delete/:id').delete()
router.route('/update/:id').put()
module.exports = router

router.route('/new').post((req, res)=>{
    const table1_data = new criteria1(req.body)
    console.log("M1", req.body.M1);
    console.log(req.body)

    async function save() {
        await table1_data.save((err) => {
        if (!err){
            console.log('Data saved');    
        }
        else
            console.log('Error during record insertion : ' + err);
        });
    }
    save()
})

router.route('/').get((req, res) => {
    // using .find() without a parameter will match on all user instances
    criteria1.find()
        .then(found => res.json(alldata))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/delete/:id').delete((req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/update/:id').put((req, res) => {
    criteria1.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json('Success! User updated.'))
        .catch(err => res.status(400).json('Error! ' + err))
})



