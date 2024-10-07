import connection from "./connection.js"

export async function inserirUsuario(usuario) {
    const comando = ` 
         insert into tb_usuario (nm_usuario, ds_senha)
                values(?, ?)
`

let resposta = await connection.query(comando, [usuario.nome, usuario.senha])
let info = resposta[0];

return info.insertId;
}


export async function validarUsuario(usuario) {

    const comando = `
        select 
            id_usuario id,
            nm_usuario none
        from tb_usuario
        where nm_usuario = ? and ds_senha = ?
        
    `;
    
    let resgistros = await connection.query(comando,[usuario.nome, usuario.senha])
    return resgistros [0] [0];
}

export async function consultarListaNegra(idUsuario)
{
    const comando =  `
    select id_lista_negra id,
        nm_pessoas nome,
        ds_motivo motivo,
        dt_vingança vingança, 
        nr_nota_odio notaOdio, 
        bt_perdoado perdoado, 
    from tb_lista_negra
    where id_usuario = ? 
    `;
}