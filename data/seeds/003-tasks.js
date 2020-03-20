
exports.seed = function(knex) {

  return knex('tasks').insert([
    {task_desc: "Task 1", project_id: 1}
  ])
   
   
};
