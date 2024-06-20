import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Turma from './turma.js'
import Materia from './materia.js'

export default class Professore extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare email: string

  @column()
  declare telefone: string

  @column()
  declare cpf: string

  @column()
  declare especialidade: string

  @column()
  declare sexo: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => Turma)
  declare turma: HasOne<typeof Turma>

  @hasOne(() => Materia)
  declare materia: HasOne<typeof Materia>
}