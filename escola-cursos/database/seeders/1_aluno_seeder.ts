import Aluno from '#models/aluno'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await Aluno.createMany([
      {nome: 'João', cpf: '11122233344', data_nascimento: '2001-01-01', email: 'joao@joao', sexo: 'masculino', endereco: 'rua 1', telefone: '1111111111'},
      {nome: 'Maria', cpf: '22233344455', data_nascimento: '2002-02-02', email: 'maria@maria', sexo: 'feminino', endereco: 'rua 2', telefone: '2222222222'},
      {nome: 'Pedro', cpf: '33344455566', data_nascimento: '2003-03-03', email: 'pedro@pedro', sexo: 'masculino', endereco: 'rua 3', telefone: '3333333333'},
      {nome: 'Ana', cpf: '44455566677', data_nascimento: '2003-03-03', email: 'ana@ana', sexo: 'feminino', endereco: 'rua 4', telefone: '4444444444'},
      {nome: 'Lucas', cpf: '55566677788', data_nascimento: '2004-04-04', email: 'lucas@lucas', sexo: 'masculino', endereco: 'rua 5', telefone: '5555555555'},
      {nome: 'Julia', cpf: '66677788899', data_nascimento: '2005-05-05', email: 'julia@julia', sexo: 'feminino', endereco: 'rua 6', telefone: '6666666666'},
      {nome: 'Luciana', cpf: '77788899900', data_nascimento: '2006-06-06', email: 'luciana@luciana', sexo: 'feminino', endereco: 'rua 7', telefone: '7777777777'},
    ])
    
  }
}