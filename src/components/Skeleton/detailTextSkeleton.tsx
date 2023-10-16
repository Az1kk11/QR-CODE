import React from 'react'
import ContentLoader from 'react-content-loader'

export const DetailTextSkeleton:React.FC = () => {
    return (
        <ContentLoader
            speed={2}
            width={476}
            height={124}
            viewBox="0 0 476 124"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="24" rx="3" ry="3" width="250" height="13" />
            <rect x="0" y="0" rx="3" ry="3" width="230" height="13" />
            <rect x="0" y="48" rx="3" ry="3" width="230" height="13" />
            <rect x="0" y="71" rx="3" ry="3" width="250" height="13" />
            <rect x="1" y="95" rx="3" ry="3" width="220" height="13" />
        </ContentLoader>
    )
}
