package com.example.demo.Service;

import java.util.List;

import com.example.demo.model.Application;


public interface ApplicationServiceInt {
	
	public Application add(Application item);
	
	public Application view(Integer itemId);
	
	public List<Application> viewAll();

}
