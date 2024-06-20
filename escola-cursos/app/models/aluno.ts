import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Matricula from './matricula.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

    @column()
    declare nome: string

  @column()
  declare cpf: string

  @column()
  declare data_nascimento: string

  @column()
  declare email: string

  @column()
  declare sexo: string

  @column()
  declare endereco: string

  @column()
  declare telefone: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => Matricula)
  declare matricula: HasOne<typeof Matricula>
}

