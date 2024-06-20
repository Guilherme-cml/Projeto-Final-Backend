import Turma from '#models/turma'
import type { HttpContext } from '@adonisjs/core/http'

export default class TurmasController {

        async index({request}: HttpContext) {
            const page = request.input('page', 1)
            const perPage = request.input('perPage', 10)
    
            return await Turma.query().paginate(page, perPage)
        }
    
        async show({ params }: HttpContext) {   9
            return await Turma.findOrFail(params.id)
        }
    
        async store({request}: HttpContext){
            const dados = request.only(['nome', 'sala', 'data_inicio', 'professores_id', 'matriculas_id'])
            return await Turma.create(dados)
    
        }
    
        async update({ params, request }: HttpContext){
            const turmas = await Turma.findOrFail(params.id)
            const dados = request.only(['nome', 'sala', 'data_inicio', 'professores_id', 'matriculas_id'])
            turmas.merge(dados)
    
            return await turmas.save()
        }
    
        async destroy({ params }: HttpContext){
            const turmas = await Turma.findOrFail(params.id)
            turmas.delete
            const result = await turmas.delete()
            return {msg: 'Turma apagada', result}
        } }