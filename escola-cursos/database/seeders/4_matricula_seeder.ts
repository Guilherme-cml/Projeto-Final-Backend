import Matricula from '#models/matricula'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Matricula.createMany([
      {
        aluno_id: 1,
        turma_id: 1,
        ano_comeco: '2022-01-01',
        numero_matricula: 123
      },
      {
        aluno_id: 2,
        turma_id: 2,
        ano_comeco: '2021-01-01',
        numero_matricula: 1234
      },
      {
        aluno_id: 3,
        turma_id: 3,
        ano_comeco: '2020-01-01',
        numero_matricula: 123345
      }
    ])
  }
}