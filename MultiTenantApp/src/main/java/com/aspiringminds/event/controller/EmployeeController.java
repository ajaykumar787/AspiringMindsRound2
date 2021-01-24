package com.aspiringminds.event.controller;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.aspiringminds.event.domain.Employee;
import com.aspiringminds.event.service.EmployeeService;

@Controller
@RequestMapping("/{tenantid}")
public class EmployeeController {	
	
	@Autowired
	private EmployeeService employeeService;

	@PersistenceContext
	private EntityManager entityManager;
	
	@RequestMapping
	public String employees(@PathVariable String tenantid, Model model) {

		Iterable<Employee> empployeeList = employeeService.getAllEMployees();
		model.addAttribute("tenantid", tenantid);
		model.addAttribute("employee", new Employee());
		model.addAttribute("employees", empployeeList);
		return "employees";
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	@Transactional
	public String addEmployee(@ModelAttribute Employee employee, Model model) {
		//System.out.println(employee+" "+model);
		if(employee.getFirstName() != null && employee.getFirstName() != "" ) {
			employeeService.saveEmployee(employee);
		}
		return "redirect:/{tenantid}";
	}
}
