package com.aspiringminds.event.di.client;

import com.aspiringminds.event.di.service.MessageService;

public class MyDIApplication implements Client{
	
	private MessageService service;
	
	public MyDIApplication(){}
	
	// Constructor Dependency Injection
	public MyDIApplication(MessageService service){
		this.service = service;
	}	
	
	//Setter Dependency Injection
	public void setService(MessageService service) {
		this.service = service;
	}

	@Override
	public void processMessages(String msg, String rec){
		this.service.sendMessage(msg, rec);
	}
}
