import {Router} from 'express'
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todo.controller.js'
import { userAuth } from '../middlewares/auth.middleware.js'
const router=Router()
// All todo routes require an authenticated session.
router.route('/create').post(userAuth,createTodo)
router.route('/update/:id').patch(userAuth,updateTodo)
router.route('/deletetodo/:id').delete(userAuth,deleteTodo)
router.route('/gettodos').get(userAuth,getTodos)
export default router