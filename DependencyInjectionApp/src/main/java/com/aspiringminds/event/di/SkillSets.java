package com.aspiringminds.event.di;

import org.springframework.stereotype.Component;

@Component
public class SkillSets {
	
	private int skillSetId;
	private String skillSetName;
	
	public int getSkillSetId() {
		return skillSetId;
	}
	public void setSkillSetId(int skillSetId) {
		this.skillSetId = skillSetId;
	}
	public String getSkillSetName() {
		return skillSetName;
	}
	public void setSkillSetName(String skillSetName) {
		this.skillSetName = skillSetName;
	}

	public void skillSetsDisplay() {
		System.out.println("THIS IS SKILL SETS DISPLAY METHOD");
	}
}
