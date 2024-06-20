import Professore from '#models/professore'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Professore.createMany([
      {nome: 'Joaquim', email: 'joaquim@joaquim', telefone: '123456789', cpf: '123456789', especialidade: 'matematica', sexo: 'm'},
      {nome: 'Maria', email: 'maria@maria', telefone: '987654321', cpf: '987654321', especialidade: 'fisica', sexo: 'f'},
      {nome: 'Pedro', email: 'pedro@pedro', telefone: '123456789', cpf: '123456789', especialidade: 'quimica', sexo: 'm'},
      {nome: 'Ana', email: 'ana@ana', telefone: '987654321', cpf: '987654321', especialidade: 'portugues', sexo: 'f'},
      {nome: 'Lucas', email: 'lucas@lucas', telefone: '123456789', cpf: '123456789', especialidade: 'portugues', sexo: 'm'},
      {nome: 'Julia', email: 'julia@julia', telefone: '987654321', cpf: '987654321', especialidade: 'matematica', sexo: 'f'},
      {nome: 'Luciana', email: 'luciana@luciana', telefone: '123456789', cpf: '123456789', especialidade: 'portugues', sexo: 'f'},
    ])
  }
}