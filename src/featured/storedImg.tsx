import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';


const StoredImg = () => {
    const [imageUrl, setImageUrl] = useState('');

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const buffer = Buffer.from(reader.result as ArrayBuffer);
                const outputPath = path.join(__dirname, 'images', file.name);
                fs.writeFile(outputPath, new Uint8Array(buffer), (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                    setImageUrl(outputPath);
                });
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
        </div>
    );
};

export default StoredImg;