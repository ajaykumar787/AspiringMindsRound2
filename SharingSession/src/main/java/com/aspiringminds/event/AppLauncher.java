package com.aspiringminds.event;

import java.io.File;

import org.apache.catalina.Context;
import org.apache.catalina.startup.Tomcat;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
@EnableAutoConfiguration
public class AppLauncher {

    private static int port = 8080;
    private static final String WEBAPP_DIR = "src/main/webapp/";

    public static void main(String[] args) throws Exception {
        if (args.length == 1) {
            port = Integer.parseInt(args[0]);
        }
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(port);

        Context context = tomcat.addWebapp("", new File(WEBAPP_DIR).getAbsolutePath());

        File configFile = new File(WEBAPP_DIR + "WEB-INF/web.xml");
        context.setConfigFile(configFile.toURI().toURL());

        tomcat.start();
        tomcat.getServer().await();
    }
    
	/*
	 * @Bean StringRedisTemplate template(RedisConnectionFactory connectionFactory)
	 * { return new StringRedisTemplate(connectionFactory); }
	 * 
	 * @Bean public static ConfigureRedisAction configureRedisAction() { return
	 * ConfigureRedisAction.NO_OP; }
	 */

}
