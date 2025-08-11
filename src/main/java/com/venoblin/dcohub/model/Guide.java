package com.venoblin.dcohub.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "guides")
public class Guide {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String author;

  @Column(nullable = false)
  private String title;
  
  @Column(columnDefinition = "TEXT")
  private String content;

  @ElementCollection
  private List<String> imagePaths = new ArrayList<>();
}