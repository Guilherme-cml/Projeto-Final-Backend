import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany} from '@adonisjs/lucid/orm'
import Aluno from './aluno.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Turma from './turma.js'

export default class Matricula extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare aluno_id: number

  @column()
  declare turma_id: number

  @column()
  declare ano_comeco: string

  @column()
  declare numero_matricula: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Aluno)
  declare aluno: BelongsTo<typeof Aluno>

  @hasMany(() => Turma)
  declare turma: HasMany<typeof Turma>

}