
exports.seed = function(knex) {

  return knex('projects').insert([
    {name: "Project 1", proj_desc: "Description of Project 1", completed: false}
  ])
   
   
};
