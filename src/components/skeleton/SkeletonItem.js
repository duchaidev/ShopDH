import { Skeleton, Stack } from '@mui/material';
import React from 'react';

const SkeletonItem = () => {
    return (
        <Stack spacing={1} sx={{ transition: 'opacity 0.5s ease' }}>
            <div className='w-full aspect-[7/5]'>
                <Skeleton variant="rectangular" width='100%' height="100%" />
            </div>
            <Skeleton variant="text" sx={{ fontSize: '14px' }} />
            <Skeleton variant="text" sx={{ fontSize: '14px' }} />
            <div className='flex items-end justify-end'>
                <Skeleton variant="rounded" width={100} height={30} />
            </div>

        </Stack>
    );
};

export default SkeletonItem;