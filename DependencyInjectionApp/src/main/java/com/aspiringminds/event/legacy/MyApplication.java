package com.aspiringminds.event.legacy;

public class MyApplication {

	private EmailService email = new EmailService();
	
	public void processMessages(String msg, String rec){
		email.sendEmail(msg, rec);
	}
}
