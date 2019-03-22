const express = require('express')
const db = require('./projectModel.js')

const router = express.Router()

router.get('/', (req, res) => {
  db.get().then(project => {
    res.status(200).json(project)
  }).catch(err => {
    res.status(400).json({ message: 'The project was not retrieved.' })
  })
})

router.get('/actions/:id', (req, res) => {
  db.getProjectActions(req.params.id).then(project => {
    res.status(200).json(project)
  }).catch(err => {
    res.status(404).json(err)
  })
})

router.post('/', (req, res) => {
  db.insert(req.body).then(project => {
    res.status(201).json(project)
  }).catch(err => {
    res.status(404).json(err)
  })

})

router.put('/:id', (req, res) => {
  db.update(req.params.id, req.body).then(project => {
    if(project) {
      res.status(200).json(project)
    } else {
      res.status(404).json(err)
    }
  }).catch(err => {
    res.status(500).json({ message: 'The project information could not be modified.' })
  })
})

router.delete('/:id', (req, res) => {
  db.remove(req.params.id).then(project => {
    if(project) {
      res.status(200).json(project)
    } else {
      res.status(404).json(err)
    }
  }).catch(err => {
    res.status(500).json({ message: 'Action could not be removed.' })
  })
})

module.exports = router
