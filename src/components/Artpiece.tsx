import Image from 'next/image';

interface ArtpieceProps {
    title: string;         // Define the type for title
    source: string;       // Define the type for source
    description?: string; // Optional description
}

function Artpiece({ title, source, description }: ArtpieceProps) {
    return (
        <div>
            <Image
                src={source}
                alt={description || title} // Fallback to title if description is not provided
                height={600}
                width={600}
            />
            <h3>{title}</h3>
        </div>
    );
}

export default Artpiece;
