const express = require('express')
const db = require('./actionModel.js')

const router = express.Router()

router.get('/', (req, res) => {
  db.get().then(action => {
    res.status(200).json(action)
  }).catch(err => {
    res.status(400).json({ message: 'The action was not retrieved.' })
  })
})

router.post('/', (req, res) => {
  db.insert(req.body).then(action => {
    res.status(201).json(action)
  }).catch(err => {
    res.status(404).json(err)
  })

})

router.put('/:id', (req, res) => {
  db.update(req.params.id, req.body).then(action => {
    if(action) {
      res.status(200).json(action)
    } else {
      res.status(404).json(err)
    }
  }).catch(err => {
    res.status(500).json({ message: 'The action information could not be modified.' })
  })
})

router.delete('/:id', (req, res) => {
  db.remove(req.params.id).then(action => {
    if(action) {
      res.status(200).json(action)
    } else {
      res.status(404).json(err)
    }
  }).catch(err => {
    res.status(500).json({ message: 'Action could not be removed.' })
  })
})

module.exports = router
