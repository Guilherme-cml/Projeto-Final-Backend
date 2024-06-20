import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'matriculas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('aluno_id').notNullable().unsigned().references('id').inTable('alunos')
      table.integer('turma_id').notNullable().unsigned().references('id').inTable('turmas')
      table.string('ano_comeco').notNullable()
      table.integer('numero_matricula').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}