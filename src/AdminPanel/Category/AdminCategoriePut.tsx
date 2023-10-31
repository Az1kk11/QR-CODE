import React from 'react'
import '../css/categories.css'

export const CategoriesPut:React.FC = () => {

    return (
        <section className='category-put'>
                <div className="category-content-box">
                    <h3 className='text-light mb-4'>Categories Put</h3>
                    <form>
                        <label className='text-light'>Categories name</label>
                        <input
                            placeholder='Title'
                        // value={title}
                        // onChange={e => setTitle(e.target.value)}
                        />
                        <label className='text-light mt-3'>Description</label>
                        <input
                            placeholder='Description'
                        // value={categories}
                        // onChange={e => setDescripton(e.target.value)}
                        />
                    </form>
                </div>
        </section>
    )
}