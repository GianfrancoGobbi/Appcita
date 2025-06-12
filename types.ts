import React from 'react';

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  avatarUrl?: string;
}

export interface NavLink {
  href: string;
  label: string;
}