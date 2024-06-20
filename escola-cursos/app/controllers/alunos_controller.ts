 import Aluno from '#models/aluno'
import type { HttpContext } from '@adonisjs/core/http'

export default class AlunosController {
    async index({request}: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Aluno.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {   9
        return await Aluno.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'cpf','data_nascimento', 'email', 'sexo', 'endereco', 'telefone'])
        return await Aluno.create(dados)

    }

    async update({ params, request }: HttpContext){
        const aluno = await Aluno.findOrFail(params.id)
        const dados = request.only(['nome', 'cpf','data_nascimento', 'email', 'sexo', 'endereco', 'telefone'])
        
        aluno.merge(dados)

        return await aluno.save()
    }

    async destroy({ params }: HttpContext){
        const aluno = await Aluno.findOrFail(params.id)
        aluno.delete
        const result = await aluno.delete()
        return {msg: 'aluno apagado', result}
    }
}