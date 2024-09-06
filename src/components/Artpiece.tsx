import Image from 'next/image'

function Artpiece({source, description}) {
    return (
        <Image
            src = {source}
            alt={description}
            height={600}
            width={600}
        />
    );
}

export default Artpiece;