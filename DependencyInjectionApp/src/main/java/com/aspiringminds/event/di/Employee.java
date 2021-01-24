package com.aspiringminds.event.di;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Employee {

	private int empId;
	private String empName;
	private String deptName;	
	@Autowired
	private SkillSets skillSets;
	
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getDeptName() {
		return deptName;
	}
	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}	
	public SkillSets getSkillSets() {
		return skillSets;
	}
	public void setSkillSets(SkillSets skillSets) {
		this.skillSets = skillSets;
	}
	
	public void display() {
		System.out.println("Object Returned Successfully");
		skillSets.skillSetsDisplay();
	}
}
