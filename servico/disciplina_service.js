class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        const discplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (discplinaPesquisada.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new Disciplina(nome, codigo);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            discplina => discplina.codigo === codigo);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }
}
