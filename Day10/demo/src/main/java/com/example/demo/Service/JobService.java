
package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Job;
import com.example.demo.repository.JobRepo;



@Service
public class JobService implements JobServiceInt{
	
	@Autowired
	JobRepo itemDAO;

	
	
	@Override
	public Job add(Job item) {
		@SuppressWarnings("unused")
		Optional<Job> opt = itemDAO.findById(item.getId());
		
			return itemDAO.save(item);
		
	}



	@Override
	public Job update(Job item)  {
		@SuppressWarnings("unused")
		Optional<Job> opt = itemDAO.findById(item.getId());
		
			return itemDAO.save(item);
		
	}



	@Override
	public Job view(Integer itemId) {
		@SuppressWarnings("null")
		Optional<Job> opt = itemDAO.findById(itemId);
		
			return opt.get();
		
	}



	@SuppressWarnings("null")
	@Override
	public Job remove(Integer itemId){
		Optional<Job> opt = itemDAO.findById(itemId);
		 
			Job item = opt.get();
			itemDAO.delete(item);
			return item;
	}



	@Override
	public List<Job> viewAll() {
		List<Job> items = itemDAO.findAll();
		
			return items;
		
	}



	

}
