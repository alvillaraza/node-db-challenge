const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

// adding resources
router.post('/resources', (req, res) => {
  const resourceData = req.body;

  Projects.add(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new scheme' });
    });
})

//  retrieving a list of resources
router.get('/resources', (req, res) => {
  Projects.find()
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get schemes' });
    });
})

//  adding projects.
//  retrieving a list of projects.
//  adding tasks.
//  retrieving a list of tasks. The list of tasks should include the project name and project description.