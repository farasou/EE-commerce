package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entities.Product;
import com.example.demo.Repository.ProductRepository;


@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product addProducts(Product products) {

		return productRepository.save(products);
	}

	@Override
	public Product updateProducts(Product product, Long id) {
		/*
		 * Product product=productRepository.findById(id).orElse(null);
		 * 
		 * if(products.getDescription()!=null)
		 * product.setDescription(products.getDescription());
		 * if(products.getImage()!=null) product.setImage(products.getImage());
		 * if(products.getPrice()!=null) product.setPrice(products.getPrice());
		 * if(products.getQteStock()!=null)product.setQteStock(products.getQteStock());
		 * return productRepository.save(products);
		 */
		
		product.setId(id);
		return productRepository.save(product);
		
	}

	@Override
	public void deleteProducts(Long id) {
		  productRepository.deleteById(id);
		
	}

	@Override
	public List<Product> getAll() {
		// TODO Auto-generated method stub
		return productRepository.findAll();
	}

	@Override
	public Product findById(Long id) {
		// TODO Auto-generated method stub
		return productRepository.findById(id).orElse(null);
	}

	@Override
	public int NmbreProducts() {
		// TODO Auto-generated method stub
		return productRepository.findAll().size();
	}

}
