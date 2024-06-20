/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AlunosController from '#controllers/alunos_controller'
import MateriasController from '#controllers/materias_controller'
import TurmasController from '#controllers/turmas_controller'
import MatriculasController from '#controllers/matriculas_controller'
import ProfessoresController from '#controllers/professores_controller'


router.resource('/materias', MateriasController).apiOnly();
router.resource('/turmas', TurmasController).apiOnly();
router.resource('/alunos', AlunosController ).apiOnly();
router.resource('/matriculas', MatriculasController).apiOnly();
router.resource('/professores', ProfessoresController).apiOnly()