const { PrismaClient } = require('prisma/prisma-client');
const prisma = new PrismaClient();

/**
 *
 * @route GET /api/employees
 * @desc get all employees
 * @access Private
 */
const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();
        return res.status(200).json(employees);
    } catch {
        return res.status(400).json({ message: "Не удалось получить сотрудников"});
    }
}

/**
 *
 * @route POST /api/employees/add
 * @desc add employee
 * @access Private
 */
const add = async (req, res) => {
    try {
        const data = req.body;

        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({message: 'Все поля обязательны'})
        }

        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id
            }
        })
        return res.status(201).json(employee);
    } catch {
        return res.status(500).json({ message: 'Что-то пошло не так'});
    }
}

/**
 *
 * @route POST /api/employees/remove/:id
 * @desc remove employee
 * @access Private
 */
const remove = async (req, res) => {
    const { id } = req.body;

    try {
        await prisma.employee.delete({
            where: {
                id
            }
        });

        return res.status(204).json('OK')
    } catch {
        return res.status(500).json({ message: 'Не удалось удалить сотрудника'});
    }
}

/**
 *
 * @route PUT /api/employees/edit/:id
 * @desc edit employee
 * @access Private
 */

const edit = async (req, res) => {
    const data = req.body;
    const id = data.id;

    try {
        await prisma.employee.update({
            where: {
                id
            },
            data
        });

        return res.status(204).json("OK");
    } catch {
        return res.status(500).json({ message: 'Не удалось отредакатировать сотрудника'});
    }
}

/**
 *
 * @route GET /api/employees/:id
 * @desc get employee
 * @access Private
 */

const employee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await prisma.employee.findUnique({
            where: {
                id
            }
        });

        return res.status(200).json(employee);
    } catch {
        return res.status(500).json({ message: 'Не удалось получить сотрудника'});
    }
}
module.exports = {
    all,
    add,
    remove,
    edit,
    employee
}