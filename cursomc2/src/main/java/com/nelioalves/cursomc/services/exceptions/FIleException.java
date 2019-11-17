package com.nelioalves.cursomc.services.exceptions;

public class FIleException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public FIleException(String msg) {
		super(msg);
	}
	
	public FIleException(String msg, Throwable cause) {
		super(msg, cause);
	}

}
