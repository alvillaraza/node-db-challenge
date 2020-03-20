exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();

      tbl.string("description");

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo("false");
    })
    .createTable("tasks", tbl => {
      tbl.increments();

      tbl.string("desc").notNullable();

      tbl.string("notes");

      tbl
        .integer("project_id", 255)
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo("false");
    })
    .createTable("resource", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();

      tbl.string("desc");

      tbl
        .integer("task_id", 255)
        .unsigned()
        .references("id")
        .inTable("tasks")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {};
