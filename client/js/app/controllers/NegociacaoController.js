class NegociacaoController{
    constructor() {
        let $ = document.querySelector.bind(document);

        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor");
    }
    adiciona(event){
        event.preventDefault();

        console.log(`${this.inputData.value} | ${this.inputQuantidade.value} | ${this.inputValor.value}`);
    }
}