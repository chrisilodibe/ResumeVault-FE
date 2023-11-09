
import React, { useState, ChangeEvent } from 'react';
import './home.scss';

const Home: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            setSelectedImage(file);
        }
    };

    return (
        <div className='content home'>
            <h3>Welcome To Website</h3>
            <br />
            <br />
            <span>
                <h1>Welcome To ResumeVault, we are glad to have you</h1>
                <h2>Please make sure you submit a weighty Resume to land you a mouth-watering Job</h2>
                
            </span>
        </div>
    );
}

export default Home;
