import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Professore from './professore.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Turma from './turma.js'

export default class Materia extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare carga_horaria: number

  @column()
  declare professor_id: number

  @column()
  declare turma_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Professore)
  declare professor: BelongsTo<typeof Professore>

  @hasMany(() => Turma)
  declare turma: HasMany<typeof Turma>
}