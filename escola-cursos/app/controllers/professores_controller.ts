import type { HttpContext } from '@adonisjs/core/http'

import Professore from "#models/professore"

export default class ProfessoresController {
    async index({request}: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Professore.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {   9
        return await Professore.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'email', 'telefone', 'cpf', 'especialidade', 'sexo'])
        return await Professore.create(dados)

    }

    async update({ params, request }: HttpContext){
        const professores = await Professore.findOrFail(params.id)
        const dados = request.only(['nome', 'email', 'telefone', 'cpf', 'especialidade', 'sexo'])
        professores.merge(dados)

        return await professores.save()
    }

    async destroy({ params }: HttpContext){
        const professores = await Professore.findOrFail(params.id)
        professores.delete
        const result = await professores.delete()
        return {msg: 'Professor apagado', result}
    }}