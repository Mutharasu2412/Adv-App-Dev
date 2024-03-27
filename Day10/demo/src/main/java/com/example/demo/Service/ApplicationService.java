
package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Application;
import com.example.demo.repository.ApplicationRepo;



@Service
public class ApplicationService implements ApplicationServiceInt{
	
	@Autowired
	ApplicationRepo itemDAO;

	@Override
	public Application add(Application item) {
		@SuppressWarnings("unused")
		Optional<Application> opt = itemDAO.findById(item.getId());
		
			return itemDAO.save(item);
		
	}



	@Override
	public Application view(Integer itemId) {
		@SuppressWarnings("null")
		Optional<Application> opt = itemDAO.findById(itemId);
		
			return opt.get();
		
	}

	@Override
	public List<Application> viewAll() {
		List<Application> items = itemDAO.findAll();
		
			return items;
		
	}
}
