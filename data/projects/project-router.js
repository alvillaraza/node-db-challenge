const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

// adding resources
router.post('/resources', (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
})

//  retrieving a list of resources
router.get('/resources', (req, res) => {
  Projects.findResource()
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
})

//  adding projects
router.post('/', (req, res) => {
  // const projectData = req.body;
  // var projectDatatemp;

  Projects.addProject(req.body)
  .then(project => {
    res.status(201).json(project);
  })
    .catch(err => {
      // projectDatatemp = projectData;
    // console.log(projectDatatemp)
      res.status(500).json({ message: 'Failed to create new project' })
    });
});

//  retrieving a list of projects
router.get('/', (req, res) => {
  Projects.findProject()
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
    res.status(500).json({message: 'Failed to get project'})
  })
})

//  adding tasks
router.post('/:id/tasks', (req, res) => {
  const taskData = req.body;
  const { id } = req.params;
  const obj = {
    ...taskData, project_id:id 
  }

  Projects.findById(id)
    .then(project => {
      if (project) {
        Projects.addTask(obj)
          .then(task => {
            res.status(200).json(task)
          })
          .catch(err => {
            res.status(500).json({ message: 'Failed to create task' });
          });
      }
      else {
        res.status(400).json({message: 'Could not find project with given id'})
      }
    })
    .catch(err => {
    res.status(500).json({message: 'Failed to create new step'})
  })
})
//  retrieving a list of tasks. The list of tasks should include the project name and project description.

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.findTasks(id)
    .then(tasks => {
      if (tasks.length) {
        res.status(200).json(tasks);
      } else {
        res.status(404).json({message: 'Could not find task for given project'})
    }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
  })
})

module.exports = router;