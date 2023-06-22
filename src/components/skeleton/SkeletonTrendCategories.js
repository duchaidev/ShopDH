import React from 'react';
import { Skeleton, Stack } from '@mui/material';

const SkeletonTrendCategories = () => {
    return (
        <Stack spacing={1} sx={{ transition: 'opacity 0.5s ease' }}>
            <div className='w-full aspect-[19/20]'>
                <Skeleton variant="rectangular" width='100%' height="100%" />
            </div>
        </Stack>
    );
};

export default SkeletonTrendCategories;