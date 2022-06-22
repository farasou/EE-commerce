package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entities.Product;
import com.example.demo.Services.ProductService;
@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@PostMapping("/add")
	public Product addProducts(@RequestBody Product products) {

		return productService.addProducts(products);
	}
	
	@PutMapping("/update/{id}")
	public Product updateProducts(@RequestBody  Product products,@PathVariable Long id) {
		// TODO Auto-generated method stub
		return productService.updateProducts(products, id);
	}
	
	@GetMapping("/getAll")
	public List<Product> getAll() {
		// TODO Auto-generated method stub
		return productService.getAll();
	}
	
	@GetMapping("/get/{id}")
	public Product findById(@PathVariable Long id) {
		// TODO Auto-generated method stub
		return productService.findById(id);
	}
	@DeleteMapping("/delete/{id}")
	public void deleteProducts(@PathVariable Long id) {
		  productService.deleteProducts(id);
	}
	@GetMapping("/nbre")
	public int NmbreProducts() {
		// TODO Auto-generated method stub
		return productService.NmbreProducts();
	}


	
}
