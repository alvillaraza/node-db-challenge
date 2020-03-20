
exports.seed = function(knex) {

  return knex('resource').insert([
    {name: "Resource 1", desc: "Resource 1"}
  ])
   
   
};
