class Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo) {
    this._nomeCorrentista = nomeCorrentista;
    this._banco = banco;
    this._numeroConta = numeroConta;
    this._saldo = saldo;
  }

  get nomeCorrentista() {
    return this._nomeCorrentista;
  }

  get banco() {
    return this._banco;
  }

  get numeroConta() {
    return this._numeroConta;
  }

  get saldo() {
    return this._saldo;
  }

  set nomeCorrentista(valor) {
    this._nomeCorrentista = valor;
  }

  set banco(valor) {
    this._banco = valor;
  }

  set numeroConta(valor) {
    this._numeroConta = valor;
  }

  set saldo(valor) {
    this._saldo = valor;
  }
}

class Corrente extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this._saldoEspecial = saldoEspecial;
  }

  get saldoEspecial() {
    return this._saldoEspecial;
  }

  set saldoEspecial(valor) {
    this._saldoEspecial = valor;
  }
}

class Poupanca extends Conta {
  constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
    super(nomeCorrentista, banco, numeroConta, saldo);
    this._juros = juros;
    this._dataVencimento = dataVencimento;
  }

  get juros() {
    return this._juros;
  }

  set juros(valor) {
    this._juros = valor;
  }

  get dataVencimento() {
    return this._dataVencimento;
  }

  set dataVencimento(valor) {
    this._dataVencimento = valor;
  }
}

const contaCorrente = new Corrente("João Silva", "Banco do Brasil", "12345-6", 2500, 1000);

const contaPoupanca = new Poupanca("Maria Souza", "Caixa Econômica", "98765-4", 5000, 0.05, "30/11/2025");

alert(`Conta corrente`);
alert(`Nome: ${contaCorrente._nomeCorrentista} | Banco: ${contaCorrente._banco} | \
     Numero da conta: ${contaCorrente._numeroConta} | Saldo: ${contaCorrente._saldo} | \
     Saldo Especial: ${contaCorrente._saldoEspecial}`);
    
alert(`Saldo especial`)
alert(`Nome: ${contaPoupanca._nomeCorrentista} | Banco: ${contaPoupanca._banco} | \
     Numero da conta: ${contaPoupanca._numeroConta} | Saldo: ${contaPoupanca._saldo} | \
     Saldo Especial: ${contaPoupanca._saldoEspecial}`);



