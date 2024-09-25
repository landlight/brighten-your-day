import Card from '@mui/material/Card';

export interface CardProps {
    title: string;
    description: React.ReactNode | string;
}

export function CardBox({ title, description }: CardProps) {
    return (
        <Card style={{ padding: '20px'}} variant="outlined">{description}</Card>
    );
}