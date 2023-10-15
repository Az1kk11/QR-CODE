import { useSelector } from 'react-redux';
import { selectCategories } from '../../redux/slices/categories/slice';
import './Categorys.css'
import React, { useState } from 'react';
import { Products, selectProducts } from '../../redux/slices/produts/slice';
import { BtnSkeleton } from './btnSkeleton';

type CategoriesProps = {
    filterCategory: (categoryName: string) => void;
}

export const Categorys: React.FC<CategoriesProps> = ({ filterCategory }) => {
    const { categories, isLoading } = useSelector(selectCategories)
    const [activeCategory, setActiveCategory] = useState<string>('');

    const handleCategoryClick = (categoryName: string) => {
        filterCategory(categoryName);
        setActiveCategory(categoryName);
    };

    const btnSkeletons = [...new Array(8)].map((_, i) => <BtnSkeleton key={i} />)

    return (
        <div className="category">
            <div className="btn-group">
                {isLoading ? (
                    btnSkeletons
                ) : (
                    <>
                        <button
                            onClick={() => handleCategoryClick('')}
                            className={activeCategory === '' ? 'active' : ''}
                        >
                            Hammasi
                        </button>
                        {categories.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(item.name)}
                                className={activeCategory === item.name ? 'active' : ''}
                            >
                                {item.name}
                            </button>
                        ))}
                    </>
                )}
            </div>
        </div >
    )
}

