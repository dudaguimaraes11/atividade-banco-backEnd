// A consulta para o banco e dados fazeos no model
// ex: SELECT *FROM bruxos; poré estamos usando o PRISMA que abstrai o comando SQL

// Import o prisma Client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//Crio a variavel findAll e já exporto
export const findAll = async () => {
    //SELECT * FROM bruxos findMany
    return await prisma.bruxo.findMany({
        orderBy: { nome: 'asc'}
    })
} 

// Crio a variável findById e já exporto
export const findById = async (id) => {
    //SELECT * FROM bruxos WHERE id = 1; 
    return await prisma.bruxo.findUnique({
        where: { id: Number(id)}
    });
}

// CREATE
export const create = async (data) => {
    return await prisma.bruxo.create ({
        data: {
            nome: data.nome,
            casa: data.casa,
            patrono: data.patrono,
            varinha: data.varinha,
            anoMatricula: data.anoMatricula
        }
    })
}

// DELETE 
export const deleteBruxo = async (id) => {
    return await prisma.bruxo.delete({
        where: { id: Number(id) }
    })
}

// UPDATE
export const update = async (id, data) => {
    return await prisma.bruxo.update({
        where: {id: Number(id)},
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.casa && { casa: data.casa }),
            ...(data.patrono && { patrono: data.patrono }),
            ...(data.varinha && { varinha: data.varinha }),
            ...(data.anoMatricula && { anoMatricula: Number(data.anoMatricula)}),
            ...(data.ativo !== undefined && { ativo: data.ativo}),
        }
    })
}
