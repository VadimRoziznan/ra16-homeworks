import React, { useState, useEffect } from 'react';
import { fetchServiceDetails } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import './serviceDetails.css';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchServiceDetails(id)
      .then((data) => setService(data))
      .catch((error) => console.error('Error fetching service details:', error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="service-details">
            <h4 className="service-name">{service.name}</h4>
            <p className="service-price">Стоимость услуги: {service.price}</p>
            <p className="service-content">{service.content}</p>
            <button 
              className="back-button" 
              onClick={() => navigate(-1)} // Возвращает на предыдущую страницу
            >
              Назад
          </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;