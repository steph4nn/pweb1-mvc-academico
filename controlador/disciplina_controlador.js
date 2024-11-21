class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome");
        const codigoElemento = document.querySelector("#codigo");
        const disciplinaInserido = this.servico.inserir(Number(codigoElemento.value), nomeElemento.value );
        const listaDisciplinaElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserido) {
            this.inserirDisciplinaNoHtml(disciplinaInserido, listaDisciplinaElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Codigo: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }


}
