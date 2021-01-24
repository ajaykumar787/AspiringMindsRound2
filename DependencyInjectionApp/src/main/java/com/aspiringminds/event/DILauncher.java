package com.aspiringminds.event;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.aspiringminds.event.di.Employee;
import com.aspiringminds.event.di.client.Client;
import com.aspiringminds.event.di.injector.EmailServiceInjector;
import com.aspiringminds.event.di.injector.MessageServiceInjector;
import com.aspiringminds.event.di.injector.SMSServiceInjector;

@SpringBootApplication
public class DILauncher {

    public static void main(String[] args) {
    	ConfigurableApplicationContext context = SpringApplication.run(DILauncher.class, args);
    	Employee emp = context.getBean(Employee.class);
    	emp.display();
    	
    	String msg = "Hi Ajay";	
		String email = "ajay@gmail.com";
		String phone = "9955995500";
		
		MessageServiceInjector injector = null;
		Client app = null;
		
		//Send email
		injector = context.getBean(EmailServiceInjector.class); // new EmailServiceInjector();
		app = injector.getClient();
		app.processMessages(msg, email);
		
		//Send SMS
		injector = context.getBean(SMSServiceInjector.class); // new SMSServiceInjector();
		app = injector.getClient();
		app.processMessages(msg, phone);
    }
}
