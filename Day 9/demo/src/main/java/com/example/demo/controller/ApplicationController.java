package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Application;
import com.example.demo.Service.ApplicationServiceInt;


@RestController
@RequestMapping("/application")
public class ApplicationController {
	
	@Autowired
	ApplicationServiceInt itemService;
	
	
	@PostMapping("/add")
	public ResponseEntity<Application> addItem(@RequestBody Application item){
		Application newItem = itemService.add(item);
		return new ResponseEntity<Application>(newItem, HttpStatus.CREATED);
	}
	
	
	
	@GetMapping("/view/{itemId}")
	public ResponseEntity<Application> getItem(@PathVariable("itemId") Integer itemId){
		Application item = itemService.view(itemId);
		return new ResponseEntity<Application>(item, HttpStatus.ACCEPTED);
	}
	

	
	@GetMapping("/viewall")
	public ResponseEntity<List<Application>> getAllItems(){
		List<Application> items = itemService.viewAll();
		return new ResponseEntity<List<Application>>(items, HttpStatus.OK);
		
	}
}
