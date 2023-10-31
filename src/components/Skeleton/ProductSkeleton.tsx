import React from 'react'
import ContentLoader from 'react-content-loader'

export const ProductSkeleton: React.FC = (props: object) => {
    return (
        <ContentLoader
        style={{ marginLeft: '30px', marginBottom: "50xp", marginTop: "-30px"}}
            speed={2}
            width={250}
            height={350}
            viewBox="0 0 200 250"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            className='skeleton-cards'
            {...props}
        >
            <rect x="0" y="205" rx="4" ry="4" width="47" height="8" />
            <rect x="0" y="0" rx="12" ry="12" width="188" height="200" />
            <rect x="0" y="219" rx="4" ry="4" width="98" height="8" />
            <rect x="0" y="233" rx="3" ry="3" width="163" height="8" />
        </ContentLoader>
    )
}