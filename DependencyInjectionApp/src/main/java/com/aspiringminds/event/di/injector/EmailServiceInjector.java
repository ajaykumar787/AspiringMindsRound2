package com.aspiringminds.event.di.injector;

import org.springframework.stereotype.Component;

import com.aspiringminds.event.di.client.Client;
import com.aspiringminds.event.di.client.MyDIApplication;
import com.aspiringminds.event.di.service.EmailServiceImpl;

@Component
public class EmailServiceInjector implements MessageServiceInjector {

	@Override
	public Client getClient() {
		MyDIApplication app = new MyDIApplication();
		app.setService(new EmailServiceImpl());
		return app;
	}
}
