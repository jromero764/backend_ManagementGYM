const { sequelize } = require('../../sequelizeConfig')
const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const ldap = require('ldapjs');

// const client = ldap.createClient({
//     url: 'ldap://ldap.example.com:389' // Reemplaza con la URL y el puerto de tu servidor LDAP
// });

export const LoginLDAP = (req, res) => {
    let user = req.body.user
    let password = req.body.password
    return res.status(200).json({ user, password })
    client.bind(user, password, (error) => {
        if (error) {
            console.log('error')
            return res.status(500).json({ response: 'Hubo un error', error })
        } else {
            return res.status(200).json({ response: 'Login Exitoso' })
        }
    })
}
// client.bind('cn=admin,dc=example,dc=com', 'password', (err) => {
//     if (err) {
//         console.error('Error al autenticar:', err);
//         return;
//     }

//     console.log('Conectado correctamente al servidor LDAP');

//     const opts = {
//         filter: '(uid=john)', // Filtro de búsqueda, puedes ajustarlo según tus necesidades
//         scope: 'sub'
//     };

//     client.search('dc=example,dc=com', opts, (err, res) => {
//         if (err) {
//             console.error('Error al realizar la búsqueda:', err);
//             return;
//         }

//         res.on('searchEntry', (entry) => {
//             console.log('Resultado de búsqueda:', entry.object);
//         });

//         res.on('error', (err) => {
//             console.error('Error en la búsqueda:', err.message);
//         });

//         res.on('end', () => {
//             console.log('Búsqueda completada');
//             client.unbind();
//         });
//     });
// });




