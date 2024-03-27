package com.example.demo.Service;

import java.util.List;

import com.example.demo.model.Job;


public interface JobServiceInt {
	
	public Job add(Job item);
	
	public Job update(Job item);
	
	public Job view(Integer itemId);
	
	public Job remove(Integer itemId);
	
	public List<Job> viewAll();

}
