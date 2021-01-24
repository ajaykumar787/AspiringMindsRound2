package com.aspiringminds.event.repository;

import org.springframework.data.repository.CrudRepository;

import com.aspiringminds.event.domain.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long>{

}
