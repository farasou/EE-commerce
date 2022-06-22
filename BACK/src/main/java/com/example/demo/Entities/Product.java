package com.example.demo.Entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;


import lombok.Data;

@Data
@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String description;
	private String image;
	private String price;
	private Long qteStock;
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "product")
	private List<Category> categories;
	@ManyToMany(cascade = CascadeType.ALL, mappedBy = "products")
	private List<Commande> commandes = new ArrayList<>();
	

}
