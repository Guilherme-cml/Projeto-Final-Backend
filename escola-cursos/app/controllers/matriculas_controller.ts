import Matricula from '#models/matricula'
import type { HttpContext } from '@adonisjs/core/http'

export default class MatriculasController {
    async index({request}: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Matricula.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {   9
        return await Matricula.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['aluno_id','turma_id', 'ano_comeco', 'numero_matricula'])
        return await Matricula.create(dados)

    }

    async update({ params, request }: HttpContext){
        const matriculas = await Matricula.findOrFail(params.id)
        const dados = request.only(['aluno_id','turma_id', 'ano_comeco', 'numero_matricula'])
        matriculas.merge(dados)

        return await matriculas.save()
    }

    async destroy({ params }: HttpContext){
        const matriculas = await Matricula.findOrFail(params.id)
        matriculas.delete
        const result = await matriculas.delete()
        return {msg: 'Matricula apagada', result}
    }
}