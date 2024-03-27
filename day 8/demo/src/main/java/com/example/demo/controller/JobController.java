package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Job;
import com.example.demo.Service.JobServiceInt;


@RestController
@RequestMapping("/job")
public class JobController {
	
	@Autowired
	JobServiceInt itemService;
	
	
	@PostMapping("/add")
	public ResponseEntity<Job> addItem(@RequestBody Job item){
		Job newItem = itemService.add(item);
		return new ResponseEntity<Job>(newItem, HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Job> updateItem(@RequestBody Job item){
		Job updatedItem = itemService.update(item);
		return new ResponseEntity<Job>(updatedItem, HttpStatus.OK);
	}
	
	@GetMapping("/view/{itemId}")
	public ResponseEntity<Job> getItem(@PathVariable("itemId") Integer itemId){
		Job item = itemService.view(itemId);
		return new ResponseEntity<Job>(item, HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/remove/{itemId}")
	public ResponseEntity<Job> removeItem(@PathVariable("itemId") Integer itemId) {
		Job removedItem = itemService.remove(itemId);
		return new ResponseEntity<Job>(removedItem, HttpStatus.ACCEPTED);
	}

	
	@GetMapping("/viewall")
	public ResponseEntity<List<Job>> getAllItems(){
		List<Job> items = itemService.viewAll();
		return new ResponseEntity<List<Job>>(items, HttpStatus.OK);
		
	}
}
