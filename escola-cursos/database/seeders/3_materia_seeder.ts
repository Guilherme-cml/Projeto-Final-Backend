import Materia from '#models/materia'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Materia.createMany([
      {
        nome: 'Matematica',
        carga_horaria: 40,
        professor_id: 1,
        turma_id: 1
      },
      {
        nome: 'Fisica',
        carga_horaria: 40,
        professor_id: 2,
        turma_id: 2
      },
      {
        nome: 'Quimica',
        carga_horaria: 40,
        professor_id: 3,
        turma_id: 3
      },
      {
        nome: 'Portugues',
        carga_horaria: 40,
        professor_id: 4,
        turma_id: 4
      }
    ])
  }
}