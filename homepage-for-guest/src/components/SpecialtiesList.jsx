// components/SpecialtiesList.jsx
import React from 'react';
import './styles/SpecialtiesList.css';

// Import all medical icons
import therapistIcon from '../assets/051_Doctor 1.png';
import dentistIcon from '../assets/007_Tooth.png';
import surgeonIcon from '../assets/059_Surgeon.png';
import nephrologistIcon from '../assets/047_Kidney.png';
import cardiologistIcon from '../assets/037_Heart.png';
import psychiatristIcon from '../assets/medicine.png';
import traumatologistIcon from '../assets/022_Broken_Bone.png';
import pulmonologistIcon from '../assets/024_Lungs.png';
import entIcon from '../assets/033_Otoscope.png';

const SpecialtiesList = () => {
    const specialties = [
        { name: 'Psychiatrist', icon: psychiatristIcon },
        { name: 'Cardiologist', icon: cardiologistIcon },
        { name: 'Therapist', icon: therapistIcon },
        { name: 'Nephrologist', icon: nephrologistIcon },
        { name: 'Dentist', icon: dentistIcon },
        { name: 'Surgeon', icon: surgeonIcon },
        { name: 'Otolaryngologist', icon: entIcon },
        { name: 'Pulmonologist', icon: pulmonologistIcon },
        { name: 'Traumatologist', icon: traumatologistIcon }
    ];

    return (
        <section className="specialties">
            <h2>Top-searched specialties</h2>
            <div className="specialties-grid">
                {specialties.map((specialty, index) => (
                    <div className="specialty-card" key={index}>
                        <img
                            src={specialty.icon}
                            alt={specialty.name}
                            className="specialty-icon"
                        />
                        <div className="specialty-info">
                            <h3>{specialty.name}</h3>
                            {specialty.sub && <p>{specialty.sub}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpecialtiesList;