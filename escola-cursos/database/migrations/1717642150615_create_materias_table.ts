import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'materias'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable()
      table.integer('carga_horaria').notNullable()
      table.integer('professor_id').notNullable().unsigned().references('id').inTable('professores')
      table.integer('turma_id').notNullable().unsigned().references('id').inTable('turmas')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}