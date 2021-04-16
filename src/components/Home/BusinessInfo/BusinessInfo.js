import React from 'react';
import { faChalkboardTeacher, faClock, faGlassCheers, faIdBadge } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';


const infosData = [
    {
        title: '28',
        description: 'Teachers',
        icon: faChalkboardTeacher,
        background: 'primary'
    },
    {
        title: '1290',
        description: 'Training Hours',
        icon: faClock,
        background: 'dark'
    },
    {
        title: '5',
        description: 'Working Years',
        icon: faGlassCheers,
        background: 'primary'
    },
    {
        title: '5000+',
        description: 'Licenses Issued',
        icon: faIdBadge,
        background: 'dark'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center mt-3">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;