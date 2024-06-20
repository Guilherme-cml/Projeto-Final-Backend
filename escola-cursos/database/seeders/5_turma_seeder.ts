import Turma from '#models/turma'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Turma.createMany([
      {
        nome: 'matematica',
        sala: 1,
        data_inicio: '2022-01-01',
        professores_id: 1
      },
      {
        nome: 'fisica',
        sala: 2,
        data_inicio: '2022-01-01',
        professores_id: 2
      },
      {
        nome: 'quimica',
        sala: 3,
        data_inicio: '2022-01-01',
        professores_id: 3
        },
      {
        nome: 'portugues',
        sala: 4,
        data_inicio: '2022-01-01',
        professores_id: 4
       
      }
    ])
  }
}