class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.telefones = new Set()
        this.endereco = endereco
        this.#cpf = cpf
    }
    get pegarCpf() {
        return this.#cpf
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }
    colocarMaiusculo(texto){
        return texto.toUpperCase()
    }
    colocarMinusculo(texto){
        return texto.toLowerCase()
    }
}
 
class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
    formatar() {
        return `DDD: ${this.ddd} Número: ${this.numero}`
    }
    colocarMaiusculo(texto){
        return texto.toUpperCase()
    }
    colocarMinusculo(texto){
        return texto.toLowerCase()
    }
}
 
class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
    colocarMaiusculo(texto){
        return texto.toUpperCase()
    }
    colocarMinusculo(texto){
        return texto.toLowerCase()
    }
}
 
class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.clientes = new Set()
        this.telefones = new Set()
    }
    get pegarCnpj() {
        return this.#cnpj
    }
    adicionarCliente(cliente) {
        this.clientes.add(cliente)
    }
    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }
    detalhe() {
        let descricao = `Razão Social: ${this.razaoSocial}\n`
        descricao += `Nome Fantasia: ${this.nomeFantasia}\n`
        descricao += "-----------------------------\n"
 
        this.clientes.forEach(cliente => {
            descricao += `Nome: ${cliente.nome}\n`
            descricao += `Estado: ${cliente.endereco.estado} `
            descricao += `Cidade: ${cliente.endereco.cidade} `
            descricao += `Rua: ${cliente.endereco.rua} `
            descricao += `Número: ${cliente.endereco.numero}\n`
 
            cliente.telefones.forEach(telefone => {
                descricao += telefone.formatar() + "\n"
            })
            descricao += "\n"
        })
        return descricao
    }
    colocarMaiusculo(texto){
        return texto.toUpperCase()
    }
    colocarMinusculo(texto){
        return texto.toLowerCase()
    }
}

export {Cliente, Telefone, Endereco, Empresa}