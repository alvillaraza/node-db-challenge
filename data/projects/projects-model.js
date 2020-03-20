const db = require("../data/db-config.js");

module.exports = {
  find,
  add,
  findTasks
};



// adding resources
function add(resourceData) {
  return db('resource').insert(resourceData);
}

// retrieving a list of resources
function find() {
  return db('resource');
}

// adding projects
function add(projectData) {
  return db('projects').insert(projectData);
}

// retrieving a list of projects
function find() {
  return db('projects');
}

// adding tasks
function add(taskData) {
  return db('tasks');
}

// retrieving a list of tasks. The list of tasks should include the project name and project description
function findTasks(id) {
  return db('tasks')
    .select('p.name', 'p.description', 't.description')
    .from('projects as p')
    .join('tasks as t', 'p.id', '=', 't.project_id')
    .where({ project_id: id });
}
