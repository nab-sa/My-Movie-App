import React from "react";
import { useState, useEffect } from "react";
import { getAllCategories } from "../api/category";
import { MoviesList } from "../components/MoviesList";
import { CategoryList } from "../components/CategoryList";
import { useMovieContext } from "../context/MovieContext";
import { CategoryType } from "../models/categoryModel";

export const Home = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const { movies } = useMovieContext();

  const getCategories = async () => {
    const genre = await getAllCategories();
    setCategories(genre ?? []);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div className="flex w-screen">
        <CategoryList categories={categories} />
        <MoviesList films={movies} />
      </div>
    </div>
  );
};
