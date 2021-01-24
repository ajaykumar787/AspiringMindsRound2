package com.aspiringminds.event.di.injector;

import org.springframework.stereotype.Component;

import com.aspiringminds.event.di.client.Client;
import com.aspiringminds.event.di.client.MyDIApplication;
import com.aspiringminds.event.di.service.SMSServiceImpl;

@Component
public class SMSServiceInjector implements MessageServiceInjector {

	@Override
	public Client getClient() {
		return new MyDIApplication(new SMSServiceImpl());
	}
}
