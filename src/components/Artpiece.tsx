import Image from 'next/image'

function Artpiece({title, source,description}) {
    return (
        <div>
            <Image
            src = {source}
            alt={description}
            height={600}
            width={600}
        />
        <h3>{title}</h3>
        </div>
        
    );
}

export default Artpiece;