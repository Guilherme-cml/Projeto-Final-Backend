import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Matricula from './matricula.js'
import Professore from './professore.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare sala: number

  @column()
  declare data_inicio: string

  @column()
  declare professores_id: number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Matricula)
  declare matricula: BelongsTo<typeof Matricula>
  
  @belongsTo(() => Professore)
  declare professores: BelongsTo<typeof Professore>


}