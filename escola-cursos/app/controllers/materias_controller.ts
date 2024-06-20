import Materia from '#models/materia'
import type { HttpContext } from '@adonisjs/core/http'

export default class MateriasController {
    async index({request}: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Materia.query().paginate(page, perPage)
    }

    async show({ params }: HttpContext) {   9
        return await Materia.findOrFail(params.id)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome', 'carga_horaria', 'professor_id', 'turma_id'])
        return await Materia.create(dados)

    }

    async update({ params, request }: HttpContext){
        const materias = await Materia.findOrFail(params.id)
        const dados = request.only(['nome', 'carga_horaria', 'professor_id', 'turma_id'])
        materias.merge(dados)

        return await materias.save()
    }

    async destroy({ params }: HttpContext){
        const materias = await Materia.findOrFail(params.id)
        materias.delete
        const result = await materias.delete()
        return {msg: 'materia apagado', result}
    }
}