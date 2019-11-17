package com.nelioalves.cursomc.resources.exception;

import org.springframework.http.HttpStatus;

public enum ErroEnum {
	NAO_ENCONTRADO(HttpStatus.NOT_FOUND.value(), "Não encontrado"),
	INTEGRIDADEDE(HttpStatus.BAD_REQUEST.value(), "Integridade de dados"),
	VALIDACAO(HttpStatus.UNPROCESSABLE_ENTITY.value(), "Erro de validação"),
	ACESSO_NEGADO(HttpStatus.FORBIDDEN.value(), "Acesso negado"),
	ERRO_DE_ARQUIVO(HttpStatus.BAD_REQUEST.value(), "Erro de Arquivo"),
	AMAZON_CLIENT(HttpStatus.BAD_REQUEST.value(), "Erro Amazon Client"),
	AMAZON_S3(HttpStatus.BAD_REQUEST.value(), "Erro S3");

	private int cod;
	private String descricao;

	private ErroEnum(int cod, String descricao) {
		this.cod = cod;
		this.descricao = descricao;
	}

	public int getCod() {
		return cod;
	}

	public String getDescricao() {
		return descricao;
	}

	public static ErroEnum toEnum(Integer cod) {

		if (cod == null) {
			return null;
		}

		for (ErroEnum x : ErroEnum.values()) {
			if (cod.equals(x.getCod())) {
				return x;
			}
		}

		throw new IllegalArgumentException("Id inválido: " + cod);
	}
}
