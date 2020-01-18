const bcrypt = require('bcryptjs')

const generatePassHash = passwd => {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(passwd, salt)
    return hash
}

const initialUser = db => async () => {
    const row = await db('users').count('id as count')
    if (row[0].count === 0) {
        const user = {
            name: 'Admin',
            email: 'admin@devpleno.com.br',
            passwd: generatePassHash('123456'),
            email_checked: true,
            created: new Date(),
            updated: new Date(),
            roles: 'admin,financial,customer'
        }
        await db('users').insert(user)
    }
}
module.exports = {
    initialUser
}