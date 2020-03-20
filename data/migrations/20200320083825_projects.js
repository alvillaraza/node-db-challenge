exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();

      tbl.string("proj_desc");

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("tasks", tbl => {
      tbl.increments();

      tbl.string("task_desc").notNullable();

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
        .integer("project_id", 255)
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("projectResource", tbl => {
      tbl.increments();

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource")
        .onDelete("CASCADE");

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("resource")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
