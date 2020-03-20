const db = require("../db-config");

module.exports = {
  addResource,
  findResource,
  findProject,
  addProject,
  addTask,
  findTasks,
  findById

};



// adding resources
function addResource(resourceData) {
  return db('resource').insert(resourceData);
}

// retrieving a list of resources
function findResource() {
  return db('resource');
}

// adding projects
function addProject(projectData) {
  return db('projects').insert(projectData);
}

// retrieving a list of projects
function findProject() {
  return db('projects');
}

//find projects by id
function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}


// adding tasks
function addTask(taskData) {
  return db('tasks').insert(taskData);
}

// retrieving a list of tasks. The list of tasks should include the project name and project description
function findTasks(id) {
  return db('tasks')
    .select('p.name', 'p.description', 't.description')
    .from('projects as p')
    .join('tasks as t', 'p.id', '=', 't.project_id')
    .where({ project_id: id });
}