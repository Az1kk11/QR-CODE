import React from 'react'
import ContentLoader from 'react-content-loader'

export const CategoryBtnSkeleton:React.FC = (props: object) => {
    return (
        <ContentLoader
            style={{
                marginLeft: '20px'
            }}
            speed={2}
            width={82}
            height={33}
            viewBox="0 0 82 38"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="0" y="0" rx="5" ry="5" width="80" height="37" />
        </ContentLoader>
    )
}