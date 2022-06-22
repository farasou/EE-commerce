package com.example.demo.Services;

import java.util.List;

import com.example.demo.Entities.Product;



public interface ProductService {
	
	
	public Product addProducts(Product products);

	public Product updateProducts(Product products, Long id);

	public void deleteProducts(Long id);
	
	public List<Product> getAll();

	public Product findById( Long id);

	public int NmbreProducts();


}
