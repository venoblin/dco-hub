package com.venoblin.dcohub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DcohubApplication {
	public static void main(String[] args) {
		SpringApplication.run(DcohubApplication.class, args);
	}
}
