import { Typography } from '@mui/material';

type RenderDescriptionProps = {
    text: string;
    onClick: (text: string) => void;
    wordLimit?: number; // Default is 8
};

export const renderTruncatedDescription = ({
    text,
    onClick,
    wordLimit = 8,
}: RenderDescriptionProps) => {
    const words = text.trim().split(/\s+/);

    if (words.length <= wordLimit) return text;

    return (
        <>
            {words.slice(0, wordLimit).join(' ')}{' '}
            <Typography
                component="span"
                onClick={() => onClick(text)}
                sx={{
                    color: '#1976d2',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '4px',
                    px: '6px',
                    py: '2px',
                    transition: 'all 0.2s',
                    '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    },
                }}
            >
                ...
            </Typography>
        </>
    );
};