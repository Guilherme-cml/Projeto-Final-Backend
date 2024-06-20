import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'turmas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable()
      table.integer('sala', 2).notNullable()
      table.string('data_inicio').notNullable()
      table.integer('professores_id').notNullable().unsigned().references('id').inTable('professores')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}